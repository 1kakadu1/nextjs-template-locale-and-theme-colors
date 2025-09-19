export const declOfNum = (n: number, titles: [string, string, string]) => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]
	];
};
