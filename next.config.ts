import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
	reactStrictMode: false,
	env: {
		NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
		NEXT_PUBLIC_CLIENT_API: process.env.NEXT_PUBLIC_CLIENT_API,
		NEXT_PUBLIC_KEY_CAPTCHA: process.env.NEXT_PUBLIC_KEY_CAPTCHA,
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
		includePaths: [path.join(__dirname, 'src', 'styles')],
		prependData: `@use "@/styles/_mixin.scss" as *;`,
	},
	images: {
		formats: ['image/webp'],
		deviceSizes: [
			360, 375, 390, 410, 570, 640, 768, 900, 1080, 1280, 1440, 1920, 2048,
		],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.freepik.com',
				port: '',
				pathname: '/**/**/**/**/**',
			},
		],
	},
	async redirects() {
		return [];
	},
	compress: true,
	output: 'standalone',
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
