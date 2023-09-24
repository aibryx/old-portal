import { useGetCurrentUserQuery } from '../features/users/api/users.ts';

export const useUser = () => {
	const { data, error, isLoading, isError } = useGetCurrentUserQuery(null);

	const user = data || null;

	return {
		user,
		isLoading,
		error,
		isError,
	};
};
