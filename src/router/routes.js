const routes = [
  {
    path: "/",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "clientes", component: () => import("pages/ClientesPage.vue") },
      { path: "roles", component: () => import("pages/RolesPage.vue") },
      { path: "users", component: () => import("pages/UsersPage.vue") },
      {
        path: "formularios",
        component: () => import("pages/FormulariosPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
