import Image from 'next/image';
import Link from 'next/link';
import { IBannerProps } from './banner.model';
import cl from './banner.module.scss';
import { UserPreview, Typography, ArticleCreateInfo, ArticleCategory } from '@/components/ui';

export const Banner = ({ className = '', image, card }: IBannerProps) => {
	return (
		<div className={cl.banner + ' ' + className}>
			<Image
				fill
				loading="lazy"
				decoding="async"
				sizes="100vw"
				alt={image.alt}
				src={image.url}
        		className={cl.preview}
			/>
			<Link className={cl.card} href={card.link}>
				<ArticleCategory list={[card.category]} className={cl.chips} />
				<Typography.H2 elementClass="h3">{card.title}</Typography.H2>
				<ArticleCreateInfo preview={card.user.preview} name={card.user.name} date={card.date} />
			</Link>
		</div>
	);
};
