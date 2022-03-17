import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ExampleRefAndReactive',
    component: () => import('@/views/ExampleRefAndReactive.vue')
  },
  {
    path: '/example-computed',
    name: 'ExampleComputed',
    component: () => import('@/views/ExampleComputed.vue')
  },
  {
    path: '/example-lifecycle',
    name: 'ExampleLifecycle',
    component: () => import('@/views/ExampleLifecycle.vue')
  },
  {
    path: '/example-dependency-injection',
    name: 'ExampleDependencyInjection',
    component: () => import('@/views/ExampleDependencyInjection.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
