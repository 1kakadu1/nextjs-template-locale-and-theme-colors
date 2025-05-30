import type { ReactNode } from 'react';

export type TypographyElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'a';
export type TypographyElementWeight =
	| 100
	| 200
	| 300
	| 400
	| 500
	| 600
	| 700
	| 800
	| 900;
//export type TypographyElementColor = 'white' | 'dark' | 'gray' | 'dark-light';
export interface TypographyBaseProps<T = ReactNode> {
	weight?: TypographyElementWeight;
	elementClass?: TypographyElement;
	children: T;
	//color?: TypographyElementColor;
}
