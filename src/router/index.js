import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import serviceCenter from '@/pages/serviceCenter'
import corporateCulture from '@/pages/corporateCulture'
import Designer from '@/pages/Designer'
import DesignerItem from '@/pages/DesignerItem'
import Join from '@/pages/Join'
import newsCenter from '@/pages/newsCenter'
import newsInfo from '@/pages/newsInfo'
import productCenter from '@/pages/productCenter'
import productCen from '@/pages/productCen'
import productInfo from '@/pages/productInfo'
import productwarp from '@/pages/productwarp'
import productlist from '@/pages/productlist'
import productlist2 from '@/pages/productlist2'
import salesCenter from '@/pages/salesCenter'
import productKind from '@/pages/productKind'
import productKind2 from '@/pages/productKind2'
import productMore from '@/pages/productMore'
import formJoin from '@/pages/formJoin'
import designerList from '@/pages/designerList'
import productDetail from '@/pages/productDetail'
import shopName from '@/pages/shopName'
Vue.use(Router)
export default new Router({
  scrollBehavior(to,from,saveTop){
      if(saveTop){
        return saveTop;
      }else{
        return {x:0,y:0}
      }
    },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/productMore',
      name: 'productMore',
      component: productMore
    },
    {
      path: '/shopName',
      name: 'shopName',
      component: shopName
    },
    {
      path:'/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path:'/designerList',
      name: 'designerList',
      component: designerList
    },
    {
      path: '/formJoin',
      name: 'formJoin',
      component: formJoin
    },
      {
      path: '/productKind',
      name: 'productKind',
      component: productKind
    },
      {
      path: '/productKind2',
      name: 'productKind2',
      component: productKind2
    },
    {
      path: '/productCen',
      name: 'productCen',
      component: productCen
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
      path: '/DesignerItem',
      name: 'DesignerItem',
      component: DesignerItem
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
      path: '/productlist',
      name: 'productlist',
      component: productlist
    },
    {
      path: '/productlist2',
      name: 'productlist2',
      component: productlist2
    },
    {
      path: '/salesCenter',
      name: 'salesCenter',
      component: salesCenter
    },
  ]
})
