'use client';

import React, { Ref, forwardRef, useId } from 'react';
import { IInputDefaultProps } from './input-field.model';
import cl from './input-field.module.scss';

export const InputField = forwardRef(
	(
		{
			value: valueProps,
			label,
			type = 'text',
			id,
			placeholder = '',
			onChange,
			onSubmit,
			className = '',
			error: errorProps,
			endAdornment,
			hideErrorText = false,
			variant = 'primary',
			...props
		}: IInputDefaultProps,
		ref: Ref<HTMLInputElement> | undefined,
	) => {
		const id_field = id ? id : useId();

		return (
			<div
				className={
					cl['input-form-control'] + ' ' + cl[variant] + ' ' + className
				}
				data-testid="input"
			>
				{label && (
					<label className={cl['input-form-control__label']} htmlFor={id}>
						{label}
					</label>
				)}
				<div
					className={`${cl['input-form-control__wrapper-input']} ${
						errorProps ? cl.error : ''
					} ${hideErrorText ? cl.errorHide : ''}`}
				>
					<input
						className={cl['input-form-control__input']}
						onChange={onChange}
						value={valueProps}
						placeholder={placeholder}
						type={type}
						id={id_field}
						ref={ref}
						{...props}
					/>
					{endAdornment && (
						<div
							className={
								cl['input-form-control-adornment'] +
								' ' +
								cl['input-form-control-adornment__end']
							}
						>
							{endAdornment}
						</div>
					)}
				</div>
				{!hideErrorText && (
					<div
						className={`${cl['input-form-control__error']} ${errorProps ? cl.error : ''}`}
					>
						{errorProps}
					</div>
				)}
			</div>
		);
	},
);
