import { Outlet, useLocation, useNavigate } from 'react-router';
import { Suspense, useEffect } from 'react';
import { MainLayout } from '../MainLayout/MainLayout.tsx';
import { Spinner } from "@/components/Elements/Spinner";

export const AppEnter = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/articles');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);
	return (
		<MainLayout>
			<Suspense
				fallback={
						<Spinner/>
				}
			>
				<Outlet />
			</Suspense>
		</MainLayout>
	);
};
