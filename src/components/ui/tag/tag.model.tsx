import { ReactNode } from 'react';

export interface ITagProps {
	className?: string;
	variant?: 'fluid' | 'fluid-light';
	children?: ReactNode;
	href: string;
	label?: string;
}
