import { ReactNode } from 'react';
import cl from './tooltip.module.scss';

export const Tooltip = ({
	children,
	text,
	className,
}: {
	className?: string;
	text: string;
	children: ReactNode;
}) => {
	return (
		<div className={cl.tooltip + ' ' + className}>
			{children}
			<span
				role="tooltip"
				className={cl.tooltiptext}
			>
				{text}
			</span>
		</div>
	);
};
