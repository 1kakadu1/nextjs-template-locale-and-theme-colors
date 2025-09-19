import { ReactNode } from 'react';

export interface IPaginationProps {
	count: number;
	page: number;
	limit?: number;
	className?: string;
	search?: string;
	onChange?: (page: number, search?: any, limit?: number) => void;
	paginationOffset?:
		| 0
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14;
	basePath: string;
	pageOnSearchParams?: string;
	trailingSlash?: boolean;
	alwaysArrow?: boolean;
	iconArrowNext?: ReactNode;
	iconArrowPrev?: ReactNode;
}
