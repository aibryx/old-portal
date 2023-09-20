import { AuthRoutes } from '../features/auth/routes/AuthRoutes.tsx';
import { Playground } from '../features/auth/components/PlayGround/Playground.tsx';
import { AppEnter } from '../components/Layouts/AppEnter/AppEnter.tsx';

export const publicRoutes = [
	{
		path: '/',
		element: <AppEnter />,
		children: [
			{ path: 'articles/*', element: <>FooBar</> },
			{ path: 'search', element: <>FooBar</> },
		],
	},
	{
		path: '/auth/*',
		element: <AuthRoutes />,
	},
	{
		path: '/playground',
		element: <Playground />,
	},
];
