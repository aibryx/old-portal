import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useRoutes } from 'react-router';

export const AppRoutes = () => {
	const user = false;
	const notFound = [{ path: '*', element: <>Not Found...</> }];
	const routes = user ? protectedRoutes : publicRoutes;
	const element = useRoutes([...routes, ...notFound]);
	return <>{element}</>;
};
