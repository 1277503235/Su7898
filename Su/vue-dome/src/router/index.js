import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from "../views/login"
import Order from "../components/order"
import Details from '../components/details'
import Applicationn from "../components/applicationn.vue"
Vue.use(Router)


 const router= new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'Home',
     meta:{
       title:"首页"
     },
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: Login
    },
    {
      path: '/order',
      name: 'Order',
      meta:{
        title:"排序"
      },
      component: Order
    },
    {
      path: '/details/:type/:id',
      name: 'Details',
      meta:{
        title:"申请表"
      },
      component: Details
    },
    {
      path:'/applicationn/:type',
      name:"Applicationn",
      meta:{
         title:'添加'
      },
      component:Applicationn
    }



  ]

})

router.beforeEach((to, from, next) => {
  document.title=to.meta.title;
  next()
 })
 export default router

