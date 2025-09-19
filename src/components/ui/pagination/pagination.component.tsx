import Link from 'next/link';
import React from 'react';
import { IPaginationProps } from './pagination.model';
import { pageNumbers } from './pagination.utils';
import cl from './pagination.module.scss';

export const Pagination = ({
	count,
	page,
	limit = 10,
	search,
	paginationOffset = 5,
	className = '',
	basePath,
	pageOnSearchParams,
	trailingSlash,
	alwaysArrow = false,
	iconArrowNext,
	iconArrowPrev,
}: IPaginationProps) => {
	const totalPages = Math.ceil(count / limit);

	const pagination = pageNumbers({
		currentPage: page,
		totalPages: totalPages,
		pageNeighbours: paginationOffset,
	});

	const createHref = (pageParams: number) => {
		if (pageOnSearchParams) {
			return `${basePath}${trailingSlash ? '/' : ''}?${pageOnSearchParams}=${pageParams}${search ? '&' + search : ''}`;
		}

		return `${basePath + '/' + pageParams}${trailingSlash ? '/' : ''}${search ? '?' + search : ''}`;
	};

	return (
		<div className={cl['pagination'] + className}>
			<ul className={cl['pagination-list']}>
				{(pagination.LEFT_PAGE || (alwaysArrow && page > 1)) && (
					<li className={`${cl['pagination-list__item']}`}>
						<Link
							className={`${cl['pagination__btn']}`}
							data-page={page - 1}
							href={createHref(page - 1)}
						>
							{iconArrowPrev || (
								<svg
									aria-hidden="true"
									viewBox="0 0 24 24"
								>
									<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
								</svg>
							)}
						</Link>
					</li>
				)}

				{pagination.pages.map((item, index: number) => {
					const sp1 =
						pagination.LEFT_PAGE && index === 0 ? (
							<span className={`${cl['pagination-list__item']}`}>...</span>
						) : undefined;
					const sp2 =
						pagination.RIGHT_PAGE && index + 1 === pagination.pages.length ? (
							<span className={`${cl['pagination-list__item']}`}>...</span>
						) : undefined;

					const li = (
						<li
							className={`${cl['pagination-list__item']} ${
								page === item ? cl['pagination__item_active'] : ''
							}`}
							key={item + 'pagination'}
						>
							{sp2}
							<Link
								className={`${cl['pagination__btn']} ${
									page === item ? cl['pagination__btn_active'] : ''
								}`}
								data-page={item}
								href={`${createHref(item)}`}
							>
								{item}
							</Link>
							{sp1}
						</li>
					);

					return li;
				})}

				{(pagination.RIGHT_PAGE || (alwaysArrow && page < totalPages)) && (
					<li className={`${cl['pagination-list__item']}`}>
						<Link
							className={`${cl['pagination__btn']}`}
							data-page={page + 1}
							href={createHref(page + 1)}
						>
							{iconArrowNext || (
								<svg
									aria-hidden="true"
									viewBox="0 0 24 24"
								>
									<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
								</svg>
							)}
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
};
