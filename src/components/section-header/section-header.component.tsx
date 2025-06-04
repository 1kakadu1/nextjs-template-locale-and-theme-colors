import { ISectionHeaderProps } from './section-header.model';
import { ButtonLink, Typography } from '@/components/ui';
import cl from './section-header.module.scss';

export const SectionHeader = ({
	className = '',
	title,
	link,
}: ISectionHeaderProps) => {
	return (
		<div className={cl.header + ' ' + className}>
			<Typography.H3 elementClass="h4">{title}</Typography.H3>
			{link && (
				<ButtonLink
					href={link.href}
					variant="outline"
				>
					{link.label}
				</ButtonLink>
			)}
		</div>
	);
};
