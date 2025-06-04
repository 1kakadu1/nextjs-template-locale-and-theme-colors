import Image from 'next/image';
import Link from 'next/link';
import { ICardPostFluidProps } from './card-post-fluid.model';
import {
	ArticleCategory,
	ArticleCreateInfo,
	Typography,
} from '@/components/ui';
import cl from './card-post-fluid.module.scss';

export const CardPostFluid = ({
	className = '',
	position = 'center',
	post,
	hideFooter = false,
}: ICardPostFluidProps) => {
	const { href, preview, category, title, date, user } = post;
	return (
		<Link
			href={href}
			className={
				cl.card +
				' ' +
				className +
				' ' +
				cl[position] +
				' ' +
				(hideFooter ? cl.hide__footer : '')
			}
		>
			<Image
				src={preview}
				alt=""
				fill
				sizes="100vw"
				loading="lazy"
				decoding="async"
				className={cl.preview}
			/>
			<div className={cl.body}>
				<div>
					<ArticleCategory list={[category]} />
					<Typography.H3
						elementClass={hideFooter ? 'h5' : 'h4'}
						className={cl.title}
					>
						{title}
					</Typography.H3>
				</div>
				{!hideFooter && (
					<ArticleCreateInfo
						className={cl.create}
						date={date}
						preview={user.avatar}
						name={user.name}
						classNameUser={cl.user}
					/>
				)}
			</div>
		</Link>
	);
};
