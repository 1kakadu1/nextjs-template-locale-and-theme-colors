// using import instead of require
import path from 'node:path';

// Function to create ESLint command
// This function takes an array of filenames and returns a command
// to lint these files using next lint.
// It converts absolute file paths to relative
// paths relative to the current working directory
// and joins them into a single string.
const buildEslintCommand = (filenames) =>
	`next lint --file ${filenames
		.map((f) => path.relative(process.cwd(), f)) // Convert file paths to relative paths
		.join(' --file ')}`; // Join all files into a single string with ' --file ' separator

// This configuration object defines commands that
// will be executed for various types of files when using lint-staged:
// - For TypeScript files (*.ts and *.tsx),
// it runs type checking using npx tsc --noEmit.
// - For various types of files (JavaScript, TypeScript, JSON, Markdown, CSS, etc.),
// it runs formatting using Prettier.
// - For JavaScript and TypeScript files,
// it runs linting using the command created by the buildEslintCommand function.
export default {
	// Type check TypeScript files
	'*/.(ts|tsx)': () => 'npx tsc --noEmit', // Run TypeScript Compiler without emitting output files

	// Format various types of files using Prettier
	'*.{js,jsx,ts,tsx,md,css,scss}': 'prettier --write --config .prettierrc.json', // Run Prettier with configuration from .prettierrc file

	// Lint JavaScript and TypeScript files using ESLint
	'*.{js,jsx,ts,tsx}': [buildEslintCommand], // Use buildEslintCommand function to create linting command
};
