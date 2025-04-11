import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4876aaf7 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _7700dd0c = () => interopDefault(import('..\\pages\\accessoires.vue' /* webpackChunkName: "pages/accessoires" */))
const _ebb261a2 = () => interopDefault(import('..\\pages\\aide.vue' /* webpackChunkName: "pages/aide" */))
const _691f507c = () => interopDefault(import('..\\pages\\confidentialite.vue' /* webpackChunkName: "pages/confidentialite" */))
const _228ae733 = () => interopDefault(import('..\\pages\\connexion.vue' /* webpackChunkName: "pages/connexion" */))
const _c048270e = () => interopDefault(import('..\\pages\\cookies.vue' /* webpackChunkName: "pages/cookies" */))
const _609ff14b = () => interopDefault(import('..\\pages\\ecouteurs.vue' /* webpackChunkName: "pages/ecouteurs" */))
const _6883f5ab = () => interopDefault(import('..\\pages\\iphone.vue' /* webpackChunkName: "pages/iphone" */))
const _5f892222 = () => interopDefault(import('..\\pages\\montres.vue' /* webpackChunkName: "pages/montres" */))
const _656d5860 = () => interopDefault(import('..\\pages\\paiment.vue' /* webpackChunkName: "pages/paiment" */))
const _64f83cf9 = () => interopDefault(import('..\\pages\\pc.vue' /* webpackChunkName: "pages/pc" */))
const _31f979c2 = () => interopDefault(import('..\\pages\\profil.vue' /* webpackChunkName: "pages/profil" */))
const _047f3d57 = () => interopDefault(import('..\\pages\\redmi.vue' /* webpackChunkName: "pages/redmi" */))
const _3220bc64 = () => interopDefault(import('..\\pages\\samsung.vue' /* webpackChunkName: "pages/samsung" */))
const _6624aeae = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _3fd1dee6 = () => interopDefault(import('..\\pages\\tablettes.vue' /* webpackChunkName: "pages/tablettes" */))
const _08db6016 = () => interopDefault(import('..\\pages\\telephones.vue' /* webpackChunkName: "pages/telephones" */))
const _1f7482dc = () => interopDefault(import('..\\pages\\ticket.vue' /* webpackChunkName: "pages/ticket" */))
const _682e85bc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _8e8e5f84 = () => interopDefault(import('..\\pages\\details\\_id.vue' /* webpackChunkName: "pages/details/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4876aaf7,
    name: "about"
  }, {
    path: "/accessoires",
    component: _7700dd0c,
    name: "accessoires"
  }, {
    path: "/aide",
    component: _ebb261a2,
    name: "aide"
  }, {
    path: "/confidentialite",
    component: _691f507c,
    name: "confidentialite"
  }, {
    path: "/connexion",
    component: _228ae733,
    name: "connexion"
  }, {
    path: "/cookies",
    component: _c048270e,
    name: "cookies"
  }, {
    path: "/ecouteurs",
    component: _609ff14b,
    name: "ecouteurs"
  }, {
    path: "/iphone",
    component: _6883f5ab,
    name: "iphone"
  }, {
    path: "/montres",
    component: _5f892222,
    name: "montres"
  }, {
    path: "/paiment",
    component: _656d5860,
    name: "paiment"
  }, {
    path: "/pc",
    component: _64f83cf9,
    name: "pc"
  }, {
    path: "/profil",
    component: _31f979c2,
    name: "profil"
  }, {
    path: "/redmi",
    component: _047f3d57,
    name: "redmi"
  }, {
    path: "/samsung",
    component: _3220bc64,
    name: "samsung"
  }, {
    path: "/settings",
    component: _6624aeae,
    name: "settings"
  }, {
    path: "/tablettes",
    component: _3fd1dee6,
    name: "tablettes"
  }, {
    path: "/telephones",
    component: _08db6016,
    name: "telephones"
  }, {
    path: "/ticket",
    component: _1f7482dc,
    name: "ticket"
  }, {
    path: "/",
    component: _682e85bc,
    name: "index"
  }, {
    path: "/details/:id?",
    component: _8e8e5f84,
    name: "details-id"
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
