import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useRoutes } from 'react-router';
import { useQuery } from '@/hooks/useQuery.ts';
import { getCurrentUser } from '@/features/users/api/users.ts';

export const AppRoutes = () => {
	const { data: user } = useQuery(getCurrentUser);
	const notFound = [{ path: '*', element: <>Not Found...</> }];
	const routes = user ? protectedRoutes : publicRoutes;
	const element = useRoutes([...routes, ...notFound]);
	return <>{element}</>;
};
