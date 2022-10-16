import auth from "./auth";
import recipes from "./recipes";
import calendar from "./calendar";
import configuration from "./configuration";
import profile from "./profile";

const routes = [
  ...auth,
  {
    path: "/app",
    component: () => import("../pages/app/index.vue"),
    children: [...recipes, ...calendar, ...configuration, ...profile],
  },
];

export default routes;
