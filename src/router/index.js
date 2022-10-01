import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/Products/ProductView.vue';
import NewProduct from '../views/Products/NewProduct.vue';
import ProductList from '../views/Products/ProductList.vue';
import Checkout from '../views/User/CheckoutView.vue';
import LoginView from '@/views/Auth/LoginView.vue';
import RegisterView from '../views/Auth/RegisterView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/product/:id',
    props: true,
    name: 'product',
    component: ProductView,
  },
  {
    path: '/list/',
    name: 'list',
    component: ProductList,
  },
  {
    path: '/new/',
    name: 'new',
    component: NewProduct,
  },
  {
    path: '/checkout/',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

