import Link from 'next/link';
import type { ReactNode } from 'react';
import cl from './button.module.scss';

export interface IButtonProps extends React.DOMAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	type?: 'submit' | 'button' | 'reset' | undefined;
	disabled?: boolean;
	variant?: 'fluid' | 'outline';
}

export interface IButtonLinkProps
	extends React.DOMAttributes<HTMLAnchorElement> {
	className?: string;
	children: ReactNode;
	disabled?: boolean;
	href: string;
	variant?: 'flat' | 'outline' | 'fluid';
}

export const ButtonLink = ({
	children,
	className = '',
	variant = 'flat',
	href,
	...props
}: IButtonLinkProps) => {
	return (
		<Link
			data-testid="button-link"
			className={`${className} ${variant !== 'flat' ? cl.btn : cl.link} ${cl[variant]}`}
			href={href}
			{...props}
		>
			{children}
		</Link>
	);
};

export const Button = ({
	children,
	className = '',
	onClick,
	type = 'button',
	variant = 'fluid',
	disabled,
	...props
}: IButtonProps) => {
	return (
		<button
			data-testid="button"
			className={`${className} ${cl.btn} ${cl[variant]}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
