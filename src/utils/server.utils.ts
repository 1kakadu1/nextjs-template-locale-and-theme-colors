import { headers } from 'next/headers';

export const getServerCustomHeaders = async () => {
	const headersList = await headers();
	const viewport = headersList.get('x-viewport') || 'desktop';
	const is_mobile_viewport = viewport === 'mobile' || viewport === 'tablet';
	const currentPath = headersList.get('x-current-path') || '';

	return {
		currentPath,
		viewport,
		is_mobile_viewport,
	};
};
