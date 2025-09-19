---
to: <%= absPath %><%= folder_name %>.icon.tsx
---
import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const <%= `${component_name}Icon` %> = forwardRef(
    (props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
        return (
            <svg
                width="" height="" viewBox=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ref={ref}
                {...props}
            >
                <path  fill="currentColor"/>
            </svg>
        );
    },
);