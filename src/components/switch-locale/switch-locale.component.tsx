'use client';

import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { ISwitchLocaleProps } from './switch-locale.model';
import { useGetTranslations } from '@/hooks/useGetTranslations';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { setCookie } from '@/utils/cookies.utils';
import cl from './switch-locale.module.scss';

export const SwitchLocale = ({ className = '' }: ISwitchLocaleProps) => {
	const pathname = usePathname();
	const { locale, locales, defaultLocale } = useGetTranslations();
	const [open, setOpen] = useState(false);
	const ref = useRef<any>(null);
	const onChangeLocale = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		let newPathname = pathname.replace('/' + locale, '');
		const lang = e.currentTarget?.dataset?.locale || defaultLocale;

		if (lang !== defaultLocale) newPathname = '/' + lang + pathname;
		else if (newPathname === '') newPathname = '/';
		setCookie('NEXT_LOCALE', lang, 360);
		document.location.href = newPathname;
	};
	const handleClickOutside = () => {
		setOpen(false);
	};
	useOnClickOutside(ref, handleClickOutside);
	return (
		<div className={cl.locale + ' ' + className}>
			<button
				className={cl.locale__current}
				onClick={() => setOpen((prev) => !prev)}
			>
				{locale.toLocaleUpperCase()}
			</button>
			<ul className={cl.list + ' ' + (open ? cl.open : '')} ref={ref}>
				{locales.map((item) => (
					<li key={item} className={locale === item ? cl.active : ''}>
						<button
							disabled={locale === item}
							onClick={onChangeLocale}
							data-locale={item}
						>
							{item.toLocaleUpperCase()}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
