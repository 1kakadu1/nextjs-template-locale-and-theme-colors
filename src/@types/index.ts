export * from './route';

export type BreakpointsSwiper = {
	[key: number]: {
		slidesPerView: number;
		[key: string]: unknown;
	};
};

export type PreviewPicture = {
	type: 'jpg' | 'png' | 'webp';
	uri: string;
	media?: string;
}[];

export interface IMetaPage {
	title?: string;
	description?: string;
	keywords: string;
	robots?: string;
}

export interface IResponse<T> {
	count: number;
	next?: string;
	previous?: string;
	results: T;
}
