import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_779615e6 from 'nuxt_plugin_plugin_779615e6' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_0f7ddfce from 'nuxt_plugin_plugin_0f7ddfce' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_vuetoastification_4e3fd043 from 'nuxt_plugin_vuetoastification_4e3fd043' // Source: ..\\plugins\\vue-toastification.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s","title":"LafyShop","htmlAttrs":{"lang":"fr"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Découvrez une large sélection de téléphones, tablettes et accessoires mobiles à des prix compétitifs. Livraison rapide et paiement sécurisé."},{"name":"format-detection","content":"telephone=no"},{"hid":"og:title","property":"og:title","content":"LafyShop - Ventes de Téléphones et Accessoires"},{"hid":"og:description","property":"og:description","content":"Découvrez une large sélection de téléphones, tablettes et accessoires mobiles à des prix compétitifs. Livraison rapide et paiement sécurisé."},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fstatic.fnac-static.com\u002Fmultimedia\u002FImages\u002FFR\u002FMDM\u002F79\u002F12\u002F04\u002F17044089\u002F1540-1\u002Ftsp20241022182702\u002FApple-iPhone-13-6-1-5G-128-Go-Double-SIM-Noir-minuit.jpg"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Flafyshop.com"},{"hid":"twitter:title","name":"twitter:title","content":"LafyShop - Ventes de Téléphones et Accessoires"},{"hid":"twitter:description","name":"twitter:description","content":"Découvrez une large sélection de téléphones, tablettes et accessoires mobiles à des prix compétitifs. Livraison rapide et paiement sécurisé."},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Fexample.com\u002Fpath\u002Fto\u002Fimage.jpg"},{"hid":"robots","name":"robots","content":"index, follow"},{"hid":"keywords","name":"keywords","content":"téléphones, accessoires, smartphones, tablettes, montre, électronique, achat téléphones"},{"hid":"author","name":"Privat's Labs","content":"Privat's Labs "},{"hid":"language","name":"language","content":"fr-FR"},{"hid":"icon","rel":"icon","href":"\u002Flogo.ico"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002Fapple-touch-icon.png"},{"hid":"structured-data-menu","type":"application\u002Fld+json","content":"{\n          \"@context\": \"https:\u002F\u002Fschema.org\",\n          \"@type\": \"SiteNavigationElement\",\n          \"name\": \"Accueil\",\n          \"url\": \"https:\u002F\u002Flafyshop.com\",\n          \"hasMenu\": [\n            {\n              \"@type\": \"WebPage\",\n              \"name\": \"Téléphones\",\n              \"url\": \"https:\u002F\u002Flafyshop.com\u002Ftelephones\"\n            },\n            {\n              \"@type\": \"WebPage\",\n              \"name\": \"montres\",\n              \"url\": \"https:\u002F\u002Flafyshop.com\u002Fmontres\"\n            },\n            {\n              \"@type\": \"WebPage\",\n              \"name\": \"samsung\",\n              \"url\": \"https:\u002F\u002Flafyshop.com\u002Fsamsung\"\n            },\n            {\n              \"@type\": \"WebPage\",\n              \"name\": \"iphone\",\n              \"url\": \"https:\u002F\u002Flafyshop.com\u002Fiphone\"\n            },\n            {\n              \"@type\": \"WebPage\",\n              \"name\": \"redmi\",\n              \"url\": \"https:\u002F\u002Flafyshop.com\u002Fredmi\"\n            }\n          ]\n        }"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Flogo.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;600;700&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      errPageReady: false,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        nuxt.errPageReady = false
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_779615e6 === 'function') {
    await nuxt_plugin_plugin_779615e6(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_0f7ddfce === 'function') {
    await nuxt_plugin_plugin_0f7ddfce(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuetoastification_4e3fd043 === 'function') {
    await nuxt_plugin_vuetoastification_4e3fd043(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
