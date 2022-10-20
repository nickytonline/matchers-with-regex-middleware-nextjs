var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectDomainLocale = detectDomainLocale;
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      let domainItem;
      if (domainItems) {
        if (detectedLocale) {
          detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems) {
          var ref, ref1;
          const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
          if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale) => locale.toLowerCase() === detectedLocale))) {
            domainItem = item;
            break;
          }
        }
      }
      return domainItem;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeTrailingSlash = removeTrailingSlash;
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parsePath = parsePath;
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathPrefix = addPathPrefix;
    var _parsePath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${prefix}${pathname}${query}${hash}`;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js
var require_add_path_suffix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathSuffix = addPathSuffix;
    var _parsePath = require_parse_path();
    function addPathSuffix(path, suffix) {
      if (!path.startsWith("/") || !suffix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${pathname}${suffix}${query}${hash}`;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pathHasPrefix = pathHasPrefix;
    var _parsePath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsePath).parsePath(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLocale = addLocale;
    var _addPathPrefix = require_add_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (locale && locale !== defaultLocale && (ignorePrefix || !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), "/api"))) {
        return (0, _addPathPrefix).addPathPrefix(path, `/${locale}`);
      }
      return path;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js
var require_format_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatNextPathnameInfo = formatNextPathnameInfo;
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _addPathPrefix = require_add_path_prefix();
    var _addPathSuffix = require_add_path_suffix();
    var _addLocale = require_add_locale();
    function formatNextPathnameInfo(info) {
      let pathname = (0, _addLocale).addLocale(info.pathname, info.locale, info.buildId ? void 0 : info.defaultLocale, info.ignorePrefix);
      if (info.buildId) {
        pathname = (0, _addPathSuffix).addPathSuffix((0, _addPathPrefix).addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === "/" ? "index.json" : ".json");
      }
      pathname = (0, _addPathPrefix).addPathPrefix(pathname, info.basePath);
      return info.trailingSlash ? !info.buildId && !pathname.endsWith("/") ? (0, _addPathSuffix).addPathSuffix(pathname, "/") : pathname : (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    }
  }
});

// node_modules/next/dist/shared/lib/get-hostname.js
var require_get_hostname = __commonJS({
  "node_modules/next/dist/shared/lib/get-hostname.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getHostname = getHostname;
    function getHostname(parsed, headers) {
      var ref;
      return (ref = !Array.isArray(headers == null ? void 0 : headers.host) && (headers == null ? void 0 : headers.host) || parsed.hostname) == null ? void 0 : ref.split(":")[0].toLowerCase();
    }
  }
});

// node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeLocalePath = normalizeLocalePath;
    function normalizeLocalePath(pathname, locales) {
      let detectedLocale;
      const pathnameParts = pathname.split("/");
      (locales || []).some((locale) => {
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
          detectedLocale = locale;
          pathnameParts.splice(1, 1);
          pathname = pathnameParts.join("/") || "/";
          return true;
        }
        return false;
      });
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js
var require_remove_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removePathPrefix = removePathPrefix;
    var _pathHasPrefix = require_path_has_prefix();
    function removePathPrefix(path, prefix) {
      if ((0, _pathHasPrefix).pathHasPrefix(path, prefix)) {
        const withoutPrefix = path.slice(prefix.length);
        return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
      }
      return path;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js
var require_get_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getNextPathnameInfo = getNextPathnameInfo;
    var _normalizeLocalePath = require_normalize_locale_path();
    var _removePathPrefix = require_remove_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function getNextPathnameInfo(pathname, options) {
      var _nextConfig;
      const { basePath, i18n, trailingSlash } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
      const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
      };
      if (basePath && (0, _pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
        info.pathname = (0, _removePathPrefix).removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
      }
      if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? `/${paths.slice(1).join("/")}` : "/";
        info.buildId = buildId;
      }
      if (i18n) {
        const pathLocale = (0, _normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
      }
      return info;
    }
  }
});

