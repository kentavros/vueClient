import Vue from 'vue'
import Router from 'vue-router'
import CarsList from '@/components/CarsList'
import Registration from '@/components/Registration'
import Order from '@/components/Order'
import Orders from '@/components/Orders'
import Search from '@/components/Search'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Cars',
      component: CarsList
    },
    {
      path: '/registration',
      name: 'RegistrForm',
      component: Registration
    },
    {
      path: '/order/:obj',
      name: 'order',
      component: Order
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
