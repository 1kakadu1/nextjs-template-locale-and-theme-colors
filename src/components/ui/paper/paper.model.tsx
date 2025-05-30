import { ReactNode } from 'react';

export interface IPaperProps {
	className?: string;
	variant?: 'primary' | 'secondary';
	pd?: 8 | 16 | 32;
	children?: ReactNode;
}
