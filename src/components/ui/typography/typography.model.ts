import type { HTMLAttributes, ReactNode } from 'react';

export type TypographyElement =
	| 'p'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'span'
	| 'a';
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
export type TypographyElementFontSize =
	| 10
	| 12
	| 14
	| 16
	| 18
	| 20
	| 22
	| 24
	| 26
	| 28
	| 32
	| 40;
export type TypographyElementColor =
	| 'white'
	| 'dark'
	| 'gray'
	| 'default'
	| 'link'
	| 'accent'
	| 'primary'
	| 'secondary'
	| 'gray-light'
	| 'dark-blue'
	| 'gray-secondary'
	| 'hover'
	| 'active';
export type TypographyElementLineHeight = 'normal' | 120 | 140 | number;

export interface TypographyBaseProps<T = ReactNode> {
	weight?: TypographyElementWeight;
	elementClass?: TypographyElement;
	children: T;
	color?: TypographyElementColor;
	fontSize?: TypographyElementFontSize;
	lineHeight?: TypographyElementLineHeight;
}

export type RenderPropsType<T> = Omit<TypographyBaseProps, 'children'> &
	HTMLAttributes<T> & {
		render: (
			props: Omit<TypographyBaseProps, 'children'> & HTMLAttributes<T>,
		) => ReactNode;
	};
