import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import { useRoutes } from "react-router";

export const AppRoutes = () => {
  const auth = true;
  const notFound = [{ path: "*", element: <>Not Found...</> }];
  const routes = auth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...notFound]);
  return <>{element}</>;
};
