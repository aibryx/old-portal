import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useRoutes } from 'react-router';
import { useUser } from '../hooks/useUser.ts';

export const AppRoutes = () => {
	const { user } = useUser();
	const notFound = [{ path: '*', element: <>Not Found...</> }];
	const routes = user ? protectedRoutes : publicRoutes;
	const element = useRoutes([...routes, ...notFound]);
	return <>{element}</>;
};