// node_modules/next/dist/server/web/next-url.js
var require_next_url = __commonJS({
  "node_modules/next/dist/server/web/next-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _detectDomainLocale = require_detect_domain_locale();
    var _formatNextPathnameInfo = require_format_next_pathname_info();
    var _getHostname = require_get_hostname();
    var _getNextPathnameInfo = require_get_next_pathname_info();
    var FLIGHT_PARAMETERS = [
      "__flight__",
      "__flight_router_state_tree__",
      "__flight_prefetch__"
    ];
    var REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
    function parseURL(url, base) {
      return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
    }
    function parseFlightParameters(searchParams) {
      let flightSearchParameters = {};
      let flightSearchParametersUpdated = false;
      for (const name of FLIGHT_PARAMETERS) {
        const value = searchParams.get(name);
        if (value === null) {
          continue;
        }
        flightSearchParameters[name] = value;
        flightSearchParametersUpdated = true;
      }
      if (!flightSearchParametersUpdated) {
        return void 0;
      }
      return flightSearchParameters;
    }
    var Internal = Symbol("NextURLInternal");
    var NextURL = class {
      constructor(input, baseOrOpts, opts) {
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
          base = baseOrOpts;
          options = opts || {};
        } else {
          options = opts || baseOrOpts || {};
        }
        this[Internal] = {
          url: parseURL(input, base != null ? base : options.base),
          options,
          basePath: ""
        };
        this.analyzeUrl();
      }
      analyzeUrl() {
        var ref, ref1, ref2, ref3, ref4;
        const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(this[Internal].url.pathname, {
          nextConfig: this[Internal].options.nextConfig,
          parseData: true
        });
        this[Internal].domainLocale = (0, _detectDomainLocale).detectDomainLocale((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref1 = ref.i18n) == null ? void 0 : ref1.domains, (0, _getHostname).getHostname(this[Internal].url, this[Internal].options.headers));
        const defaultLocale = ((ref2 = this[Internal].domainLocale) == null ? void 0 : ref2.defaultLocale) || ((ref3 = this[Internal].options.nextConfig) == null ? void 0 : (ref4 = ref3.i18n) == null ? void 0 : ref4.defaultLocale);
        this[Internal].url.pathname = pathnameInfo.pathname;
        this[Internal].defaultLocale = defaultLocale;
        var _basePath;
        this[Internal].basePath = (_basePath = pathnameInfo.basePath) != null ? _basePath : "";
        this[Internal].buildId = pathnameInfo.buildId;
        var _locale;
        this[Internal].locale = (_locale = pathnameInfo.locale) != null ? _locale : defaultLocale;
        this[Internal].trailingSlash = pathnameInfo.trailingSlash;
        this[Internal].flightSearchParameters = parseFlightParameters(this[Internal].url.searchParams);
      }
      formatPathname() {
        return (0, _formatNextPathnameInfo).formatNextPathnameInfo({
          basePath: this[Internal].basePath,
          buildId: this[Internal].buildId,
          defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : void 0,
          locale: this[Internal].locale,
          pathname: this[Internal].url.pathname,
          trailingSlash: this[Internal].trailingSlash
        });
      }
      formatSearch() {
        const flightSearchParameters = this[Internal].flightSearchParameters;
        if (!flightSearchParameters) {
          return this[Internal].url.search;
        }
        const searchParams = new URLSearchParams(this[Internal].url.searchParams);
        for (const name in flightSearchParameters) {
          searchParams.set(name, flightSearchParameters[name]);
        }
        const params = searchParams.toString();
        return params === "" ? "" : `?${params}`;
      }
      get buildId() {
        return this[Internal].buildId;
      }
      set buildId(buildId) {
        this[Internal].buildId = buildId;
      }
      get flightSearchParameters() {
        return this[Internal].flightSearchParameters;
      }
      set flightSearchParameters(flightSearchParams) {
        if (flightSearchParams) {
          for (const name of FLIGHT_PARAMETERS) {
            if (flightSearchParams[name]) {
              this[Internal].url.searchParams.set(name, flightSearchParams[name]);
            } else {
              this[Internal].url.searchParams.delete(name);
            }
          }
        } else {
          for (const name of FLIGHT_PARAMETERS) {
            this[Internal].url.searchParams.delete(name);
          }
        }
        this[Internal].flightSearchParameters = flightSearchParams;
      }
      get locale() {
        var _locale;
        return (_locale = this[Internal].locale) != null ? _locale : "";
      }
      set locale(locale) {
        var ref, ref5;
        if (!this[Internal].locale || !((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref5 = ref.i18n) == null ? void 0 : ref5.locales.includes(locale))) {
          throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
      }
      get defaultLocale() {
        return this[Internal].defaultLocale;
      }
      get domainLocale() {
        return this[Internal].domainLocale;
      }
      get searchParams() {
        return this[Internal].url.searchParams;
      }
      get host() {
        return this[Internal].url.host;
      }
      set host(value) {
        this[Internal].url.host = value;
      }
      get hostname() {
        return this[Internal].url.hostname;
      }
      set hostname(value) {
        this[Internal].url.hostname = value;
      }
      get port() {
        return this[Internal].url.port;
      }
      set port(value) {
        this[Internal].url.port = value;
      }
      get protocol() {
        return this[Internal].url.protocol;
      }
      set protocol(value) {
        this[Internal].url.protocol = value;
      }
      get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}`;
      }
      set href(url) {
        this[Internal].url = parseURL(url);
        this.analyzeUrl();
      }
      get origin() {
        return this[Internal].url.origin;
      }
      get pathname() {
        return this[Internal].url.pathname;
      }
      set pathname(value) {
        this[Internal].url.pathname = value;
      }
      get hash() {
        return this[Internal].url.hash;
      }
      set hash(value) {
        this[Internal].url.hash = value;
      }
      get search() {
        return this[Internal].url.search;
      }
      set search(value) {
        this[Internal].url.search = value;
      }
      get password() {
        return this[Internal].url.password;
      }
      set password(value) {
        this[Internal].url.password = value;
      }
      get username() {
        return this[Internal].url.username;
      }
      set username(value) {
        this[Internal].url.username = value;
      }
      get basePath() {
        return this[Internal].basePath;
      }
      set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
      }
      toString() {
        return this.href;
      }
      toJSON() {
        return this.href;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          href: this.href,
          origin: this.origin,
          protocol: this.protocol,
          username: this.username,
          password: this.password,
          host: this.host,
          hostname: this.hostname,
          port: this.port,
          pathname: this.pathname,
          search: this.search,
          searchParams: this.searchParams,
          hash: this.hash
        };
      }
      clone() {
        return new NextURL(String(this), this[Internal].options);
      }
    };
    exports.NextURL = NextURL;
  }
});

// node_modules/next/dist/server/web/utils.js
var require_utils = __commonJS({
  "node_modules/next/dist/server/web/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromNodeHeaders = fromNodeHeaders;
    exports.splitCookiesString = splitCookiesString;
    exports.toNodeHeaders = toNodeHeaders;
    exports.validateURL = validateURL;
    function fromNodeHeaders(object) {
      const headers = new Headers();
      for (let [key, value] of Object.entries(object)) {
        const values = Array.isArray(value) ? value : [
          value
        ];
        for (let v of values) {
          if (v !== void 0) {
            headers.append(key, v);
          }
        }
      }
      return headers;
    }
    function splitCookiesString(cookiesString) {
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    function toNodeHeaders(headers) {
      const result = {};
      if (headers) {
        for (const [key, value] of headers.entries()) {
          result[key] = value;
          if (key.toLowerCase() === "set-cookie") {
            result[key] = splitCookiesString(value);
          }
        }
      }
      return result;
    }
    function validateURL(url) {
      try {
        return String(new URL(String(url)));
      } catch (error) {
        throw new Error(`URLs is malformed. Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
          cause: error
        });
      }
    }
  }
});

