import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const ArrowLeftIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				ref={ref}
				viewBox={props?.viewBox || '0 0 40 40'}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M16.832 27.1999L10 20.2666L16.832 13.3333"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<path
					d="M30.6241 20.2666L11.3281 20.2666"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);
