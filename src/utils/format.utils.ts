export const formatTime = (minutes: number) => {
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

export function formatIsoToCustom(dateString: string): string {
	const date = new Date(dateString);

	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();

	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function formatPrice(value: number | string) {
	const parts = Number(value).toFixed(2).split('.');
	const integer = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	const decimal = parts[1];
	return parts[1] === '00' ? integer : integer + ',' + decimal;
}

export const formatDateToReadable = (isoDate: string): string => {
	const date = new Date(isoDate);

	return new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(date);
};
