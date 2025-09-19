import { Router } from 'next/router';

export function updateURL(
	history: Router,
	pathname: string,
	queryKey: string | number,
	queryValue: string | number,
) {
	const currentSearch = queryParse(window.location.search);

	if (queryKey in currentSearch && queryValue === '') {
		delete currentSearch[queryKey];
	} else {
		currentSearch[queryKey] = queryValue;
	}

	const q = Object.keys(currentSearch || {})
		.map(function (key) {
			return key + '=' + currentSearch[key].toString();
		})
		.join('&');

	history.push({
		pathname: pathname,
		search: '?' + q,
	});
}

export const createSearch = (
	filter: { [key: string]: any },
	exclude?: string[],
) => {
	const _filter = filter || {};

	if (exclude) {
		exclude.forEach((key) => {
			if (key in _filter) {
				delete _filter[key];
			}
		});
	}

	return Object.keys(_filter)
		.map(function (key) {
			if (typeof filter[key] === 'object' || Array.isArray(filter[key])) {
				return `${key}=${JSON.stringify(filter[key])}`;
			}
			return key + '=' + filter[key];
		})
		.filter((item) => !item.includes('undefined'))
		.join('&');
};

export function queryParse(search: string) {
	const qd: { [key: string]: any } = {};

	if (search && search !== '?')
		search
			.substr(1)
			.split('&')
			.forEach(function (item) {
				const s = item.split('='),
					k = s[0],
					v = s[1] && decodeURIComponent(s[1]);
				try {
					const parse = JSON.parse(v);
					if (typeof parse === 'object' || Array.isArray(parse)) {
						qd[k] = parse;
					} else {
						qd[k] = v;
					}
					// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
				} catch (e) {
					qd[k] = v;
				}
			});

	return qd;
}
