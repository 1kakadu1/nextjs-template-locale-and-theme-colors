'use client';

import { useState } from 'react';
import { IModalMenuProps } from './modal-menu.model';
import Modal from '../ui/modal/modal.component';
import { SwitchLocale } from '../switch-locale';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { ButtonBurger } from '../ui';
import cl from './modal-menu.module.scss';

export const ModalMenu = ({ className = '' }: IModalMenuProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={cl.class + ' ' + className}>
			<ButtonBurger open={open} onToggle={setOpen} />
			<Modal
				onClose={() => setOpen(false)}
				open={open}
				align="start"
				justify="end"
				animate="right"
				classes={{ content: cl.modal__content, overlay: cl.modal__overlay }}
			>
				<div>
					<SwitchLocale />
					<ThemeToggle />
				</div>
			</Modal>
		</div>
	);
};
