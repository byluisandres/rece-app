const routes = [
  {
    path: "/",
    redirect: { name: "login" },
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../pages/auth/login.vue"),
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("../pages/auth/register.vue"),
  },
  {
    path: "/auth/recover-password",
    name: "recover-password",
    component: () => import("../pages/auth/recover-password.vue"),
  },
];

export default routes;
