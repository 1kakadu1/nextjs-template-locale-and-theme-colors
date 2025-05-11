import { defaultLocale, locales } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { createUrlLocale } from '@/utils/url.utils';

export const useGetTranslations = (namespace?: string) => {
	const locale = useLocale();
	const t = useTranslations(namespace);
	const localePath = locale === defaultLocale ? '' : `/${locale}`;

	return {
		t,
		locale,
		localePath,
		createUrlLocale,
		defaultLocale,
		locales,
	};
};
