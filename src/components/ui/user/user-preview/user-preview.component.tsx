import Image from 'next/image';
import { IUserPreviewProps } from './user-preview.model';
import { Typography } from '@/components/ui/typography';
import cl from './user-preview.module.scss';

export const UserPreview = ({
	className = '',
	avatar,
	name,
}: IUserPreviewProps) => {
	return (
		<div className={cl.card + ' ' + className}>
			<Image
				className={cl.avatar}
				loading="lazy"
				decoding="async"
				width={36}
				height={36}
				alt={''}
				src={avatar || ''}
			/>
			<Typography.Span>{name}</Typography.Span>
		</div>
	);
};