// node_modules/next/dist/server/web/error.js
var require_error = __commonJS({
  "node_modules/next/dist/server/web/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PageSignatureError = class extends Error {
      constructor({ page }) {
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      }
    };
    exports.PageSignatureError = PageSignatureError;
    var RemovedPageError = class extends Error {
      constructor() {
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
      }
    };
    exports.RemovedPageError = RemovedPageError;
    var RemovedUAError = class extends Error {
      constructor() {
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
      }
    };
    exports.RemovedUAError = RemovedUAError;
  }
});

// node_modules/next/dist/compiled/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/next/dist/compiled/cookie/index.js"(exports, module) {
    (() => {
      "use strict";
      if (typeof __nccwpck_require__ !== "undefined")
        __nccwpck_require__.ab = __dirname + "/";
      var e = {};
      (() => {
        var r = e;
        r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e2, r2) {
          if (typeof e2 !== "string") {
            throw new TypeError("argument str must be a string");
          }
          var t2 = {};
          var n2 = r2 || {};
          var o = e2.split(a);
          var s = n2.decode || i;
          for (var p = 0; p < o.length; p++) {
            var f = o[p];
            var u = f.indexOf("=");
            if (u < 0) {
              continue;
            }
            var v = f.substr(0, u).trim();
            var c = f.substr(++u, f.length).trim();
            if (c[0] == '"') {
              c = c.slice(1, -1);
            }
            if (t2[v] == void 0) {
              t2[v] = tryDecode(c, s);
            }
          }
          return t2;
        }
        function serialize(e2, r2, i2) {
          var a2 = i2 || {};
          var o = a2.encode || t;
          if (typeof o !== "function") {
            throw new TypeError("option encode is invalid");
          }
          if (!n.test(e2)) {
            throw new TypeError("argument name is invalid");
          }
          var s = o(r2);
          if (s && !n.test(s)) {
            throw new TypeError("argument val is invalid");
          }
          var p = e2 + "=" + s;
          if (a2.maxAge != null) {
            var f = a2.maxAge - 0;
            if (isNaN(f) || !isFinite(f)) {
              throw new TypeError("option maxAge is invalid");
            }
            p += "; Max-Age=" + Math.floor(f);
          }
          if (a2.domain) {
            if (!n.test(a2.domain)) {
              throw new TypeError("option domain is invalid");
            }
            p += "; Domain=" + a2.domain;
          }
          if (a2.path) {
            if (!n.test(a2.path)) {
              throw new TypeError("option path is invalid");
            }
            p += "; Path=" + a2.path;
          }
          if (a2.expires) {
            if (typeof a2.expires.toUTCString !== "function") {
              throw new TypeError("option expires is invalid");
            }
            p += "; Expires=" + a2.expires.toUTCString();
          }
          if (a2.httpOnly) {
            p += "; HttpOnly";
          }
          if (a2.secure) {
            p += "; Secure";
          }
          if (a2.sameSite) {
            var u = typeof a2.sameSite === "string" ? a2.sameSite.toLowerCase() : a2.sameSite;
            switch (u) {
              case true:
                p += "; SameSite=Strict";
                break;
              case "lax":
                p += "; SameSite=Lax";
                break;
              case "strict":
                p += "; SameSite=Strict";
                break;
              case "none":
                p += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return p;
        }
        function tryDecode(e2, r2) {
          try {
            return r2(e2);
          } catch (r3) {
            return e2;
          }
        }
      })();
      module.exports = e;
    })();
  }
});

