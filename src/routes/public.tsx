import { AppEnter } from '@/components/Layouts/AppEnter';
import { AuthRoutes } from '@/features/auth';
import { ArticlesRoutes } from '@/features/articles';

export const publicRoutes = [
	{
		path: '/',
		element: <AppEnter />,
		children: [
			{ path: 'articles/*', element: <ArticlesRoutes /> },
			{ path: 'search', element: <>FooBar</> },
		],
	},
	{
		path: '/auth/*',
		element: <AuthRoutes />,
	},
];
