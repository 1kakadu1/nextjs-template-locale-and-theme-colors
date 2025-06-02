import { Banner } from '@/components/banner';
import avatar from '../../../public/images/Image.png';
import banner from '../../../public/images/Image.jpg';
import cl from "./page.module.scss";
import { MOCK_POSTS, MOCK_POSTS_FLUID } from '@/mock/post';
import { CardPost } from '@/components/cards/card-post';
import { ButtonLink, Typography } from '@/components/ui';
import { CardPostFluid } from '@/components/cards/card-post-fluid';
import { TagList } from '@/components/tag-list';
import { MOCK_TAGS } from '@/mock/tags';

export default async function Home() {
	return (
		<div className={'container'}>
			<Banner
				image={{
					url: banner.src,
					alt: '',
				}}
				card={{
					link: '#',
					user: {
						name: 'Jason Francisco',
						preview: avatar.src,
					},
					date: 'August 20, 2022',
					title: 'The Impact of Technology on the Workplace: How Technology is Changing',
					category: 'Technology',
				}}
			/>
			<section>
				<Typography.H3 elementClass='h4' className={cl.title}>Latest Post</Typography.H3>
				<div className={cl.grid}>
					{
						MOCK_POSTS.map((item, index) => (
							<CardPost 
								key={index}
								post={item}
							/>
						))
					}
				</div>
				<div className={cl.actions}>
					<ButtonLink href='#!' variant='outline'>View All Post</ButtonLink>
				</div>
			</section>
					
			<div className={cl.gridPost}>
				<CardPostFluid post={MOCK_POSTS_FLUID[0]} position='bottom' />
				<CardPostFluid post={MOCK_POSTS_FLUID[1]} />
				<CardPostFluid post={MOCK_POSTS_FLUID[2]} />
			</div>

			<TagList tags={MOCK_TAGS} prefix='#' title='Popular:' border className={cl.tags}/>

		</div>
	);
}
