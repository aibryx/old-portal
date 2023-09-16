import { MainLayout } from "../components/Layouts/MainLayout/MainLayout.tsx";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Suspense, useEffect } from "react";
import { AuthRoutes } from "../features/auth/routes/AuthRoutes.tsx";
import { Playground } from "../features/auth/components/PlayGround/Playground.tsx";

const Demo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/articles");
    }
  }, [pathname]);

  return (
    <MainLayout>
      <Suspense fallback={<> Loading... </>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const publicRoutes = [
  {
    path: "/",
    element: <Demo />,
    children: [
      { path: "articles/*", element: <>FooBar</> },
      { path: "search", element: <>FooBar</> },
    ],
  },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
  {
    path: "/playground",
    element: <Playground />,
  },
];
