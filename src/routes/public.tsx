import { AppEnter } from "@/components/Layouts/AppEnter";
import { AuthRoutes } from "@/features/auth";

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
];
