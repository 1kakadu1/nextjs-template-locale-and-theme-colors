import cl from './button-group.module.scss';

export const ButtonGroup = ({
	buttons,
	active,
	classes,
	className = '',
	variant = 'base',
}: {
	className?: string;
	classes?: {
		root?: string;
		button?: string;
	};
	active?: string | null;
	buttons: {
		label: string;
		data?: string;
		sublabel?: string;
		onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	}[];
	variant?: 'base' | 'big' | 'light';
}) => {
	const { root = '', button = '' } = classes || {};

	return (
		<div
			className={cl.group + ' ' + root + ' ' + className + ' ' + cl[variant]}
		>
			{buttons.map((item, index) => (
				<button
					className={cl.btn + ' ' + button + ' ' + cl[variant]}
					key={'btn-group-' + index}
					disabled={item.data === active}
					data-button-group={item.data}
					onClick={item.onClick}
				>
					{item.label}
					{item.sublabel && <span>{item.sublabel}</span>}
				</button>
			))}
		</div>
	);
};
