import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { MainLayout } from "../components/Layouts/MainLayout/MainLayout.tsx";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/articles");
    }
  }, []);
  return (
    <MainLayout>
      <Suspense fallback={<> Loading... </>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "articles/*", element: <>FooBar</> },
      { path: "search", element: <>FooBar</> },
      { path: "notification", element: <>FooBar</> },
      { path: "settings", element: <>FooBar</> },
      { path: ":userId", element: <>FooBar</> },
    ],
  },
  {
    path: "/new",
    element: <>FooBar</>,
  },
];
