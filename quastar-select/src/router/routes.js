const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: ":model/:make/:years",
        component: () => import("pages/ResultPage.vue"),
      },
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
];

export default routes;
