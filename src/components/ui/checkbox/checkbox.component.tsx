import { Ref, forwardRef } from 'react';
import { ICheckboxProps } from './checkbox.model';
import cl from './checkbox.module.scss';

export const Checkbox = forwardRef(
	(
		{
			className = '',
			label,
			checked,
			onChange,
			name,
			small = false,
		}: ICheckboxProps,
		ref: Ref<HTMLInputElement> | undefined,
	) => {
		return (
			<label
				className={
					cl['checkbox-label'] + ' ' + className + ' ' + (small ? cl.small : '')
				}
			>
				<input
					ref={ref}
					name={name}
					type="checkbox"
					checked={checked}
					onChange={onChange}
					className={cl['checkbox-input']}
				/>
				<span
					className={cl['checkbox-custom'] + ' ' + (small ? cl.small : '')}
				></span>
				<span className={cl['checkbox-label-text']}>{label}</span>
			</label>
		);
	},
);
