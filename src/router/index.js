import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import serviceCenter from '@/pages/serviceCenter'
import corporateCulture from '@/pages/corporateCulture'
import Designer from '@/pages/Designer'
import Join from '@/pages/Join'
import newsCenter from '@/pages/newsCenter'
import newsInfo from '@/pages/newsInfo'
import productCenter from '@/pages/productCenter'
import productInfo from '@/pages/productInfo'
import productwarp from '@/pages/productwarp'
import salesCenter from '@/pages/salesCenter'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/serviceCenter',
      name: 'serviceCenter',
      component: serviceCenter
    },
    {
      path: '/corporateCulture',
      name: 'corporateCulture',
      component: corporateCulture
    },
    {
      path: '/Designer',
      name: 'Designer',
      component: Designer
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/newsCenter',
      name: 'newsCenter',
      component: newsCenter
    },
    {
      path: '/newsInfo',
      name: 'newsInfo',
      component: newsInfo
    },
    {
      path: '/productCenter',
      name: 'productCenter',
      component: productCenter
    },
    {
      path: '/productInfo',
      name: 'productInfo',
      component: productInfo
    },
    {
      path: '/productwarp',
      name: 'productwarp',
      component: productwarp
    },
    {
      path: '/salesCenter',
      name: 'salesCenter',
      component: salesCenter
    },
  ]
})
