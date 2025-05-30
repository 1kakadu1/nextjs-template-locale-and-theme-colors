import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import prettier from 'prettier';
// import eslintPluginUnicorn from 'eslint-plugin-unicorn'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'prettier',
		//'plugin:unicorn/recommended'
	),
	{
		ignores: [
			'.prettierrc',
			'.lintstagedrc.js',
			'next.config.mjs',
			'tsconfig.json',
			'**/.husky/',
			'postcss.config.json',
			'.hygen.js',
			'eslint.config.mjs',
			'**/.hygen/',
			'**/node_modules/',
			'**/.next/',
			'**/public/',
			'package-lock.json',
			'package.json',
			'tsconfig.json',
			'.hygen.js',
		],
    plugins: {
		// unicorn: eslintPluginUnicorn,
		prettier,
	},
	rules: {
		'max-len': [
			2,
			{
				code: 300,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],
		'no-console': ["error", { allow: ["warn", "error"]}],
		'no-debugger': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'@ts-ignore': 'off',
		'no-anonymous-default-export': 'off',
		'linebreak-style': ['error', 'unix']
	},
	},
];

export default eslintConfig;