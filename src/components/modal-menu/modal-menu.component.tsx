'use client';

import { useState } from 'react';
import { IModalMenuProps } from './modal-menu.model';
import { Menu } from '@/components/menu';
import { ButtonBurger, InputField, SearchIcon } from '@/components/ui';
import Modal from '../ui/modal/modal.component';
import { useGetTranslations } from '@/hooks/useGetTranslations';
import { SwitchLocale } from '../switch-locale';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import cl from './modal-menu.module.scss';

export const ModalMenu = ({ className = '' }: IModalMenuProps) => {
	const [open, setOpen] = useState(false);
	const { t } = useGetTranslations();
	return (
		<div className={cl.class + ' ' + className}>
			<ButtonBurger
				open={open}
				onToggle={setOpen}
			/>
			<Modal
				onClose={() => setOpen(false)}
				open={open}
				align="start"
				justify="end"
				animate="right"
				classes={{ content: cl.modal__content, overlay: cl.modal__overlay }}
			>
				<div className={cl.list}>
					<div className={cl.top__actions}>
						<SwitchLocale />
						<ThemeToggle />
					</div>
					<div className={cl.search}>
						<InputField
							placeholder={t('forms.fields.search')}
							endAdornment={<SearchIcon />}
							hideErrorText
						/>
					</div>
					<div className={cl.menu}>
						<Menu list />
					</div>
				</div>
			</Modal>
		</div>
	);
};
