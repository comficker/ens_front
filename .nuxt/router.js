import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ef87e9d = () => interopDefault(import('../pages/bulk-search.vue' /* webpackChunkName: "pages/bulk-search" */))
const _991f8aa8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _56ac3944 = () => interopDefault(import('../pages/_name.vue' /* webpackChunkName: "pages/_name" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bulk-search",
    component: _0ef87e9d,
    name: "bulk-search"
  }, {
    path: "/",
    component: _991f8aa8,
    name: "index"
  }, {
    path: "/:name",
    component: _56ac3944,
    name: "name"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
