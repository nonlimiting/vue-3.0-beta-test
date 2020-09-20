/*
 * @Description: 
 * @Autor: destiny-race
 * @Date: 2020-09-20 21:45:39
 * @LastEditTime: 2020-09-20 23:35:35
 */
import {createRouter,createWebHistory} from 'vue-router'


export default createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      component:()=>import('../view/AppTab.vue')
    }
  ]
})