// node_modules/next/dist/server/web/spec-extension/cookies.js
var require_cookies = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _cookie = _interopRequireDefault(require_cookie());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var normalizeCookieOptions = (options) => {
      options = Object.assign({}, options);
      if (options.maxAge) {
        options.expires = new Date(Date.now() + options.maxAge * 1e3);
      }
      if (options.path == null) {
        options.path = "/";
      }
      return options;
    };
    var serializeValue = (value) => typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);
    var serializeExpiredCookie = (key, options = {}) => _cookie.default.serialize(key, "", {
      expires: new Date(0),
      path: "/",
      ...options
    });
    var deserializeCookie = (input) => {
      const value = input.headers.get("set-cookie");
      return value !== void 0 && value !== null ? value.split(", ") : [];
    };
    var serializeCookie = (input) => input.join(", ");
    var Cookies = class extends Map {
      constructor(input) {
        const parsedInput = typeof input === "string" ? _cookie.default.parse(input) : {};
        super(Object.entries(parsedInput));
      }
      set(key, value, options = {}) {
        return super.set(key, _cookie.default.serialize(key, serializeValue(value), normalizeCookieOptions(options)));
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return Object.fromEntries(this.entries());
      }
    };
    exports.Cookies = Cookies;
    var NextCookies = class extends Cookies {
      constructor(response) {
        super(response.headers.get("cookie"));
        this.response = response;
      }
      get = (...args) => {
        return this.getWithOptions(...args).value;
      };
      getWithOptions = (...args) => {
        const raw = super.get(...args);
        if (typeof raw !== "string")
          return {
            value: raw,
            options: {}
          };
        const { [args[0]]: value, ...options } = _cookie.default.parse(raw);
        return {
          value,
          options
        };
      };
      set = (...args) => {
        const isAlreadyAdded = super.has(args[0]);
        super.set(...args);
        const currentCookie = super.get(args[0]);
        if (typeof currentCookie !== "string") {
          throw new Error(`Invariant: failed to generate cookie for ${JSON.stringify(args)}`);
        }
        if (isAlreadyAdded) {
          const setCookie = serializeCookie(deserializeCookie(this.response).filter((value) => !value.startsWith(`${args[0]}=`)));
          if (setCookie) {
            this.response.headers.set("set-cookie", [
              currentCookie,
              setCookie
            ].join(", "));
          } else {
            this.response.headers.set("set-cookie", currentCookie);
          }
        } else {
          this.response.headers.append("set-cookie", currentCookie);
        }
        return this;
      };
      delete = (key, options = {}) => {
        const isDeleted = super.delete(key);
        if (isDeleted) {
          const setCookie = serializeCookie(deserializeCookie(this.response).filter((value) => !value.startsWith(`${key}=`)));
          const expiredCookie = serializeExpiredCookie(key, options);
          this.response.headers.set("set-cookie", [
            expiredCookie,
            setCookie
          ].join(", "));
        }
        return isDeleted;
      };
      clear = (options = {}) => {
        const expiredCookies = Array.from(super.keys()).map((key) => serializeExpiredCookie(key, options)).join(", ");
        if (expiredCookies)
          this.response.headers.set("set-cookie", expiredCookies);
        return super.clear();
      };
    };
    exports.NextCookies = NextCookies;
  }
});

// node_modules/next/dist/server/web/spec-extension/request.js
var require_request = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.INTERNALS = void 0;
    var _nextUrl = require_next_url();
    var _utils = require_utils();
    var _error = require_error();
    var _cookies = require_cookies();
    var INTERNALS = Symbol("internal request");
    exports.INTERNALS = INTERNALS;
    var NextRequest = class extends Request {
      constructor(input, init = {}) {
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils).validateURL(url);
        super(url, init);
        this[INTERNALS] = {
          cookies: new _cookies.NextCookies(this),
          geo: init.geo || {},
          ip: init.ip,
          url: new _nextUrl.NextURL(url, {
            headers: (0, _utils).toNodeHeaders(this.headers),
            nextConfig: init.nextConfig
          })
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          geo: this.geo,
          ip: this.ip,
          nextUrl: this.nextUrl,
          url: this.url,
          bodyUsed: this.bodyUsed,
          cache: this.cache,
          credentials: this.credentials,
          destination: this.destination,
          headers: Object.fromEntries(this.headers),
          integrity: this.integrity,
          keepalive: this.keepalive,
          method: this.method,
          mode: this.mode,
          redirect: this.redirect,
          referrer: this.referrer,
          referrerPolicy: this.referrerPolicy,
          signal: this.signal
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      get geo() {
        return this[INTERNALS].geo;
      }
      get ip() {
        return this[INTERNALS].ip;
      }
      get nextUrl() {
        return this[INTERNALS].url;
      }
      get page() {
        throw new _error.RemovedPageError();
      }
      get ua() {
        throw new _error.RemovedUAError();
      }
      get url() {
        return this[INTERNALS].url.toString();
      }
    };
    exports.NextRequest = NextRequest;
  }
});

// node_modules/next/dist/server/web/spec-extension/response.js
var require_response = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _nextUrl = require_next_url();
    var _utils = require_utils();
    var _cookies = require_cookies();
    var INTERNALS = Symbol("internal response");
    var REDIRECTS = /* @__PURE__ */ new Set([
      301,
      302,
      303,
      307,
      308
    ]);
    var NextResponse2 = class extends Response {
      constructor(body, init = {}) {
        super(body, init);
        this[INTERNALS] = {
          cookies: new _cookies.NextCookies(this),
          url: init.url ? new _nextUrl.NextURL(init.url, {
            headers: (0, _utils).toNodeHeaders(this.headers),
            nextConfig: init.nextConfig
          }) : void 0
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          url: this.url,
          body: this.body,
          bodyUsed: this.bodyUsed,
          headers: Object.fromEntries(this.headers),
          ok: this.ok,
          redirected: this.redirected,
          status: this.status,
          statusText: this.statusText,
          type: this.type
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse2(response.body, response);
      }
      static redirect(url, init) {
        var ref;
        const status = typeof init === "number" ? init : (ref = init == null ? void 0 : init.status) != null ? ref : 307;
        if (!REDIRECTS.has(status)) {
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils).validateURL(url));
        return new NextResponse2(null, {
          ...initObj,
          headers,
          status
        });
      }
      static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils).validateURL(destination));
        return new NextResponse2(null, {
          ...init,
          headers
        });
      }
      static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        return new NextResponse2(null, {
          ...init,
          headers
        });
      }
    };
    exports.NextResponse = NextResponse2;
  }
});

