import type { JSX } from 'react';

export interface IInputDefaultProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: any;
	id?: string;
	type?: string;
	label?: string;
	className?: string;
	error?: string;
	endAdornment?: JSX.Element;
	hideErrorText?: boolean;
	variant?: 'secondary' | 'primary';
}

export interface ITextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value?: any;
	id?: string;
	label?: string;
	className?: string;
	error?: string | null;
	endAdornment?: JSX.Element;
	hideErrorText?: boolean;
	variant?: 'secondary' | 'primary';
}
