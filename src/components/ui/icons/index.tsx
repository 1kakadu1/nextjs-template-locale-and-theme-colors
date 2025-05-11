import { MouseEventHandler } from 'react';

export interface ISvgIconProps {
	onClick?: MouseEventHandler<SVGSVGElement>;
	className?: string;
	viewBox?: string;
}

export * from './close.icon';
export * from './plus.icon';
export * from './arrrorw-left.icon';
export * from './socials.icon';
export * from './logo.icon';
export * from './search.icon ';
