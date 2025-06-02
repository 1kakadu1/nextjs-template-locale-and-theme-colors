export interface ICardPost {
	preview: string;
	category: string;
	title: string;
	date: string;
	user: {
		avatar: string;
		name: string;
	};
	href: string;
}
export interface ICardPostProps {
	className?: string;
	post: ICardPost;
}
