import { IArticleCreateInfoProps } from './article-create-info.model';
import { Typography } from '../../typography';
import { UserPreview } from '../../user';
import cl from './article-create-info.module.scss';

export const ArticleCreateInfo = ({
	className = '',
	preview,
	name,
	date,
	classNameUser,
}: IArticleCreateInfoProps) => {
	return (
		<div className={cl.card + ' ' + className}>
			<UserPreview
				avatar={preview}
				name={name}
				className={classNameUser}
			/>
			<Typography.RenderProps<HTMLTimeElement>
				elementClass="p"
				render={(props) => (
					<time
						className={props.className + ' ' + cl.time}
						dateTime={date}
					>
						{date}
					</time>
				)}
			/>
		</div>
	);
};
