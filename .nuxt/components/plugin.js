import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BaseImg: () => import('../../components/global/base-img.vue' /* webpackChunkName: "components/base-img" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
