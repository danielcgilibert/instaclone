// Layouts
import LayoutBasic from "../layouts/LayoutBasic";

// Pages
import Error404 from "../pages/Error/Error404";
import { Home } from "../pages/Home/Home";
import User from "../pages/User/User";

const routes = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
    exact: true,
  },
  {
    path: "/:username",
    layout: LayoutBasic,
    component: User,
    exact: true,
  },
  {
    layout: LayoutBasic,
    component: Error404,
  },
];

export default routes;
