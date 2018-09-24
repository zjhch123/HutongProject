import Vue from 'vue'
import Router from 'vue-router'
import NavIndex from '@/views/NavIndex'
import News from '@/views/NavIndex/News'
import Acts from '@/views/NavIndex/Acts'
import More from '@/views/NavIndex/More'
import ActDetail from '@/views/Act/ActDetail'
import ActSubmit from '@/views/Act/ActSubmit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: NavIndex,
      children: [
        {
          path: '',
          redirect: '/news',
        },
        {
          path: 'news',
          component: News,
        },
        {
          path: 'acts',
          component: Acts,
        },
        {
          path: 'more',
          component: More,
        }
      ],
    },
    {
      path: '/act/:id',
      name: 'ActDetail',
      component: ActDetail,
    },
    {
      path: '/act/:id/submit',
      name: 'ActSubmit',
      component: ActSubmit,
    },
  ]
})
