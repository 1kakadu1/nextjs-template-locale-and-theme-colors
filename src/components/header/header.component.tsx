import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { RoutesPath } from '@/@types';
import { ButtonBurger, ButtonLink, InputField, LogoMain, SearchIcon } from '@/components/ui';
import { SwitchLocale } from '../switch-locale';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import cl from './header.module.scss';
import { ModalMenu } from '../modal-menu';

export const Header = ({
	menu,
}: {
	menu: { label: string; href: string }[];
}) => {
	const t = useTranslations();

	return (
		<header className={cl.header}>
			<div className={'container ' + cl.grid}>
				<Link className={cl.logo} href={RoutesPath.home}>
					<LogoMain />
				</Link>
				<nav className={cl.menu}>
					{menu.map((item, index) => (
						<ButtonLink href={item.href} key={index + '-menu'}>
							{item.label}
						</ButtonLink>
					))}
				</nav>
				<div className={cl.actions}>
					<InputField
						className={cl.search}
						placeholder={t('forms.fields.search')}
						endAdornment={<SearchIcon />}
						hideErrorText
					/>
					<ModalMenu />
					{/* <SwitchLocale />
					<ThemeToggle /> */}
				</div>
			</div>
		</header>
	);
};
