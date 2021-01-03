import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activitys from'../views/activitys.vue'
import Register from '../views/register.vue'
import Order from '../views/order.vue'
import OrderSendt from '../views/orderSendt.vue'
import OurActivitys from'../views/ourActivitys.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Activitys',
    name: 'Activitys',
    component: Activitys,
    props: true
  },
  {
    path: '/OurActivitys',
    name: 'OurActivitys',
    component: OurActivitys,
    props: true
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    props: true
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order,
    props: true
  },
  {
    path: '/OrderSendt',
    name: 'OrderSendt',
    component: OrderSendt
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
