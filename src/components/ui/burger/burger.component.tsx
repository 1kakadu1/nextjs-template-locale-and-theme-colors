'use client';

import cl from './burger.module.scss';

export const ButtonBurger = ({
	open,
	onToggle,
	color = 'dark',
}: {
	open: boolean;
	onToggle: (value: boolean) => void;
	color?: 'dark' | 'light';
}) => {
	const onClick = () => {
		onToggle(!open);
	};
	return (
		<div
			className={`${cl['hamburger-lines']} ${open ? cl['active'] : ''} ${cl[color]}`}
			onClick={onClick}
		>
			<span
				className={`${cl['hamburger-line']} ${cl['hamburger-line1']}`}
			></span>
			<span
				className={`${cl['hamburger-line']} ${cl['hamburger-line2']}`}
			></span>
			<span
				className={`${cl['hamburger-line']} ${cl['hamburger-line3']}`}
			></span>
		</div>
	);
};
