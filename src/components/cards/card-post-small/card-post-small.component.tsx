import Image from 'next/image';
import Link from 'next/link';
import { ICardPostSmallProps } from './card-post-small.model';
import { Typography } from '@/components/ui';
import cl from './card-post-small.module.scss';

export const CardPostSmall = ({
	className = '',
	preview,
	title,
	date,
	href,
}: ICardPostSmallProps) => {
	return (
		<Link
			href={href}
			className={cl.card + ' ' + className}
		>
			<div className={cl.preview}>
				<Image
					src={preview}
					alt={''}
					fill
				/>
			</div>
			<div className={cl.body}>
				<Typography.H4 className={cl.title}>{title}</Typography.H4>
				<Typography.RenderProps<HTMLTimeElement>
					elementClass="p"
					render={(props) => (
						<time
							className={props.className}
							dateTime={date}
						>
							{date}
						</time>
					)}
				/>
			</div>
		</Link>
	);
};
