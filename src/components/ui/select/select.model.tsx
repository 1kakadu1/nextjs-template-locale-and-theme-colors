export interface ISelectOption {
	value: string | number;
	data?: string;
	label: string;
}

export interface ISelectProps {
	className?: string;
	selectProps?: React.DOMAttributes<HTMLSelectElement>;
	options: ISelectOption[];
	value: string | number | undefined | string[];
	onChange: (value: ISelectOption | null) => void;
	id?: string;
	placeholder?: string;
	label?: string;
	required?: boolean;
	error?: string;
	variant?: 'blue' | 'gray';
	errorHide?: boolean;
	name?: string;
}
