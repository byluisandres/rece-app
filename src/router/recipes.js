const recipes = [
    {
      path: "/recipes",
      name: "recipes",
      component: () => import("../pages/app/recipes/index.vue"),
    },
    {
      path: "/recipes/new",
      name: "recipes-new",
      component: () => import("../pages/app/recipes/edit.vue"),
    },
    {
      path: "/recipes/:id",
      name: "recipes-edit",
      component: () => import("../pages/app/recipes/edit.vue"),
    },
  ];
  
  export default recipes;