export interface ITagListProps {
	className?: string;
	tags: { slug: string; label: string }[];
	title?: string;
	prefix?: string;
	border?: boolean;
}
