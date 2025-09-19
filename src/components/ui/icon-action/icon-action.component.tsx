import Link from 'next/link';
import { ReactNode } from 'react';
import cl from './icon-action.module.scss';

export const IconAction = ({
	onClick,
	href,
	icon,
	label,
	active = false,
	badge,
	className = '',
}: {
	onClick?: () => void;
	href?: string;
	icon: ReactNode;
	label: string;
	active?: boolean;
	badge?: number;
	className?: string;
}) => {
	if (href) {
		return (
			<Link
				href={href}
				className={
					cl.action + ' ' + className + ' ' + (active ? cl.active : '')
				}
			>
				{icon}
				<span className={cl.label}>{label}</span>
			</Link>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={cl.action + ' ' + className + ' ' + (active ? cl.active : '')}
		>
			{icon}
			{badge && badge > 0 && <span className={cl.badge}>{badge}</span>}
			<span className={cl.label}>{label}</span>
		</button>
	);
};
