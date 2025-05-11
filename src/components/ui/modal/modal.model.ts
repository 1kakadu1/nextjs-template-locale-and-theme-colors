import type { JSX } from 'react';

export interface IModalProps {
	classes?: {
		root?: string;
		content?: string;
		overlay?: string;
		closeWrapper?: string;
	};
	children: JSX.Element;
	onClose: () => void;
	onOpen?: () => void;
	open: boolean;
	align?: 'end' | 'center' | 'start';
	justify?: 'end' | 'center' | 'start';
	animate?: 'left' | 'right' | 'fade';
	wrapperId?: string;
	portal?: boolean;
	closeIcon?: JSX.Element;
}
