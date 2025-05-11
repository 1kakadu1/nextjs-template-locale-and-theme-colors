import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { defaultLocale, routing } from './i18n/routing';

export function middleware(request: NextRequest) {
	request.cookies.set('NEXT_LOCALE', defaultLocale);
	const handleI18nRouting = createMiddleware({ ...routing });
	const response = handleI18nRouting(request);
	return response;
}

export const config = {
	// Match all pathnames except for
	// - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
	// - … the ones containing a dot (e.g. `favicon.ico`)
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
