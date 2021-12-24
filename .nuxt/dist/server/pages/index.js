exports.ids = [3,2];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/posts/post-preview.vue?vue&type=template&id=681f1e13&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"mb-6 block relative",attrs:{"to":("/posts/" + (_vm.post.slug))}},[_c('div',{staticClass:"absolute left-0 top-0 mt-1 -ml-8"},[_c('svg',{staticClass:"h-5 w-5",class:_vm.hovered ? 'text-indigo-600' : 'text-indigo-200',attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"}},[_c('path',{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M13 10V3L4 14h7v7l9-11h-7z"}})])]),_vm._v(" "),_c('div',{on:{"mouseover":function($event){_vm.hovered = true},"mouseleave":function($event){_vm.hovered = false}}},[_c('h2',{staticClass:"text-xl font-medium mb-0",class:_vm.hovered ? 'text-dark-333' : 'text-dark-444'},[_vm._v("\n            "+_vm._s(_vm.post.title)+"\n        ")]),_vm._v(" "),_c('p',{staticClass:"text-base font-normal",class:_vm.hovered ? 'text-dark-555' : 'text-dark-666'},[_vm._v("\n            "+_vm._s(_vm.get_date(_vm.post.date))+"\n        ")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/posts/post-preview.vue?vue&type=template&id=681f1e13&

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(27);

// EXTERNAL MODULE: external "dayjs/locale/ru"
var ru_ = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/posts/post-preview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var post_previewvue_type_script_lang_js_ = ({
  name: 'post-preview',
  props: {
    post: Object
  },

  data() {
    return {
      hovered: false
    };
  },

  methods: {
    get_date(date) {
      return external_dayjs_["unix"](date).locale('ru').format('DD MMM YYYY');
    }

  }
});
// CONCATENATED MODULE: ./components/posts/post-preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_post_previewvue_type_script_lang_js_ = (post_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/posts/post-preview.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_post_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8b417b18"
  
)

/* harmony default export */ var post_preview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pic.fc1eca9.jpeg";

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=98465aaa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full mx-auto h-full py-0 my-0"},[_vm._ssrNode("<div class=\"lg:w-6/12 w-full md:w-10/12 mx-auto pt-8 pb-24 px-6 md:px-8\">","</div>",[_vm._ssrNode("<div class=\"w-40 h-40 rounded-full shadow-sm mb-6\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt class=\"h-full w-full rounded-full\"></div> <h2 class=\"md:text-2xl text-xl font-medium mb-2\">Привет, я — Костя 🖖</h2> <p class=\"md:text-xl text-lg text-dark-555 font-normal mb-6\">Преподаю английский, пишу код, учусь в университете искусственного интеллекта, создаю проект <a href=\"https://speakny.me\" class=\"link text-blue-600\">speakny.me</a>.</p> <p class=\"md:text-xl text-lg text-dark-555 font-normal mb-12\">Здесь документирую: что делаю, что сделал, что узнал нового, что получилось и т.п.</p> <h2 class=\"text-2xl font-medium mb-3\">Блог</h2> "),_vm._l((_vm.posts),function(post){return _c('postpreview',{key:post.slug,attrs:{"post":post}})})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=98465aaa&

// EXTERNAL MODULE: ./components/posts/post-preview.vue + 4 modules
var post_preview = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    postpreview: post_preview["default"]
  },

  async asyncData({
    $content,
    params
  }) {
    try {
      const posts = await $content("posts").sortBy('date', 'desc').fetch();
      return {
        posts
      };
    } catch {
      err => {
        console.log(err);
      };
    }
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27a4466a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map