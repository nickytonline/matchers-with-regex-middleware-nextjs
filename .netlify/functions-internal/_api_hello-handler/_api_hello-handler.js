const { Server } = require("http");
// We copy the file here rather than requiring from the node module
const { Bridge } = require("./bridge");
const { getMaxAge, getMultiValueHeaders, getNextServer } = require('./handlerUtils')




const { config }  = require("../../../.next/required-server-files.json")
let staticManifest
const path = require("path");
const pageRoot = path.resolve(path.join(__dirname, "../../../.next", "serverless", "pages"));
const handler = ((conf, app, pageRoot, page) => {
    var _a;
    // Change working directory into the site root, unless using Nx, which moves the
    // dist directory and handles this itself
    const dir = path.resolve(__dirname, app);
    if (pageRoot.startsWith(dir)) {
        process.chdir(dir);
    }
    // This is just so nft knows about the page entrypoints. It's not actually used
    try {
        // eslint-disable-next-line n/no-missing-require
        require.resolve('./pages.js');
    }
    catch { }
    // React assumes you want development mode if NODE_ENV is unset.
    ;
    (_a = process.env).NODE_ENV || (_a.NODE_ENV = 'production');
    // We don't want to write ISR files to disk in the lambda environment
    conf.experimental.isrFlushToDisk = false;
    // This is our flag that we use when patching the source
    // eslint-disable-next-line no-underscore-dangle
    process.env._BYPASS_SSG = 'true';
    for (const [key, value] of Object.entries(conf.env)) {
        process.env[key] = String(value);
    }
    // We memoize this because it can be shared between requests, but don't instantiate it until
    // the first request because we need the host and port.
    let bridge;
    const getBridge = (event) => {
        if (bridge) {
            return bridge;
        }
        // Scheduled functions don't have a URL, but we need to give one so Next knows the route to serve
        const url = event.rawUrl ? new URL(event.rawUrl) : new URL(path, process.env.URL || 'http://n');
        const port = Number.parseInt(url.port) || 80;
        const NextServer = getNextServer();
        const nextServer = new NextServer({
            // We know we're just an API route, so can enable minimal mode
            minimalMode: true,
            conf,
            dir,
            customServer: false,
            hostname: url.hostname,
            port,
        });
        const requestHandler = nextServer.getRequestHandler();
        const server = new Server(async (req, res) => {
            try {
                await requestHandler(req, res);
            }
            catch (error) {
                console.error(error);
                throw new Error('Error handling request. See function logs for details.');
            }
        });
        bridge = new Bridge(server);
        bridge.listen();
        return bridge;
    };
    return async function handler(event, context) {
        // Ensure that paths are encoded - but don't double-encode them
        event.path = event.rawUrl ? new URL(event.rawUrl).pathname : page;
        // Next expects to be able to parse the query from the URL
        const query = new URLSearchParams(event.queryStringParameters).toString();
        event.path = query ? `${event.path}?${query}` : event.path;
        // We know the page
        event.headers['x-matched-path'] = page;
        const { headers, ...result } = await getBridge(event).launcher(event, context);
        // Convert all headers to multiValueHeaders
        const multiValueHeaders = getMultiValueHeaders(headers);
        multiValueHeaders['cache-control'] = ['public, max-age=0, must-revalidate'];
        console.log(`[${event.httpMethod}] ${event.path} (API)`);
        return {
            ...result,
            multiValueHeaders,
            isBase64Encoded: result.encoding === 'base64',
        };
    };
})(config, "../../..", pageRoot, "/api/hello")
exports.handler = handler