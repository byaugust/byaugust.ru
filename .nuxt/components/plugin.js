import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BaseImg: () => import('../../components/global/base-img.vue' /* webpackChunkName: "components/base-img" */).then(c => wrapFunctional(c.default || c)),
  BaseNavbar: () => import('../../components/global/base-navbar.vue' /* webpackChunkName: "components/base-navbar" */).then(c => wrapFunctional(c.default || c)),
  PostsPostPreview: () => import('../../components/posts/post-preview.vue' /* webpackChunkName: "components/posts-post-preview" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
