import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderFood from '../views/OrderFood.vue'
import SetFood from '../views/SetFood.vue'
import FoodSetting from '../views/FoodSettingView.vue'
import UsersSetting from '../views/UserSettingView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/OrderFood',
    name: 'OrderFood',
    component: OrderFood
  },
  {
    path: '/SetFood',
    name: 'SetFood',
    component: SetFood
  },
  {
    path: '/FoodSetting',
    name: 'FoodSetting',
    component: FoodSetting
  },
  {
    path: '/UsersSetting',
    name: 'UsersSetting',
    component: UsersSetting
  },
  { 
    path: '*',
    redirect: '/OrderFood'
  } 
]

const router = new VueRouter({
  routes
})

export default router
