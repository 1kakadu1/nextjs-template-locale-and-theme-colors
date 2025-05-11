import { useRef } from 'react';

export const useHTMLRefs = <T>() => {
	const revealRefs = useRef<T[]>([]);
	const addToRefs = (el: any) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};
	const cleanRefs = () => {
		if (revealRefs.current) revealRefs.current = [];
	};
	return {
		addToRefs,
		revealRefs,
		cleanRefs,
	};
};
