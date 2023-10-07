import { AppEnter } from "@/components/Layouts/AppEnter";

export const protectedRoutes = [
	{
		path: '/',
		element: <AppEnter />,
		children: [
			{ path: 'articles/*', element: <>FooBar</> },
			{ path: 'search', element: <>FooBar</> },
			{ path: 'notification', element: <>FooBar</> },
			{ path: 'settings', element: <>FooBar</> },
			{ path: ':userId', element: <>FooBar</> },
		],
	},
	{
		path: '/new',
		element: <>FooBar</>,
	},
];
