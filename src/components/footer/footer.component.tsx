import {
	Button,
	ButtonLink,
	InputField,
	LogoMain,
	Paper,
	Typography,
} from '@/components/ui';
import { useGetTranslations } from '@/hooks/useGetTranslations';
import { Menu } from '../menu';
import cl from './footer.module.scss';

export const Footer = ({
	categories,
}: {
	categories: { label: string; href: string }[];
}) => {
	const { t, locale } = useGetTranslations();
	return (
		<footer className={cl.footer}>
			<div className="container">
				<div className={'flex-base-row ' + cl.row}>
					<div className={cl.about}>
						<Typography.H4>{t('base.title.about')}</Typography.H4>
						<Typography.P className={cl.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam
						</Typography.P>
						<Typography.Link
							href="mailto:info@mail.net"
							weight={600}
							className={cl.link}
						>
							{t('forms.fields.email')}:
							<Typography.Span
								weight={400}
								className={cl.link__label}
							>
								info@mail.net
							</Typography.Span>
						</Typography.Link>
						<Typography.Link
							href="tel:880123456789"
							weight={600}
							className={cl.link}
						>
							{t('forms.fields.phone')}:
							<Typography.Span
								weight={400}
								className={cl.link__label}
							>
								880 123 456 789
							</Typography.Span>
						</Typography.Link>
					</div>
					<div className={cl.menu}>
						<div className={cl.menu__site}>
							<Typography.H4>{t('base.title.menu')}</Typography.H4>
							<Menu list />
						</div>
						<div className={cl.menu__site}>
							<Typography.H4>{t('base.title.categories')}</Typography.H4>
							<ul>
								{categories.map((item, index) => (
									<li key={index + '-cat-' + locale}>
										<ButtonLink href={item.href}>{item.label}</ButtonLink>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className={cl.subscribe}>
						<Paper pd={32}>
							<form className={cl.form}>
								<Typography.H4>{t('base.title.subscribe')}</Typography.H4>
								<Typography.P>{t('base.text.subscribe_desc')}</Typography.P>
								<InputField
									placeholder="Your Email"
									variant="secondary"
								/>
								<Button className={cl.form__btn}>
									{t('base.btn.subscribe')}
								</Button>
							</form>
						</Paper>
					</div>
				</div>
				<div className={'flex-base-row ' + cl.row__bottom}>
					<div className={cl.row__bottom__left}>
						<LogoMain />
						<div>
							<p className={cl.footer__info}>
								Name
								<span>Site</span>
							</p>
							<Typography.P>
								© Site 2025. {t('base.text.rights_reserved')}.
							</Typography.P>
						</div>
					</div>
					<div className={cl.row__bottom__right}>
						<ButtonLink href={'#'}>{t('base.menu.terms_use')}</ButtonLink>
						<ButtonLink href={'#'}>{t('base.menu.privacy_policy')}</ButtonLink>
						<ButtonLink href={'#'}>{t('base.menu.cookie_policy')}</ButtonLink>
					</div>
				</div>
			</div>
		</footer>
	);
};
