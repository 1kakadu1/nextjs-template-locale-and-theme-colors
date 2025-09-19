import { ReactNode } from 'react';
import cl from './marquee.module.scss';

export const Marquee = ({
	overflowShadow = false,
	reverse = false,
	timingFunction = 'linear',
	duration = 20,
	children,
	gap = 20,
	className = '',
}: {
	children: ReactNode;
	overflowShadow?: boolean;
	reverse?: boolean;
	duration?: number;
	timingFunction?: string;
	gap?: number;
	className?: string;
}) => {
	const marqueeStyle = {
		'--timing-function': timingFunction,
		'--duration': `${duration}s`,
		'--gap-marquee': `${gap}px`,
	} as React.CSSProperties;
	return (
		<div
			className={
				cl['items-wrap'] +
				' ' +
				(overflowShadow ? cl['items-wrap-shadow'] : '') +
				' ' +
				className
			}
		>
			<div
				className={
					cl.items + ' ' + cl.marquee + ' ' + (reverse ? cl.reverse : '')
				}
				style={marqueeStyle}
			>
				{children}
			</div>
			<div
				aria-hidden="true"
				className={
					cl.items + ' ' + cl.marquee + ' ' + (reverse ? cl.reverse : '')
				}
				style={marqueeStyle}
			>
				{children}
			</div>
		</div>
	);
};
