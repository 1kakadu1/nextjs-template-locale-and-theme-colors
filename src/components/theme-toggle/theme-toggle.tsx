'use client';

import { useEffect, useState } from 'react';
import { setCookie } from '@/utils/cookies.utils';
import cl from './theme-toggle.module.scss';

export type ThemeSite = 'light' | 'dark';

export function ThemeToggle() {
	const [theme, setTheme] = useState<ThemeSite>('light');

	useEffect(() => {
		const savedTheme =
			localStorage.getItem('theme') ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light');
		setTheme(savedTheme as ThemeSite);
		document.documentElement.setAttribute('data-theme', savedTheme);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		setCookie('theme', newTheme, 90);
	};

	return (
		<label className={cl.switch}>
			<input
				type="checkbox"
				checked={theme === 'dark'}
				onChange={toggleTheme}
			/>
			<span className={cl.slider + ' ' + cl.round}>
				<span className={cl.icon}>☀️</span>
				<span className={cl.icon + ' ' + cl.right}>🌙</span>
			</span>
		</label>
	);
}
