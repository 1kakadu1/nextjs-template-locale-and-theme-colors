import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { RoutesPath } from '@/@types';
import { Menu } from '@/components/menu';
import { ButtonLink, InputField, LogoMain, SearchIcon } from '@/components/ui';
import { ModalMenu } from '../modal-menu';
import cl from './header.module.scss';

export const Header = () => {
	const t = useTranslations();

	return (
		<header className={cl.header}>
			<div className={'container ' + cl.grid}>
				<Link
					className={cl.logo}
					href={RoutesPath.home}
				>
					<LogoMain />
				</Link>
				<Menu className={cl.menu} />
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
