import { IArticleCategoryProps } from './article-category.model';
import cl from './article-category.module.scss';

export const ArticleCategory = ({
	className = '',
	list,
	light,
}: IArticleCategoryProps) => {
	return (
		<ul className={cl.list + ' ' + className}>
			{list.map((item, index) => (
				<li
					className={cl.chip + ' ' + (light ? cl.light : '')}
					key={index}
				>
					{item}
				</li>
			))}
		</ul>
	);
};
