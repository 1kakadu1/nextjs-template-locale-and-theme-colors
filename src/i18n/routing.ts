import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ru'] as const;
export const defaultLocale = 'en';
export const localePrefix = 'as-needed'; // Важно для работы с корневым URL
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: locales,
	defaultLocale: defaultLocale,
	localePrefix: localePrefix, // Отключаем префиксы для дефолтного языка
	alternateLinks: false, // Отключаем альтернативные ссылки в head
});
