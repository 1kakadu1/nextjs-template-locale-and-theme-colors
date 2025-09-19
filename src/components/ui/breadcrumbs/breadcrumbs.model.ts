export interface IBreadcrumbsProps {
	className?: string;
	hideHome?: boolean;
	breadcrumbs: IBreadcrumbsLink[];
}

export interface IBreadcrumbsLink {
	href?: string;
	name: string;
}
