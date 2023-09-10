import { MainLayout } from "../components/Layouts/MainLayout/MainLayout.tsx";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Suspense, useEffect } from "react";

const Demo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
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
    element: <>FooBar</>,
  },
];
