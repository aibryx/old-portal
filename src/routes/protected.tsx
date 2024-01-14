import { AppEnter } from '@/components/Layouts/AppEnter';
import { ArticlesRoutes } from '@/features/articles';

export const protectedRoutes = [
	{
		path: '/',
		element: <AppEnter />,
		children: [
			{ path: 'articles/*', element: <ArticlesRoutes /> },
			{ path: 'search', element: <>FooBar</> },
			{ path: 'notification', element: <>FooBar</> },
			{ path: 'settings', element: <>FooBar</> },
			{ path: ':userId', element: <>FooBar</> },
		],
	},
	{
		path: '/new',
		element: <>New Post</>,
	},
];
