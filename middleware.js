import { MiddlewareRequest } from '@netlify/next';

export async function middleware(req) {
	const { pathname } = req.nextUrl;
	const request = new MiddlewareRequest(req);
	const res = await request.next();

	res.headers.set('x-show-pathname', pathname);
	res.headers.set('x-is-show', true);
	return res;
}

export const config = {
	matcher: [{ source: '/shows/((?!99|88).*)' }]
};
