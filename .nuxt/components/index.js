import { wrapFunctional } from './utils'

export { default as BaseImg } from '../../components/global/base-img.vue'
export { default as BaseNavbar } from '../../components/global/base-navbar.vue'
export { default as PostsPostPreview } from '../../components/posts/post-preview.vue'

export const LazyBaseImg = import('../../components/global/base-img.vue' /* webpackChunkName: "components/base-img" */).then(c => wrapFunctional(c.default || c))
export const LazyBaseNavbar = import('../../components/global/base-navbar.vue' /* webpackChunkName: "components/base-navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyPostsPostPreview = import('../../components/posts/post-preview.vue' /* webpackChunkName: "components/posts-post-preview" */).then(c => wrapFunctional(c.default || c))
