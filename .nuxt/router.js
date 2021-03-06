import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _15e0591e = () => import('../pages/sale.vue' /* webpackChunkName: "pages/sale" */).then(m => m.default || m)
const _076914ca = () => import('../pages/painting.vue' /* webpackChunkName: "pages/painting" */).then(m => m.default || m)
const _ba440112 = () => import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */).then(m => m.default || m)
const _7c445deb = () => import('../pages/photo.vue' /* webpackChunkName: "pages/photo" */).then(m => m.default || m)
const _7eadf88b = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/sale",
			component: _15e0591e,
			name: "sale"
		},
		{
			path: "/painting",
			component: _076914ca,
			name: "painting"
		},
		{
			path: "/cart",
			component: _ba440112,
			name: "cart"
		},
		{
			path: "/photo",
			component: _7c445deb,
			name: "photo"
		},
		{
			path: "/",
			component: _7eadf88b,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
