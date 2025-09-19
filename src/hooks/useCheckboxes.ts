import { useState } from 'react';

type UseCheckboxesReturn<T> = {
	selected: T[];
	isChecked: (item: T) => boolean;
	toggle: (item: T) => void;
	selectAll: (items: T[]) => void;
	clearAll: () => void;
	setSelected: (items: T[]) => void;
};

export const useCheckboxes = <T>(
	initialSelected: T[] = [],
): UseCheckboxesReturn<T> => {
	const [selected, setSelected] = useState<T[]>(initialSelected);

	const isChecked = (item: T) => selected.includes(item);

	const toggle = (item: T) => {
		setSelected((prev) =>
			prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
		);
	};

	const selectAll = (items: T[]) => setSelected(items);

	const clearAll = () => setSelected([]);

	return {
		selected,
		isChecked,
		toggle,
		selectAll,
		clearAll,
		setSelected,
	};
};
