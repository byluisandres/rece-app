import auth from "./auth";
import recipes from "./recipes";
import calendar from "./calendar";

const routes = [
  ...auth,
  {
    path: "/app",
    component: () => import("../pages/app/index.vue"),
    children: [...recipes, ...calendar],
  },
];

export default routes;