// node_modules/next/dist/compiled/ua-parser-js/ua-parser.js
var require_ua_parser = __commonJS({
  "node_modules/next/dist/compiled/ua-parser-js/ua-parser.js"(exports, module) {
    (() => {
      var i = { 412: function(i2, s2) {
        (function(e2, o) {
          "use strict";
          var r = "0.7.28", a = "", n = "?", t = "function", l = "undefined", w = "object", d = "string", b = "major", u = "model", c = "name", m = "type", p = "vendor", f = "version", h = "architecture", g = "console", v = "mobile", x = "tablet", k = "smarttv", _ = "wearable", y = "embedded", S = 255;
          var E = { extend: function(i3, s3) {
            var e3 = {};
            for (var o2 in i3) {
              if (s3[o2] && s3[o2].length % 2 === 0) {
                e3[o2] = s3[o2].concat(i3[o2]);
              } else {
                e3[o2] = i3[o2];
              }
            }
            return e3;
          }, has: function(i3, s3) {
            return typeof i3 === d ? s3.toLowerCase().indexOf(i3.toLowerCase()) !== -1 : false;
          }, lowerize: function(i3) {
            return i3.toLowerCase();
          }, major: function(i3) {
            return typeof i3 === d ? i3.replace(/[^\d\.]/g, "").split(".")[0] : o;
          }, trim: function(i3, s3) {
            i3 = i3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            return typeof s3 === l ? i3 : i3.substring(0, S);
          } };
          var A = { rgx: function(i3, s3) {
            var e3 = 0, r2, a2, n2, l2, d2, b2;
            while (e3 < s3.length && !d2) {
              var u2 = s3[e3], c2 = s3[e3 + 1];
              r2 = a2 = 0;
              while (r2 < u2.length && !d2) {
                d2 = u2[r2++].exec(i3);
                if (!!d2) {
                  for (n2 = 0; n2 < c2.length; n2++) {
                    b2 = d2[++a2];
                    l2 = c2[n2];
                    if (typeof l2 === w && l2.length > 0) {
                      if (l2.length == 2) {
                        if (typeof l2[1] == t) {
                          this[l2[0]] = l2[1].call(this, b2);
                        } else {
                          this[l2[0]] = l2[1];
                        }
                      } else if (l2.length == 3) {
                        if (typeof l2[1] === t && !(l2[1].exec && l2[1].test)) {
                          this[l2[0]] = b2 ? l2[1].call(this, b2, l2[2]) : o;
                        } else {
                          this[l2[0]] = b2 ? b2.replace(l2[1], l2[2]) : o;
                        }
                      } else if (l2.length == 4) {
                        this[l2[0]] = b2 ? l2[3].call(this, b2.replace(l2[1], l2[2])) : o;
                      }
                    } else {
                      this[l2] = b2 ? b2 : o;
                    }
                  }
                }
              }
              e3 += 2;
            }
          }, str: function(i3, s3) {
            for (var e3 in s3) {
              if (typeof s3[e3] === w && s3[e3].length > 0) {
                for (var r2 = 0; r2 < s3[e3].length; r2++) {
                  if (E.has(s3[e3][r2], i3)) {
                    return e3 === n ? o : e3;
                  }
                }
              } else if (E.has(s3[e3], i3)) {
                return e3 === n ? o : e3;
              }
            }
            return i3;
          } };
          var N = { browser: { oldSafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } }, oldEdge: { version: { 0.1: "12.", 21: "13.", 31: "14.", 39: "15.", 41: "16.", 42: "17.", 44: "18." } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } };
          var T = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [f, [c, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [f, [c, "Edge"]], [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i], [c, f], [/opios[\/\s]+([\w\.]+)/i], [f, [c, "Opera Mini"]], [/\sopr\/([\w\.]+)/i], [f, [c, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i], [c, f], [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [f, [c, "UCBrowser"]], [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i], [f, [c, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [f, [c, "WeChat"]], [/konqueror\/([\w\.]+)/i], [f, [c, "Konqueror"]], [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i], [f, [c, "IE"]], [/yabrowser\/([\w\.]+)/i], [f, [c, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[c, /(.+)/, "$1 Secure Browser"], f], [/focus\/([\w\.]+)/i], [f, [c, "Firefox Focus"]], [/opt\/([\w\.]+)/i], [f, [c, "Opera Touch"]], [/coc_coc_browser\/([\w\.]+)/i], [f, [c, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [f, [c, "Dolphin"]], [/coast\/([\w\.]+)/i], [f, [c, "Opera Coast"]], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [f, [c, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [f, [c, "Firefox"]], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[c, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[c, /(.+)/, "$1 Browser"], f], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], f], [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i], [c, f], [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i], [c], [/;fbav\/([\w\.]+);/i], [f, [c, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[c, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i], [c, f], [/\bgsa\/([\w\.]+)\s.*safari\//i], [f, [c, "GSA"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [f, [c, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[c, "Chrome WebView"], f], [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i], [f, [c, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [c, f], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [f, [c, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [f, c], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [c, [f, A.str, N.browser.oldSafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [c, f], [/(navigator|netscape)\/([\w\.-]+)/i], [[c, "Netscape"], f], [/ile\svr;\srv:([\w\.]+)\).+firefox/i], [f, [c, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [c, f]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, E.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [[h, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[h, "armhf"]], [/windows\s(ce|mobile);\sppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[h, /ower/, "", E.lowerize]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[h, E.lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i], [u, [p, "Samsung"], [m, x]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i], [u, [p, "Samsung"], [m, v]], [/\((ip(?:hone|od)[\s\w]*);/i], [u, [p, "Apple"], [m, v]], [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [p, "Apple"], [m, x]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], [u, [p, "Huawei"], [m, x]], [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i], [u, [p, "Huawei"], [m, v]], [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[u, /_/g, " "], [p, "Xiaomi"], [m, v]], [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i], [[u, /_/g, " "], [p, "Xiaomi"], [m, x]], [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [u, [p, "OPPO"], [m, v]], [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i], [u, [p, "Vivo"], [m, v]], [/\s(rmx[12]\d{3})(?:\sbuild|;)/i], [u, [p, "Realme"], [m, v]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i], [u, [p, "Motorola"], [m, v]], [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [u, [p, "Motorola"], [m, x]], [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i], [u, [p, "LG"], [m, x]], [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i], [u, [p, "LG"], [m, v]], [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i], [u, [p, "Lenovo"], [m, x]], [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i], [[u, /_/g, " "], [p, "Nokia"], [m, v]], [/droid.+;\s(pixel\sc)[\s)]/i], [u, [p, "Google"], [m, x]], [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i], [u, [p, "Google"], [m, v]], [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [p, "Sony"], [m, v]], [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i], [[u, "Xperia Tablet"], [p, "Sony"], [m, x]], [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i], [u, [p, "OnePlus"], [m, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i], [u, [p, "Amazon"], [m, x]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[u, "Fire Phone"], [p, "Amazon"], [m, v]], [/\((playbook);[\w\s\),;-]+(rim)/i], [u, p, [m, x]], [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i], [u, [p, "BlackBerry"], [m, v]], [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i], [u, [p, "ASUS"], [m, x]], [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i], [u, [p, "ASUS"], [m, v]], [/(nexus\s9)/i], [u, [p, "HTC"], [m, x]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [p, [u, /_/g, " "], [m, v]], [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [u, [p, "Acer"], [m, x]], [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i], [u, [p, "Meizu"], [m, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [p, u, [m, v]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i], [p, u, [m, x]], [/\s(surface\sduo)\s/i], [u, [p, "Microsoft"], [m, x]], [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i], [u, [p, "Fairphone"], [m, v]], [/\s(u304aa)\sbuild/i], [u, [p, "AT&T"], [m, v]], [/sie-(\w*)/i], [u, [p, "Siemens"], [m, v]], [/[;\/]\s?(rct\w+)\sbuild/i], [u, [p, "RCA"], [m, x]], [/[;\/\s](venue[\d\s]{2,7})\sbuild/i], [u, [p, "Dell"], [m, x]], [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i], [u, [p, "Verizon"], [m, x]], [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i], [u, [p, "Barnes & Noble"], [m, x]], [/[;\/]\s(tm\d{3}\w+)\sbuild/i], [u, [p, "NuVision"], [m, x]], [/;\s(k88)\sbuild/i], [u, [p, "ZTE"], [m, x]], [/;\s(nx\d{3}j)\sbuild/i], [u, [p, "ZTE"], [m, v]], [/[;\/]\s?(gen\d{3})\sbuild.*49h/i], [u, [p, "Swiss"], [m, v]], [/[;\/]\s?(zur\d{3})\sbuild/i], [u, [p, "Swiss"], [m, x]], [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i], [u, [p, "Zeki"], [m, x]], [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i], [[p, "Dragon Touch"], u, [m, x]], [/[;\/]\s?(ns-?\w{0,9})\sbuild/i], [u, [p, "Insignia"], [m, x]], [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i], [u, [p, "NextBook"], [m, x]], [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i], [[p, "Voice"], u, [m, v]], [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i], [[p, "LvTel"], u, [m, v]], [/;\s(ph-1)\s/i], [u, [p, "Essential"], [m, v]], [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i], [u, [p, "Envizen"], [m, x]], [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i], [u, [p, "MachSpeed"], [m, x]], [/[;\/]\s?tu_(1491)\sbuild/i], [u, [p, "Rotor"], [m, x]], [/(shield[\w\s]+)\sbuild/i], [u, [p, "Nvidia"], [m, x]], [/(sprint)\s(\w+)/i], [p, u, [m, v]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [p, "Microsoft"], [m, v]], [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [p, "Zebra"], [m, x]], [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [p, "Zebra"], [m, v]], [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i], [p, u, [m, g]], [/droid.+;\s(shield)\sbuild/i], [u, [p, "Nvidia"], [m, g]], [/(playstation\s[345portablevi]+)/i], [u, [p, "Sony"], [m, g]], [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i], [u, [p, "Microsoft"], [m, g]], [/smart-tv.+(samsung)/i], [p, [m, k]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [p, "Samsung"], [m, k]], [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i], [[p, "LG"], [m, k]], [/(apple)\s?tv/i], [p, [u, "Apple TV"], [m, k]], [/crkey/i], [[u, "Chromecast"], [p, "Google"], [m, k]], [/droid.+aft([\w])(\sbuild\/|\))/i], [u, [p, "Amazon"], [m, k]], [/\(dtv[\);].+(aquos)/i], [u, [p, "Sharp"], [m, k]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[p, E.trim], [u, E.trim], [m, k]], [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i], [[m, k]], [/((pebble))app\/[\d\.]+\s/i], [p, u, [m, _]], [/droid.+;\s(glass)\s\d/i], [u, [p, "Google"], [m, _]], [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i], [u, [p, "Zebra"], [m, _]], [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i], [p, [m, y]], [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [u, [m, v]], [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [u, [m, x]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[m, E.lowerize]], [/(android[\w\.\s\-]{0,9});.+build/i], [u, [p, "Generic"]], [/(phone)/i], [[m, v]]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [f, [c, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [f, [c, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [c, f], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [f, c]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [c, f], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i], [c, [f, A.str, N.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[c, "Windows"], [f, A.str, N.os.windows.version]], [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i], [[f, /_/g, "."], [c, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i], [[c, "Mac OS"], [f, /_/g, "."]], [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i], [c, f], [/\(bb(10);/i], [f, [c, "BlackBerry"]], [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i], [f, [c, "Symbian"]], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[c, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [f, [c, "webOS"]], [/crkey\/([\d\.]+)/i], [f, [c, "Chromecast"]], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[c, "Chromium OS"], f], [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i], [c, f], [/(sunos)\s?([\w\.\d]*)/i], [[c, "Solaris"], f], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [c, f]] };
          var UAParser = function(i3, s3) {
            if (typeof i3 === "object") {
              s3 = i3;
              i3 = o;
            }
            if (!(this instanceof UAParser)) {
              return new UAParser(i3, s3).getResult();
            }
            var r2 = i3 || (typeof e2 !== "undefined" && e2.navigator && e2.navigator.userAgent ? e2.navigator.userAgent : a);
            var n2 = s3 ? E.extend(T, s3) : T;
            this.getBrowser = function() {
              var i4 = { name: o, version: o };
              A.rgx.call(i4, r2, n2.browser);
              i4.major = E.major(i4.version);
              return i4;
            };
            this.getCPU = function() {
              var i4 = { architecture: o };
              A.rgx.call(i4, r2, n2.cpu);
              return i4;
            };
            this.getDevice = function() {
              var i4 = { vendor: o, model: o, type: o };
              A.rgx.call(i4, r2, n2.device);
              return i4;
            };
            this.getEngine = function() {
              var i4 = { name: o, version: o };
              A.rgx.call(i4, r2, n2.engine);
              return i4;
            };
            this.getOS = function() {
              var i4 = { name: o, version: o };
              A.rgx.call(i4, r2, n2.os);
              return i4;
            };
            this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            };
            this.getUA = function() {
              return r2;
            };
            this.setUA = function(i4) {
              r2 = typeof i4 === d && i4.length > S ? E.trim(i4, S) : i4;
              return this;
            };
            this.setUA(r2);
            return this;
          };
          UAParser.VERSION = r;
          UAParser.BROWSER = { NAME: c, MAJOR: b, VERSION: f };
          UAParser.CPU = { ARCHITECTURE: h };
          UAParser.DEVICE = { MODEL: u, VENDOR: p, TYPE: m, CONSOLE: g, MOBILE: v, SMARTTV: k, TABLET: x, WEARABLE: _, EMBEDDED: y };
          UAParser.ENGINE = { NAME: c, VERSION: f };
          UAParser.OS = { NAME: c, VERSION: f };
          if (typeof s2 !== l) {
            if (l !== "object" && i2.exports) {
              s2 = i2.exports = UAParser;
            }
            s2.UAParser = UAParser;
          } else {
            if (typeof define === "function" && define.amd) {
              define(function() {
                return UAParser;
              });
            } else if (typeof e2 !== "undefined") {
              e2.UAParser = UAParser;
            }
          }
          var z = typeof e2 !== "undefined" && (e2.jQuery || e2.Zepto);
          if (z && !z.ua) {
            var O = new UAParser();
            z.ua = O.getResult();
            z.ua.get = function() {
              return O.getUA();
            };
            z.ua.set = function(i3) {
              O.setUA(i3);
              var s3 = O.getResult();
              for (var e3 in s3) {
                z.ua[e3] = s3[e3];
              }
            };
          }
        })(typeof window === "object" ? window : this);
      } };
      var s = {};
      function __nccwpck_require__2(e2) {
        var o = s[e2];
        if (o !== void 0) {
          return o.exports;
        }
        var r = s[e2] = { exports: {} };
        var a = true;
        try {
          i[e2].call(r.exports, r, r.exports, __nccwpck_require__2);
          a = false;
        } finally {
          if (a)
            delete s[e2];
        }
        return r.exports;
      }
      if (typeof __nccwpck_require__2 !== "undefined")
        __nccwpck_require__2.ab = __dirname + "/";
      var e = __nccwpck_require__2(412);
      module.exports = e;
    })();
  }
});

// node_modules/next/dist/server/web/spec-extension/user-agent.js
var require_user_agent = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/user-agent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isBot = isBot;
    exports.userAgentFromString = userAgentFromString;
    exports.userAgent = userAgent;
    var _uaParserJs = _interopRequireDefault(require_ua_parser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function isBot(input) {
      return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
    }
    function userAgentFromString(input) {
      return {
        ...(0, _uaParserJs).default(input),
        isBot: input === void 0 ? false : isBot(input)
      };
    }
    function userAgent({ headers }) {
      return userAgentFromString(headers.get("user-agent") || void 0);
    }
  }
});

// node_modules/next/server.js
var require_server = __commonJS({
  "node_modules/next/server.js"(exports, module) {
    var serverExports = {
      NextRequest: require_request().NextRequest,
      NextResponse: require_response().NextResponse,
      userAgentFromString: require_user_agent().userAgentFromString,
      userAgent: require_user_agent().userAgent
    };
    if (typeof URLPattern !== "undefined") {
      serverExports.URLPattern = URLPattern;
    }
    module.exports = serverExports;
    exports.NextRequest = serverExports.NextRequest;
    exports.NextResponse = serverExports.NextResponse;
    exports.userAgentFromString = serverExports.userAgentFromString;
    exports.userAgent = serverExports.userAgent;
    exports.URLPattern = serverExports.URLPattern;
  }
});

// node_modules/@netlify/next/lib/middleware/response.js
var require_response2 = __commonJS({
  "node_modules/@netlify/next/lib/middleware/response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MiddlewareResponse = void 0;
    var server_1 = require_server();
    var MiddlewareResponse = class extends server_1.NextResponse {
      constructor(originResponse) {
        super();
        this.originResponse = originResponse;
        Object.defineProperty(this, "dataTransforms", {
          value: [],
          enumerable: false,
          writable: false
        });
        Object.defineProperty(this, "elementHandlers", {
          value: [],
          enumerable: false,
          writable: false
        });
      }
      transformData(transform) {
        this.dataTransforms.push(transform);
      }
      rewriteHTML(selector, handlers) {
        this.elementHandlers.push([selector, handlers]);
      }
      setPageProp(key, value) {
        this.transformData((props) => {
          props.pageProps || (props.pageProps = {});
          props.pageProps[key] = value;
          return props;
        });
      }
      replaceText(selector, valueOrReplacer) {
        if (typeof valueOrReplacer === "string") {
          this.rewriteHTML(selector, {
            text(textChunk) {
              if (textChunk.lastInTextNode) {
                textChunk.replace(valueOrReplacer);
              } else {
                textChunk.remove();
              }
            }
          });
        } else {
          let text = "";
          this.rewriteHTML(selector, {
            text(textChunk) {
              text += textChunk.text;
              if (textChunk.lastInTextNode) {
                textChunk.replace(valueOrReplacer(text));
              } else {
                textChunk.remove();
              }
            }
          });
        }
      }
      get headers() {
        var _a;
        return ((_a = this.originResponse) === null || _a === void 0 ? void 0 : _a.headers) || super.headers;
      }
    };
    exports.MiddlewareResponse = MiddlewareResponse;
  }
});

// node_modules/@netlify/next/lib/middleware/request.js
var require_request2 = __commonJS({
  "node_modules/@netlify/next/lib/middleware/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MiddlewareRequest = void 0;
    var server_1 = require_server();
    var response_1 = require_response2();
    var MiddlewareRequest2 = class extends Request {
      constructor(nextRequest) {
        super(nextRequest);
        this.nextRequest = nextRequest;
        if (!("Deno" in globalThis)) {
          throw new Error("MiddlewareRequest only works in a Netlify Edge Function environment");
        }
        const requestId = nextRequest.headers.get("x-nf-request-id");
        if (!requestId) {
          throw new Error("Missing x-nf-request-id header");
        }
        const requestContext = globalThis.NFRequestContextMap.get(requestId);
        if (!requestContext) {
          throw new Error(`Could not find request context for request id ${requestId}`);
        }
        this.context = requestContext.context;
        this.originalRequest = requestContext.request;
      }
      applyHeaders() {
        this.headers.forEach((value, name) => {
          this.originalRequest.headers.set(name, value);
        });
      }
      async next(options) {
        this.applyHeaders();
        const response = await this.context.next(options);
        return new response_1.MiddlewareResponse(response);
      }
      rewrite(destination, init) {
        if (typeof destination === "string" && destination.startsWith("/")) {
          destination = new URL(destination, this.url);
        }
        this.applyHeaders();
        return server_1.NextResponse.rewrite(destination, init);
      }
      get headers() {
        return this.nextRequest.headers;
      }
      get cookies() {
        return this.nextRequest.cookies;
      }
      get geo() {
        return this.nextRequest.geo;
      }
      get ip() {
        return this.nextRequest.ip;
      }
      get nextUrl() {
        return this.nextRequest.nextUrl;
      }
      get url() {
        return this.nextRequest.url.toString();
      }
    };
    exports.MiddlewareRequest = MiddlewareRequest2;
  }
});

// node_modules/@netlify/next/lib/middleware/html-rewriter.js
var require_html_rewriter = __commonJS({
  "node_modules/@netlify/next/lib/middleware/html-rewriter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@netlify/next/lib/middleware/index.js
var require_middleware = __commonJS({
  "node_modules/@netlify/next/lib/middleware/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_response2(), exports);
    __exportStar(require_request2(), exports);
    __exportStar(require_html_rewriter(), exports);
  }
});

// node_modules/@netlify/next/lib/index.js
var require_lib = __commonJS({
  "node_modules/@netlify/next/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_middleware(), exports);
  }
});

// middleware.js
var import_server = __toESM(require_server());
var import_next = __toESM(require_lib());
async function middleware(req) {
  let response;
  const { pathname } = req.nextUrl;
  const request = new import_next.MiddlewareRequest(req);
  const res = await request.next();
  if (pathname.startsWith("/shows/88")) {
    res.headers.set("x-show", "88");
  }
  if (pathname.startsWith("/shows/99")) {
    res.headers.set("x-show", "99");
  }
  const message = `This was static but has been transformed in ${req.geo?.city}`;
  debugger;
  res.replaceText("p[id=message]", message);
  res.setPageProp("message", message);
  res.headers.set("x-show-url", req.nextUrl);
  return res;
}
var config = {
  matcher: [
    { source: "/shows/((?!99|88).*)" }
  ]
};
export {
  config,
  middleware
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
