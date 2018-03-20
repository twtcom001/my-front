import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/account',
    component: Layout,
    redirect: '/account/qcount',
    name: '记账',
    meta: { title: '记账', icon: 'example' },
    children: [
      {
        path: 'qcount',
        name: '吃饱饱',
        component: () => import('@/views/account/qcount'),
        meta: { title: '吃饱饱', icon: 'table' }
      },
     {
        path: 'pcount',
        name: '清蒸庄园',
        component: () => import('@/views/account/pcount'),
        meta: { title: '清蒸庄园', icon: 'plant1' }
      }
    ]
  },
  {
    path: '/total',
    component: Layout,
    redirect: '/total/plant',
    name: '统计',
    meta: { title: '统计', icon: 'tree2' },
    children: [
      {
        path: 'plant',
        name: '植物管理',
        component: () => import('@/views/total/plant'),
        meta: { title: '植物管理', icon: 'flower' }
      },
      {
        path: 'address',
        name: '地址管理',
        component: () => import('@/views/total/address'),
        meta: { title: '地址管理', icon: 'home' }
      }
    ]
  },
  {
    path: '/manager',
    component: Layout,
    redirect: '/manager/user',
    name: '管理中心',
    meta: { title: '管理中心', icon: 'tree' },
    children: [
      {
        path: 'user',
        name: '用户中心',
        component: () => import('@/views/manager/user'),
        meta: { title: '用户中心', icon: 'user' }
      },
      {
        path: 'dict',
        name: '字典管理',
        component: () => import('@/views/manager/dict'),
        meta: { title: '字典管理', icon: 'book_opened' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

