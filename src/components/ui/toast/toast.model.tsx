import { ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info';
export type ToastPosition =
	| 'top-right'
	| 'top-left'
	| 'bottom-right'
	| 'bottom-left';
export type ToastActions = {
	ok?: {
		label: string;
		icon?: ReactNode;
		callback?: () => void;
	};
	cancel?: {
		label: string;
		icon?: ReactNode;
		callback?: () => void;
	};
};
export type ToastContent = ReactNode | ToastContentData;

export type ToastContentData = {
	message: string;
	title: string;
	subtitle?: string;
};
export type ToastOptions = {
	position?: ToastPosition;
	actions?: ToastActions;
	closing?: boolean;
};
export interface IToast {
	id: string;
	content: ToastContent;
	type: ToastType;
	options?: ToastOptions;
}

export interface IToastContextProps {
	toasts: IToast[];
	addToast: (
		content: ToastContent,
		type?: ToastType,
		options?: ToastOptions,
	) => void;
	removeToast: (id: string) => void;
	closeToast: (id: string) => void;
}
