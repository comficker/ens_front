exports.ids = [3];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5ee0f42f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "max-w-4xl mx-auto my-4 md:my-6"
  }, [_vm._ssrNode("<div class=\"flex gap-4\">", "</div>", [_vm._ssrNode("<div class=\"flex items-center gap-3\"><div class=\"w-3 h-3 flex items-center justify-center rounded-full bg-green-400\"><div class=\"animate-ping w-3 h-3 rounded-full bg-green-400\"></div></div> <h2 class=\"text-lg font-semibold\">Live</h2> <span class=\"p-0.5 px-2 font-bold rounded text-xs bg-green-300\">minting</span></div> <div class=\"flex-1\"></div> "), _vm._ssrNode("<div class=\"flex space-x-4\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("btn", {
    'active': _vm.showFilter
  }) + ">", "</div>", [_c('icon', {
    attrs: {
      "name": "sort"
    }
  }), _vm._ssrNode(" <span class=\"md:block hidden\">Filter</span>")], 2), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "btn pri",
    attrs: {
      "to": "/bulk-search"
    }
  }, [_vm._v("Bulk Search")])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"border px-4 mt-3\">", "</div>", [_vm._ssrNode("<div class=\"-mx-4 my-2 text-sm font-bold uppercase flex p-3 pb-2 pt-0 border-b justify-between items-center\">", "</div>", [_vm._ssrNode("<div class=\"md:flex gap-1 underline text-center\">", "</div>", _vm._l(_vm.alphabet, function (x, i) {
    return _vm._ssrNode("<div class=\"flex gap-1\">", "</div>", _vm._l(x, function (item) {
      return _c('nuxt-link', {
        key: item,
        staticClass: "block w-5 h-6 md:w-3 md:h-3",
        attrs: {
          "to": `/?start=${item}`
        }
      }, [_vm._v(_vm._s(item) + "\n          ")]);
    }), 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"hidden md:flex space-x-2\">", "</div>", [_vm.response.previous !== null ? _c('nuxt-link', {
    staticClass: "p-1 border cursor-pointer",
    attrs: {
      "to": _vm.response.previous
    }
  }, [_c('icon', {
    attrs: {
      "name": "chv-left"
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.response.next !== null ? _c('nuxt-link', {
    staticClass: "p-1 border cursor-pointer",
    attrs: {
      "to": _vm.response.next
    }
  }, [_c('icon', {
    attrs: {
      "name": "chv-right"
    }
  })], 1) : _vm._e()], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"-mx-4 my-2 text-xs font-bold uppercase p-3 py-1 flex space-x-4\">", "</div>", [_vm._ssrNode("<div class=\"flex sort flex-1\">", "</div>", [_c('sort', {
    model: {
      value: _vm.sort.name,
      callback: function ($$v) {
        _vm.$set(_vm.sort, "name", $$v);
      },
      expression: "sort.name"
    }
  }), _vm._ssrNode(" <span>Name</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex sort w-24 justify-end\">", "</div>", [_c('sort', {
    model: {
      value: _vm.sort.current_price,
      callback: function ($$v) {
        _vm.$set(_vm.sort, "current_price", $$v);
      },
      expression: "sort.current_price"
    }
  }), _vm._ssrNode(" <span>Price</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:flex sort w-24 hidden justify-end\">", "</div>", [_c('sort', {
    model: {
      value: _vm.sort.mint_date,
      callback: function ($$v) {
        _vm.$set(_vm.sort, "mint_date", $$v);
      },
      expression: "sort.mint_date"
    }
  }), _vm._ssrNode(" <span>Created</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex sort w-24 justify-end\">", "</div>", [_c('sort', {
    model: {
      value: _vm.sort.expired_date,
      callback: function ($$v) {
        _vm.$set(_vm.sort, "expired_date", $$v);
      },
      expression: "sort.expired_date"
    }
  }), _vm._ssrNode(" <span>Expired</span>")], 2), _vm._ssrNode(" <div class=\"hidden md:flex sort w-24 justify-end\"><span>Links</span></div>")], 2), _vm._ssrNode(" "), _vm._l(_vm.response.results, function (item) {
    return _c('project-card', {
      key: item.id,
      attrs: {
        "value": item
      }
    });
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bg-gray-50 -mx-4 text-xs font-bold uppercase p-2 flex border-t justify-between items-center\">", "</div>", [_vm._ssrNode("<div class=\"flex space-x-1\">" + _vm._ssrEscape("total: " + _vm._s(_vm.response.count)) + "</div> "), _vm._ssrNode("<div class=\"flex space-x-2\">", "</div>", [_vm.response.previous !== null ? _c('nuxt-link', {
    staticClass: "p-1 border cursor-pointer",
    attrs: {
      "to": _vm.response.previous
    }
  }, [_c('icon', {
    attrs: {
      "name": "chv-left"
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.response.next !== null ? _c('nuxt-link', {
    staticClass: "p-1 border cursor-pointer",
    attrs: {
      "to": _vm.response.next
    }
  }, [_c('icon', {
    attrs: {
      "name": "chv-right"
    }
  })], 1) : _vm._e()], 2)], 2)], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5ee0f42f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/helpers/Utils/Sort.vue?vue&type=template&id=55bef5b6&scoped=true&
var Sortvue_type_template_id_55bef5b6_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div" + _vm._ssrClass("data-select", {
    active: _vm.active
  }) + " data-v-55bef5b6>", "</div>", [_vm._ssrNode("<div class=\"cursor-pointer\" data-v-55bef5b6>", "</div>", [_c('icon', {
    attrs: {
      "name": _vm.icon,
      "fill": _vm.temp === 0 ? '#DDD' : '#bcfb41'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("wrap w-64 text-left", {
    active: _vm.active
  }) + " data-v-55bef5b6>", "</div>", [_vm._ssrNode("<div class=\"absolute bg-red-500 rounded-full p-0.5 -top-2 -left-2 cursor-pointer\" data-v-55bef5b6>", "</div>", [_c('icon', {
    staticClass: "sm",
    attrs: {
      "name": "close",
      "fill": "#FFF"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"p-2 shadow\" data-v-55bef5b6>", "</div>", _vm._l(_vm.values, function (item) {
    return _vm._ssrNode("<div" + _vm._ssrClass("p-1 border cursor-pointer", {
      'border-transparent': item.value !== _vm.temp,
      'bg-green-50': item.value === _vm.temp
    }) + " data-v-55bef5b6>", "</div>", [_vm._ssrNode("<div class=\"flex text-xs space-x-2 py-1\" data-v-55bef5b6>", "</div>", [_c('icon', {
      staticClass: "cursor-pointer",
      attrs: {
        "name": "sort"
      }
    }), _vm._ssrNode(" <span data-v-55bef5b6>" + _vm._ssrEscape(_vm._s(item.title)) + "</span>")], 2)]);
  }), 0)], 2)], 2)]);
};

var Sortvue_type_template_id_55bef5b6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/helpers/Utils/Sort.vue?vue&type=template&id=55bef5b6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/helpers/Utils/Sort.vue?vue&type=script&lang=js&
/* harmony default export */ var Sortvue_type_script_lang_js_ = ({
  name: "Sort",
  props: {
    value: {
      default: 0,
      type: Number
    },
    icon: {
      default: 'sort',
      type: String
    }
  },

  data() {
    return {
      active: false,
      temp: this.value,
      values: [{
        value: 0,
        title: "Clear order"
      }, {
        value: 1,
        title: "Ascending"
      }, {
        value: -1,
        title: "Descending"
      }]
    };
  },

  computed: {},
  watch: {
    temp() {
      this.$emit('input', this.temp);
    }

  },
  methods: {
    deActive() {
      this.active = false;
    },

    select(item) {},

    handleFocus() {
      this.active = true;
    }

  }
});
// CONCATENATED MODULE: ./components/helpers/Utils/Sort.vue?vue&type=script&lang=js&
 /* harmony default export */ var Utils_Sortvue_type_script_lang_js_ = (Sortvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/helpers/Utils/Sort.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Utils_Sortvue_type_script_lang_js_,
  Sortvue_type_template_id_55bef5b6_scoped_true_render,
  Sortvue_type_template_id_55bef5b6_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "55bef5b6",
  "07ef2a54"
  
)

/* harmony default export */ var Sort = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/ProjectCard.vue?vue&type=template&id=7f861088&
var ProjectCardvue_type_template_id_7f861088_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "p-3 py-1.5 -mx-4 flex space-x-4 hover:bg-gray-100 duration-300 border-t"
  }, [_vm._ssrNode("<div class=\"flex-1 relative\">", "</div>", [_vm._ssrNode("<div class=\"absolute inset-0 flex items-center\">", "</div>", [_vm._ssrNode("<h4 class=\"font-bold leading-none limit text-xl tracking-wide\">", "</h4>", [_c('nuxt-link', {
    attrs: {
      "to": `/${_vm.value.id}-${_vm.value.name}.eth`
    }
  }, [_vm._v(_vm._s(_vm.value.name) + ".eth")])], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-24 flex space-x-1 items-center justify-end\">", "</div>", [_vm._ssrNode("<span>" + _vm._ssrEscape(_vm._s(_vm.formatPrice)) + "</span> "), _c('icon', {
    attrs: {
      "name": "eth"
    }
  })], 2), _vm._ssrNode(" <div class=\"w-24 hidden md:block text-right text-xs\"><div class=\"font-bold\">" + _vm._ssrEscape(_vm._s(_vm.mintDate.toLocaleDateString())) + "</div> <div class=\"text-gray-500\">" + _vm._ssrEscape(_vm._s(_vm.mintDate.toLocaleTimeString())) + "</div></div> <div class=\"w-24 text-right text-xs\"><div class=\"font-bold\">" + _vm._ssrEscape(_vm._s(_vm.expiredDate.toLocaleDateString())) + "</div> <div class=\"text-gray-500\">" + _vm._ssrEscape(_vm._s(_vm.expiredDate.toLocaleTimeString())) + "</div></div> <div class=\"w-24 hidden md:block\"><div class=\"flex space-x-2 justify-end text-xs\"><a" + _vm._ssrAttr("href", `https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${_vm.value.item_id}`) + " target=\"_blank\"><img src=\"/opensea.svg\" alt class=\"w-4 h-4\"></a> <a" + _vm._ssrAttr("href", `https://etherscan.io/address/${_vm.value.owner}`) + " target=\"_blank\"><img src=\"/etherscan.svg\" alt class=\"w-4 h-4\"></a></div></div>")], 2);
};

var ProjectCardvue_type_template_id_7f861088_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/ProjectCard.vue?vue&type=template&id=7f861088&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/ProjectCard.vue?vue&type=script&lang=js&
const web3 = __webpack_require__(10);

/* harmony default export */ var ProjectCardvue_type_script_lang_js_ = ({
  name: "ProjectCard",
  props: {
    value: {
      default: null,
      type: Object
    }
  },
  computed: {
    formatPrice() {
      return (+web3.utils.fromWei(Number.parseInt(this.value.current_price).toString())).toFixed(5);
    },

    expiredDate() {
      return new Date(this.value.expired_date);
    },

    mintDate() {
      return new Date(this.value.mint_date);
    }

  }
});
// CONCATENATED MODULE: ./components/partials/ProjectCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var partials_ProjectCardvue_type_script_lang_js_ = (ProjectCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/ProjectCard.vue





/* normalize component */

var ProjectCard_component = Object(componentNormalizer["a" /* default */])(
  partials_ProjectCardvue_type_script_lang_js_,
  ProjectCardvue_type_template_id_7f861088_render,
  ProjectCardvue_type_template_id_7f861088_staticRenderFns,
  false,
  null,
  null,
  "e408a488"
  
)

/* harmony default export */ var ProjectCard = (ProjectCard_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    ProjectCard: ProjectCard,
    Sort: Sort
  },

  data() {
    return {
      today: new Date().toISOString().split("T")[0],
      alphabet: [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"], ["N", "O", "P", "Q", "R", "U", "V", "W", "X", "Y", "Z", "S", "T"]],
      showFilter: false,
      display: [],
      text: "",
      query: {
        page: 1
      },
      sort: {
        'name': 0,
        'current_price': 0,
        'mint_date': 0,
        'expired_date': 0
      },
      reports: []
    };
  },

  computed: {
    response() {
      return this.$store.state.data.response;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fd214504"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map