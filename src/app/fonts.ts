import localFont from 'next/font/local';

export const fontManrope = localFont({
	src: './fonts/Manrope-Regular.ttf',
	variable: '--font-Manrope',
	weight: '400 500 600 700 800',
});

export const workSansFont = localFont({
	src: [
		{
			path: './fonts/work-sans/WorkSans-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/work-sans/WorkSans-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-work-sans',
	fallback: ['Arial', 'Helvetica', 'system-ui'],
	adjustFontFallback: 'Arial',
});
