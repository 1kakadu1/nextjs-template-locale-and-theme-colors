'use client';

import { useId } from 'react';
import { ISelectProps } from './select.model';
import cl from './select.module.scss';

export const Select = ({
	className = '',
	id,
	value,
	options,
	onChange,
	placeholder,
	label,
	error,
	required,
	variant = 'blue',
	errorHide = true,
	name,
}: ISelectProps) => {
	const _id = useId();
	const onChangeField = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const target = e.currentTarget;
		const value = target.value;
		if (value === '' || value === null || value === undefined) {
			onChange(null);
		} else {
			const option =
				options.find((item) => item.value.toString() === value.toString()) ||
				null;
			onChange(option);
		}
	};

	return (
		<div className={cl.container + ' ' + (!errorHide ? cl.errorHide : '')}>
			{label && (
				<p className={cl['label']}>
					{label}
					{required && <span className={cl.required}>*</span>}
				</p>
			)}
			<div className={cl.select__wrap + ' ' + cl['wrap_' + variant]}>
				<select
					id={id || _id}
					value={value || ''}
					className={className + ' ' + cl.select + ' ' + cl[variant]}
					onChange={onChangeField}
					name={name}
				>
					{placeholder && <option value="">{placeholder}</option>}
					{options.map((item, index) => (
						<option
							key={index}
							data-value={item.data || undefined}
							value={item.value}
						>
							{item.label}
						</option>
					))}
				</select>
			</div>
			{!errorHide && (
				<div className={`${cl['error']} ${error ? cl.error : ''}`}>{error}</div>
			)}
		</div>
	);
};
