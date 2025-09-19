'use client';

import React, { useEffect, useState } from 'react';
import { useToastContext } from './toast.context';
import { ToastContentData, ToastOptions, ToastType } from '.';
import cl from './toast.module.scss';

const POSITIONS = [
	'top-right',
	'top-left',
	'bottom-right',
	'bottom-left',
] as const;

const ToastContent = ({
	id,
	title,
	message,
	subtitle,
	options,
	onCloseToast,
	type = 'info',
}: {
	id: string;
	title: string;
	message: string;
	subtitle?: string;
	options?: ToastOptions;
	type?: ToastType;
	onCloseToast?: () => void;
}) => {
	return (
		<div
			className={cl.content__toast}
			key={id}
		>
			<div className={cl.header}>
				<h4 className={cl[type]}>{title}</h4>
				{subtitle && <p>{subtitle}</p>}
			</div>
			<p
				className={cl.desc + ' ' + cl[type]}
				dangerouslySetInnerHTML={{ __html: message }}
			/>

			<div className={cl.actions}>
				<button
					className={cl.btn + ' ' + cl[type]}
					type="button"
					onClick={() => {
						if (onCloseToast) onCloseToast();
						if (options?.actions?.ok?.callback) {
							options.actions.ok?.callback();
						}
					}}
				>
					{options?.actions?.ok?.icon} {options?.actions?.ok?.label || 'OK'}
				</button>
			</div>
		</div>
	);
};

export const Toast = () => {
	const { toasts, closeToast } = useToastContext();
	const [visibleToasts, setVisibleToasts] = useState<string[]>([]);

	useEffect(() => {
		toasts.forEach((toast) => {
			if (!visibleToasts.includes(toast.id)) {
				setTimeout(() => {
					setVisibleToasts((prev) => [...prev, toast.id]);
				}, 10);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toasts]);

	return (
		<>
			{POSITIONS.map((pos) => (
				<div
					key={pos}
					className={`${cl['toast-container']} ${cl[pos]}`}
				>
					{toasts
						.filter((toast) => (toast.options?.position || 'top-right') === pos)
						.map((toast) => (
							<div
								key={toast.id}
								className={`${cl['toast']} ${cl[`toast-${toast.type}`]} ${visibleToasts.includes(toast.id) && !toast.options?.closing ? cl['show'] : ''} 
                  ${toast.options?.closing ? cl['closing'] : ''}`}
							>
								<button
									className={cl['toast-close']}
									onClick={() => closeToast(toast.id)}
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="8"
											cy="8"
											r="8"
											fill="#CCCCCC"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M11.628 4.37228C11.7907 4.535 11.7907 4.79882 11.628 4.96154L8.58925 8.00024L11.628 11.0389C11.7907 11.2017 11.7907 11.4655 11.628 11.6282C11.4652 11.7909 11.2014 11.7909 11.0387 11.6282L7.99999 8.5895L4.96129 11.6282C4.79858 11.7909 4.53476 11.7909 4.37204 11.6282C4.20932 11.4655 4.20932 11.2017 4.37204 11.0389L7.41074 8.00024L4.37204 4.96155C4.20932 4.79883 4.20932 4.53501 4.37204 4.37229C4.53476 4.20957 4.79858 4.20957 4.9613 4.37229L7.99999 7.41099L11.0387 4.37228C11.2014 4.20956 11.4652 4.20956 11.628 4.37228Z"
											fill="white"
										/>
									</svg>
								</button>
								{React.isValidElement(toast.content) ? (
									toast.content
								) : (
									<ToastContent
										id={toast.id}
										title={(toast.content as ToastContentData).title}
										message={(toast.content as ToastContentData).message}
										subtitle={(toast.content as ToastContentData)?.subtitle}
										options={toast.options}
										onCloseToast={() => closeToast(toast.id)}
										type={toast.type}
									/>
								)}
							</div>
						))}
				</div>
			))}
		</>
	);
};
