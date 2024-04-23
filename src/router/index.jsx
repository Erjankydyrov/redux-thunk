import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const RouterView = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);
  return element;
};

export default RouterView;
