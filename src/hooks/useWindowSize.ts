'use client';

import { useEffect, useState } from 'react';

export function useWindowSize(mobileSize: number = 1280) {
	const [windowSize, setWindowSize] = useState<{
		width?: number;
		height?: number;
	}>({
		width: undefined,
		height: undefined,
	});
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
			setIsMobile(window.innerWidth < mobileSize);
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return {
		...windowSize,
		isMobile,
	};
}
