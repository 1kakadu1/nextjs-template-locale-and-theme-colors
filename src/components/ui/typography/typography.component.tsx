import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import {
	RenderPorpsType,
	TypographyBaseProps,
	TypographyElement,
	TypographyElementWeight,
} from './typography.model';
import cl from './typography.module.scss';

const baseStyle = (
	style: TypographyElement,
	className = '',
	element?: TypographyElement,
	weight?: TypographyElementWeight,
): string => {
	return `${className}  ${element ? cl[element] : cl[style]} ${weight ? cl['w' + weight] : ''}`;
};

const P = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p
			{...props}
			className={baseStyle('p', className, elementClass, props.weight)}
		>
			{props.children}
		</p>
	);
};

const Link = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<a
			{...props}
			className={baseStyle('a', className, elementClass, props.weight)}
		>
			{props.children}
		</a>
	);
};

const Span = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			{...props}
			className={baseStyle('span', className, elementClass, props.weight)}
		>
			{props.children}
		</span>
	);
};

const H1 = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h1
			{...props}
			className={baseStyle('h1', className, elementClass, props.weight)}
		>
			{props.children}
		</h1>
	);
};

const H2 = ({
	className,
	elementClass,
	color = 'dark',
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2
			{...props}
			className={baseStyle('h2', className, elementClass, props.weight)}
		>
			{props.children}
		</h2>
	);
};

const H3 = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h3
			{...props}
			className={baseStyle('h3', className, elementClass, props.weight)}
		>
			{props.children}
		</h3>
	);
};

const H4 = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h4
			{...props}
			className={baseStyle('h4', className, elementClass, props.weight)}
		>
			{props.children}
		</h4>
	);
};

const HtmlRender = ({
	className,
	elementClass,
	color = 'dark',
	...props
}: TypographyBaseProps<string | TrustedHTML> &
	HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			{...props}
			className={baseStyle('p', className, elementClass, props.weight)}
			dangerouslySetInnerHTML={{ __html: props.children }}
		></div>
	);
};

const RenderProps = <T,>({
	className,
	elementClass,
	...props
}: RenderPorpsType<T>) => {
	const baseClass = baseStyle(
		elementClass || 'p',
		className,
		elementClass,
		props.weight,
	);
	return props.render({ className: baseClass, ...props });
};

const TypographyBase = {
	P,
	H1,
	H2,
	H3,
	H4,
	HtmlRender,
	Span,
	Link,
	RenderProps,
};

// const Title = <T,>(
// 	props: TypographyBaseProps &
// 		HTMLAttributes<T> & { element: keyof typeof TypographyBase },
// ) => {
// 	return TypographyBase[props.element]({ ...(props as any) });
// };

export const Typography = {
	...TypographyBase,
};
