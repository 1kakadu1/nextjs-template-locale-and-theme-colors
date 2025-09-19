import { ReactNode } from 'react';

export interface ICheckboxProps {
	className?: string;
	label?: string | ReactNode;
	checked: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	small?: boolean;
}
