import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const PlusIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				ref={ref}
				viewBox={props?.viewBox || '0 0 17 16'}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M8 14C8 14.2761 8.22386 14.5 8.5 14.5C8.77614 14.5 9 14.2761 9 14L9 8.5L14.5 8.5C14.7761 8.5 15 8.27614 15 8C15 7.72386 14.7761 7.5 14.5 7.5H9L9 2C9 1.72386 8.77614 1.5 8.5 1.5C8.22386 1.5 8 1.72386 8 2L8 7.5H2.5C2.22386 7.5 2 7.72386 2 8C2 8.27614 2.22386 8.5 2.5 8.5L8 8.5L8 14Z"
					fill="currentColor"
					fillOpacity="0.6"
				/>
			</svg>
		);
	},
);
