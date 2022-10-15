const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../pages/auth/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/auth/register.vue"),
  },
];

export default routes;