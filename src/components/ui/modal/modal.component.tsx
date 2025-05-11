'use client';

import { useEffect, useId, useRef } from 'react';
import { IModalProps } from './modal.model';
import { CloseIcon } from '../icons';
import { PortalWrapper } from '../portal-wrapper/portal-wrapper.container';

const Modal = ({
	children,
	open,
	onClose,
	align = 'center',
	animate = 'left',
	justify = 'center',
	classes,
	wrapperId,
	portal = true,
	closeIcon,
}: IModalProps) => {
	const bodyRef = useRef<HTMLElement | null>(undefined);
	const modalId = useId();

	useEffect(() => {
		if (bodyRef.current) {
			if (open) {
				bodyRef.current.style.overflow = 'hidden';
			} else {
				bodyRef.current.style.overflow = '';
			}
		}
	}, [open]);

	useEffect(() => {
		bodyRef.current = document.querySelector('body');
		return () => {
			if (bodyRef.current) bodyRef.current.style.overflow = '';
		};
	}, []);

	const content = () => (
		<div
			className={`modal modal_${align} modal_justify-${justify} ${
				classes?.root || ''
			} modal_${open ? 'active' : 'unactive'} ${portal ? '' : 'portal'}`}
		>
			<div
				className={`modal-overlay ${classes?.overlay || ''}`}
				onClick={onClose}
			></div>
			<div
				className={`modal-content ${
					classes?.content || ''
				} modal-content__animate-${animate}`}
			>
				<div
					className={`modal-close ${classes?.closeWrapper || ''}`}
					onClick={onClose}
				>
					{closeIcon || <CloseIcon />}
				</div>
				{children}
			</div>
		</div>
	);
	return portal ? (
		<PortalWrapper wrapperId={wrapperId || modalId}>{content()}</PortalWrapper>
	) : (
		content()
	);
};

export default Modal;
