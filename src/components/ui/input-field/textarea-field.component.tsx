'use client';

import React, { Ref, forwardRef, useId } from 'react';
import { ITextAreaProps } from './input-field.model';

export const TextAreaField = forwardRef(
	(
		{
			value: valueProps,
			label,
			id,
			placeholder = '',
			onChange,
			className = '',
			error: errorProps,
			endAdornment,
			variant = 'primary',
			...props
		}: ITextAreaProps,
		ref: Ref<HTMLTextAreaElement> | undefined,
	) => {
		const id_field = id ? id : useId();

		return (
			<div className={'input-form-control ' + className} data-testid="input">
				{label && (
					<label className="input-form-control__label" htmlFor={id}>
						{label}
					</label>
				)}
				<div
					className={`input-form-control__wrapper-input ${
						errorProps ? 'error' : ''
					}`}
				>
					<textarea
						className={
							'input-form-control__input input-form-control__textarea '
						}
						onChange={onChange}
						value={valueProps}
						placeholder={placeholder}
						id={id_field}
						ref={ref}
						{...props}
					/>
					{endAdornment && (
						<div className="input-form-control-adornment input-form-control-adornment__end">
							{endAdornment}
						</div>
					)}
				</div>
				{
					<div
						className={`input-form-control__error ${errorProps ? 'error' : ''}`}
					>
						{errorProps}
					</div>
				}
			</div>
		);
	},
);
