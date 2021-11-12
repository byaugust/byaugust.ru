import { wrapFunctional } from './utils'

export { default as BaseImg } from '../../components/global/base-img.vue'

export const LazyBaseImg = import('../../components/global/base-img.vue' /* webpackChunkName: "components/base-img" */).then(c => wrapFunctional(c.default || c))
