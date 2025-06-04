import { RoutesPath } from '@/@types';
import { IMenuProps } from './menu.model';
import { ButtonLink } from '@/components/ui';
import { useGetTranslations } from '@/hooks/useGetTranslations';
import cl from './menu.module.scss';

export const MENU = [
	{ label: 'menu.blog', href: RoutesPath.home },
	{ label: 'menu.about', href: RoutesPath.home },
	{ label: 'menu.contacts', href: RoutesPath.home },
];

export const Menu = ({ className = '', list }: IMenuProps) => {
	const { t } = useGetTranslations('base');

	if (list) {
		return (
			<ul className={className}>
				{MENU.map((item, index) => (
					<li key={index + '-menu-list'}>
						<ButtonLink href={item.href}>{t(item.label)}</ButtonLink>
					</li>
				))}
			</ul>
		);
	}

	return (
		<nav className={cl.menu + ' ' + className}>
			{MENU.map((item, index) => (
				<ButtonLink
					href={item.href}
					key={index + '-menu'}
				>
					{t(item.label)}
				</ButtonLink>
			))}
		</nav>
	);
};
