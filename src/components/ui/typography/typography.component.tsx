import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import {
	RenderPropsType,
	TypographyBaseProps,
	TypographyElement,
	TypographyElementColor,
	TypographyElementFontSize,
	TypographyElementLineHeight,
	TypographyElementWeight,
} from './typography.model';
import cl from './typography.module.scss';

const baseStyle = (
	style: TypographyElement,
	className = '',
	element?: TypographyElement,
	weight?: TypographyElementWeight,
	color?: TypographyElementColor,
	fontSize?: TypographyElementFontSize,
	lineHeight?: TypographyElementLineHeight,
): string => {
	return `${className} ${lineHeight ? cl['line-height_' + lineHeight] : ''}  ${element ? cl[element] : cl[style]} ${weight ? cl['w' + weight] : ''} ${color ? cl[color] : ''} ${fontSize ? cl['s' + fontSize] : ''}`;
};

const propsSerialize = <T,>(props: TypographyBaseProps & HTMLAttributes<T>) => {
	const _props = structuredClone({
		...props,
		children: undefined,
		onClick: undefined,
	});
	if ('fontSize' in _props) {
		delete _props['fontSize'];
	}
	if ('element' in _props) {
		delete _props['element'];
	}
	if ('weight' in _props) {
		delete _props['weight'];
	}
	if ('color' in _props) {
		delete _props['color'];
	}
	if ('lineHeight' in _props) {
		delete _props['lineHeight'];
	}
	return { ..._props, children: props.children, onClick: props.onClick };
};

const P = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p
			{...propsSerialize(props)}
			className={baseStyle(
				'p',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
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
			{...propsSerialize(props)}
			className={baseStyle(
				'a',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
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
			{...propsSerialize(props)}
			className={baseStyle(
				'span',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
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
			{...propsSerialize(props)}
			className={baseStyle(
				'h1',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
		>
			{props.children}
		</h1>
	);
};

const H2 = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps & HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2
			{...propsSerialize(props)}
			className={baseStyle(
				'h2',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
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
			{...propsSerialize(props)}
			className={baseStyle(
				'h3',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
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
			{...propsSerialize(props)}
			className={baseStyle(
				'h4',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
		>
			{props.children}
		</h4>
	);
};

const HtmlRender = ({
	className,
	elementClass,
	...props
}: TypographyBaseProps<string | TrustedHTML> &
	HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			{...propsSerialize(props)}
			className={baseStyle(
				'p',
				className,
				elementClass,
				props.weight,
				props.color,
				props.fontSize,
				props.lineHeight,
			)}
			dangerouslySetInnerHTML={{ __html: props.children }}
		></div>
	);
};

const RenderProps = <T,>({
	className,
	elementClass,
	...props
}: RenderPropsType<T>) => {
	const baseClass = baseStyle(
		elementClass || 'p',
		className,
		elementClass,
		props.weight,
		props.color,
		props.fontSize,
		props.lineHeight,
	);
	return props.render({ className: baseClass, ...props });
};

/*TODO: Добавить text-algin line-height. Подумать как ставить через var, но без style. Подумать как ставить цвета */
/*TODO: НУЖНО УБРАТЬ line-height В КЛАССАХ. ВСЕ ДОЛЖНО БЫТЬ ДЕФОЛТ. СТАВИТЬ ЕГО ЧЕРЕЗ POPS*/

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

export const Typography = {
	...TypographyBase,
};
