export function chunkArray<T>(arr: T[], chunkSize: number = 3) {
	const result = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		result.push(arr.slice(i, i + chunkSize));
	}
	return result;
}
