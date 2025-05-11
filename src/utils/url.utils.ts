import { defaultLocale } from '@/i18n/routing';

export const createUrlLocale = (
	url: string,
	locale: string = defaultLocale,
	defaultLocalePath = '',
) => {
	const localePath =
		locale === defaultLocale ? defaultLocalePath : '/' + locale;
	return localePath + url;
};
