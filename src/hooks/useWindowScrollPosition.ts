import { useEffect, useState } from 'react';

export const useWindowScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState({
		scrollX: 0,
		scrollY: 0,
	});

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
		};

		window.addEventListener('scroll', updatePosition);
		updatePosition();

		return () => window.removeEventListener('scroll', updatePosition);
	}, []);

	return scrollPosition;
};
