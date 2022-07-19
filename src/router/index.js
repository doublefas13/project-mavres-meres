import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/ListPage";
import productBuyPage from "../components/productBuyPage.vue";
import cartComponent from "../components/cartComponent.vue";
import Crud from "../pages/CrudPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/cart",
    name: "cart",
    component: cartComponent,
  },

  {
    path: "/product/:id",
    name: "test",
    component: productBuyPage,
  },

  {
    path: "/crud",
    name: "Crud",
    component: Crud,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
