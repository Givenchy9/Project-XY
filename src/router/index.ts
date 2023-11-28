import { createRouter, createWebHistory } from 'vue-router'
import HomeZ1 from '@/views/Home/HomeZ1.vue'
import jaar1 from '@/views/Home/jaar1.vue'
import jaar2 from '@/views/Home/jaar2.vue'
import index from '@/views/Home/index.vue'
import test from '@/views/Home/test.vue'
import NameChanger from '@/views/Home/NameChanger.vue'
import AppVue from '@/App.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: index,
      name: 'index',

    },
    {
      children: [
        {
          path: '/jaar1',
          name: 'jaar1',
          component: jaar1,
          meta: {
            title: 'jaar1'
          }
        },
        {
          path: '/jaar2',
          name: 'jaar2',
          component: jaar2,
          meta: {
            title: 'jaar2'
          }
        },
        {
          path: '/NameChanger',
          name: 'NameChanger',
          component: NameChanger,
          meta: {
            title: 'NameChanger'
          }
        },
        {
          path: '/test',
          name: 'test',
          component: test,
          meta: {
            title: 'test'
          }
        },
      ]
    }
  ]
});

export default router

