import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const CloseIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				ref={ref}
				viewBox={props?.viewBox || '0 0 30 30'}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M25.0379 6.28791C25.404 5.9218 25.404 5.3282 25.0379 4.96209C24.6718 4.59597 24.0782 4.59597 23.7121 4.96209L15 13.6742L6.28791 4.96211C5.9218 4.596 5.32821 4.59599 4.96209 4.96211C4.59597 5.32823 4.59597 5.92182 4.96209 6.28794L13.6742 15L4.96209 23.7121C4.59597 24.0782 4.59597 24.6718 4.96209 25.0379C5.3282 25.404 5.9218 25.404 6.28791 25.0379L15 16.3258L23.7121 25.0379C24.0782 25.404 24.6718 25.404 25.0379 25.0379C25.404 24.6718 25.404 24.0782 25.0379 23.7121L16.3258 15L25.0379 6.28791Z"
					fill="currentColor"
					fillOpacity="0.6"
				/>
			</svg>
		);
	},
);
