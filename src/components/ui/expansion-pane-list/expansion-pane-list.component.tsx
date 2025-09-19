'use client';

import {
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import cl from './expansion-pane-list.module.scss';

export const ExpansionPaneList = ({
	children,
	defaultOpen = false,
	action,
	actionRender,
	disabled,
	clsx,
	reverse,
	offActionOnButton = false,
	onClick,
	className = '',
}: {
	className?: string;
	children: ReactNode;
	defaultOpen?: boolean;
	action?: ReactNode;
	actionRender?: (
		open: boolean,
		onSetOpen: Dispatch<SetStateAction<boolean>>,
	) => ReactNode;
	clsx?: {
		root?: string;
		action?: string;
		expanderContent?: string;
		expander?: string;
	};
	disabled?: boolean;
	reverse?: boolean;
	offActionOnButton?: boolean;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
	callback?: (
		open: boolean,
		onSetOpen?: Dispatch<SetStateAction<boolean>>,
	) => void;
}) => {
	const refInit = useRef(false);
	const {
		root: clRoot,
		action: clAction,
		expander: clExpander,
		expanderContent: clExpanderContent,
	} = clsx || {};
	const [open, setOpen] = useState(defaultOpen);

	useEffect(() => {
		refInit.current = true;
	}, []);

	return (
		<div
			className={
				cl.wrap +
				' ' +
				(reverse ? cl.reverse : '') +
				' ' +
				clRoot +
				' ' +
				className
			}
			onClick={onClick}
		>
			{offActionOnButton ? (
				<div
					className={
						clAction
							? clAction
							: cl.action +
								' ' +
								(disabled ? cl.disabled : '') +
								' ' +
								cl.off__action
					}
				>
					{action || actionRender?.(open, setOpen) || null}
				</div>
			) : (
				<button
					type="button"
					disabled={disabled}
					className={clAction ? clAction : cl.action}
					onClick={() => setOpen((prev) => !prev)}
				>
					{action || actionRender?.(open, setOpen) || null}
				</button>
			)}
			<div
				className={
					cl.expander + ' ' + (open ? cl.expanded : '') + ' ' + clExpander
				}
			>
				<div className={cl['expander-content'] + ' ' + clExpanderContent}>
					{children}
				</div>
			</div>
		</div>
	);
};
