import Image from 'next/image';
import Link from 'next/link';
import { ICardPostProps } from './card-post.model';
import {
	ArticleCategory,
	ArticleCreateInfo,
	Typography,
} from '@/components/ui';
import cl from './card-post.module.scss';

export const CardPost = ({ className = '', post }: ICardPostProps) => {
	const { category, user, date, title, preview, href } = post;
	return (
		<Link
			href={href}
			className={cl.link}
		>
			<article className={cl.card + ' ' + className}>
				<div className={cl.preview}>
					<Image
						src={preview}
						alt=""
						fill
						loading='lazy'
						decoding='async'
					/>
				</div>

				<div className={cl.body}>
					<div>
						<ArticleCategory list={[category]} light/>
						<Typography.H3 elementClass='h4' className={cl.title}>{title}</Typography.H3>
					</div>
					<ArticleCreateInfo
						date={date}
						preview={user.avatar}
						name={user.name}
					/>
				</div>
			</article>
		</Link>
	);
};
