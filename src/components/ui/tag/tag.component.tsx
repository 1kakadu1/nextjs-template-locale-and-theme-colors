import Link from 'next/link';
import { ITagProps } from './tag.model';
import cl from './tag.module.scss';

export const Tag = ({
	className = '',
	children,
	href,
	variant = 'fluid',
	label,
}: ITagProps) => {
	return (
		<Link
			href={href}
			className={cl.tag + ' ' + className + ' ' + cl[variant]}
		>
			{children || label}
		</Link>
	);
};
