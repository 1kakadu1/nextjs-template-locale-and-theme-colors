import { MOCK_POSTS, MOCK_POSTS_FLUID } from '@/mock/post';
import { MOCK_TAGS } from '@/mock/tags';
import { Banner } from '@/components/banner';
import { CardPost } from '@/components/cards/card-post';
import { CardPostFluid } from '@/components/cards/card-post-fluid';
import { CardPostSmall } from '@/components/cards/card-post-small';
import { SectionHeader } from '@/components/section-header';
import { TagList } from '@/components/tag-list';
import { ButtonLink, Typography } from '@/components/ui';
import banner from '../../../public/images/Image.jpg';
import avatar from '../../../public/images/Image.png';
import cl from './page.module.scss';

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
					title:
						'The Impact of Technology on the Workplace: How Technology is Changing',
					category: 'Technology',
				}}
			/>
			<section>
				<SectionHeader
					title="Latest Post"
					className={cl.section__titel__wrap}
				/>
				<div className={cl.grid}>
					{MOCK_POSTS.map((item, index) => (
						<CardPost
							key={index}
							post={item}
						/>
					))}
				</div>
				<div className={cl.actions}>
					<ButtonLink
						href="#!"
						variant="outline"
					>
						View All Post
					</ButtonLink>
				</div>
			</section>

			<div className={cl.gridPost}>
				<CardPostFluid
					post={MOCK_POSTS_FLUID[0]}
					position="bottom"
				/>
				<CardPostFluid post={MOCK_POSTS_FLUID[1]} />
				<CardPostFluid post={MOCK_POSTS_FLUID[2]} />
			</div>

			<TagList
				tags={MOCK_TAGS}
				prefix="#"
				title="Popular:"
				border
				className={cl.tags}
			/>

			<section>
				<SectionHeader
					title="Title one"
					link={{ href: '#', label: 'View all' }}
					className={cl.section__titel__wrap}
				/>
				<div className={cl.list}>
					<CardPostFluid
						post={MOCK_POSTS_FLUID[0]}
						position="bottom"
						hideFooter
					/>
					<CardPostFluid
						post={MOCK_POSTS_FLUID[0]}
						position="bottom"
						hideFooter
					/>
					<CardPostFluid
						post={MOCK_POSTS_FLUID[0]}
						position="bottom"
						hideFooter
					/>
					<CardPostFluid
						post={MOCK_POSTS_FLUID[0]}
						position="bottom"
						hideFooter
					/>
				</div>
			</section>

			<section>
				<SectionHeader
					title="Title two"
					link={{ href: '#', label: 'View all' }}
					className={cl.section__titel__wrap}
				/>
				<div className={cl.grid__posts}>
					<CardPostFluid
						post={MOCK_POSTS_FLUID[0]}
						position="bottom"
					/>
					<div className={cl.grid__list__posts}>
						<CardPostSmall
							preview={MOCK_POSTS_FLUID[0].preview}
							date={MOCK_POSTS_FLUID[0].date}
							title={MOCK_POSTS_FLUID[0].title}
							href={MOCK_POSTS_FLUID[0].href}
						/>
						<CardPostSmall
							preview={MOCK_POSTS_FLUID[0].preview}
							date={MOCK_POSTS_FLUID[0].date}
							title={MOCK_POSTS_FLUID[0].title}
							href={MOCK_POSTS_FLUID[0].href}
						/>
						<CardPostSmall
							preview={MOCK_POSTS_FLUID[0].preview}
							date={MOCK_POSTS_FLUID[0].date}
							title={MOCK_POSTS_FLUID[0].title}
							href={MOCK_POSTS_FLUID[0].href}
						/>
						<CardPostSmall
							preview={MOCK_POSTS_FLUID[0].preview}
							date={MOCK_POSTS_FLUID[0].date}
							title={MOCK_POSTS_FLUID[0].title}
							href={MOCK_POSTS_FLUID[0].href}
						/>
						<CardPostSmall
							preview={MOCK_POSTS_FLUID[0].preview}
							date={MOCK_POSTS_FLUID[0].date}
							title={MOCK_POSTS_FLUID[0].title}
							href={MOCK_POSTS_FLUID[0].href}
						/>
						<CardPostSmall
							preview={MOCK_POSTS_FLUID[0].preview}
							date={MOCK_POSTS_FLUID[0].date}
							title={MOCK_POSTS_FLUID[0].title}
							href={MOCK_POSTS_FLUID[0].href}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
