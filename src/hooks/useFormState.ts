import { useState } from 'react';

export const useFormState = () => {
	const [error, setError] = useState<null | undefined | string | object>();
	const [loading, setLoading] = useState(false);

	return {
		loading,
		error,
		setError,
		setLoading,
	};
};
