import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Customers from "../views/Customers.vue"
import Products from "../views/Products.vue"

// import Customer from '../views/Customer.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/customer',
  //   name: 'Customer',
  //   component: Customer
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {

  // console.log(to.name);
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");

  switch (to.name) {
    case "Home": {
      if(token && status === "1" && email && username){
        next();
      } else {
        next({ name: "Login" });
      }
      break;
    }
    case "Customers": {
      if(token && status === "1" && email && username){
        next();
      } else {
        next({ name: "Login" });
      }
      break;
    }
    case "Products": {
      if(token && status === "1" && email && username){
        next();
      } else {
        next({ name: "Login" });
      }
      break;
    }
    case "Login": {
      // console.log(to.name);

      next();
      break;
    }
    case "Register": {
      // console.log(to.name);

      next();
      break;
    }
    default: {
      break;
    }
  }
});

export default router