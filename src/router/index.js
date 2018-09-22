import Vue from 'vue'
import Router from 'vue-router'
import moreDetils from '@/components/pages/moreDetils'
import Detail from '@/components/pages/detail'
import Map from '@/components/pages/map'
import VueResource from 'vue-resource'
import lotManager from '@/components/pages/lot/lotManager'
import index from '@/components/pages/index/index'
import productManager from '@/components/pages/products/productManager'
import saleManager from '@//components/pages/sale/saleManager'
import cooperationManager from '@/components/pages/cooperation/cooperationManager'
import Archives from '@/components/pages/archives/archives'
import Household from '@/components/pages/archives/household'
import Plant from '@/components/pages/archives/plant'


/*使用VueResource插件*/
Vue.use(VueResource);
Vue.use(Router)
export default new Router({
 // mode: 'history',
 // mode:'out-in',
  routes: [
    {
      path: '/moreDetils',
      name: 'moreDetils',
      component: moreDetils
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
    ,
    {
      path:'/Map',
      name: 'Map',
      component: Map
    },

    {
      path:'/lotManager',
      name: 'lotManager',
      component:lotManager
    },
    {
      path:'/productManager',
      name: 'productManager',
      component:productManager
    },
 {
    path:'/saleManager',
     name: 'saleManager',
   component:saleManager
 },
    {
      path:'/cooperationManager',
      name: 'cooperationManager',
      component:cooperationManager
    },
    {
      path:'/Archives',
      name: 'Archives',
      component: Archives ,
      children:[
        {
          path: '/',
          name: 'Household',
          component: Household
        },
        {
          path: '/Plant',
          name: 'Plant',
          component: Plant
        }
      ]
    }

  ]
})
