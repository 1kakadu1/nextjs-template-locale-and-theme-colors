import type { ReactNode } from 'react';

export type TypographyElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
//export type TypographyElementColor = 'white' | 'dark' | 'gray' | 'dark-light';
export interface TypographyBaseProps<T = ReactNode> {
	elementClass?: TypographyElement;
	children: T;
	//color?: TypographyElementColor;
}
