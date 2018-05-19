import Vue from 'vue'
import Router from 'vue-router'
import Mid from '@/components/pages/Mid'
import moreDetils from '@/components/pages/moreDetils'
import Detail from '@/components/pages/detail'
import VueResource from 'vue-resource'
/*使用VueResource插件*/
Vue.use(VueResource);
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/moreDetils',
      name: 'moreDetils',
      component: moreDetils
    },
    {
      path: '/',
      name: 'Mid',
      component: Mid
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
