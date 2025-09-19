import Link from 'next/link';
import React from 'react';
import { IBreadcrumbsProps } from './breadcrumbs.model';
import cl from './breadcrumbs.module.scss';

export const Breadcrumbs = ({
	breadcrumbs,
	className = '',
	hideHome = false,
}: IBreadcrumbsProps) => {
	return (
		<div
			className={cl['breadcrumbs'] + ' ' + className}
			data-testid="breadcrumbs"
		>
			{!hideHome && (
				<>
					<Link
						href={'/'}
						className={cl.breadcrumbs__item + ' ' + cl.breadcrumbs__link}
					>
						Главная
					</Link>

					<div className={cl.breadcrumbs__separator}>/</div>
				</>
			)}
			{breadcrumbs.map((item, index) => {
				if (item.href !== undefined) {
					return (
						<span
							className={cl.breadcrumbs__item__group}
							key={'link-' + index}
						>
							<Link
								key={index}
								href={item.href}
								className={cl.breadcrumbs__item + ' ' + cl.breadcrumbs__link}
							>
								{item.name}
							</Link>
							{index < breadcrumbs.length - 1 && (
								<div className={cl.breadcrumbs__separator}>/</div>
							)}
						</span>
					);
				}
				return (
					<div
						key={index}
						className={`${cl.breadcrumbs__item}`}
					>
						{item.name}
					</div>
				);
			})}
		</div>
	);
};
