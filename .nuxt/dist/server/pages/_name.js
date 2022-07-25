exports.ids = [1];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("609ee7a5", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_c112aaae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_c112aaae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_c112aaae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_c112aaae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_c112aaae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".limit[data-v-c112aaae]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/_name.vue?vue&type=template&id=c112aaae&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.value ? _c('div', {
    staticClass: "max-w-4xl mx-auto space-y-4"
  }, [_vm._ssrNode("<div class=\"flex items-center gap-3\" data-v-c112aaae><h1 class=\"text-5xl font-semibold\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.value.name) + ".eth") + "</h1></div> <div class=\"border p-4 space-y-4\" data-v-c112aaae><div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6\" data-v-c112aaae><div class=\"md:py-2\" data-v-c112aaae><h4 class=\"text-xs uppercase\" data-v-c112aaae>Price</h4> <div class=\"text-2xl font-mono font-semibold\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.formatPrice)) + "</div></div> <div class=\"md:py-2\" data-v-c112aaae><h4 class=\"text-xs uppercase\" data-v-c112aaae>Born</h4> <div class=\"text-2xl font-mono font-semibold\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.formatDateMint)) + "</div></div> <div class=\"md:py-2\" data-v-c112aaae><h4 class=\"text-xs uppercase\" data-v-c112aaae>Expired</h4> <div class=\"text-2xl font-mono font-semibold\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.formatDate)) + "</div></div></div> <div class=\"space-y-2\" data-v-c112aaae><div class=\"flex\" data-v-c112aaae><div class=\"w-36 text-sm\" data-v-c112aaae>ID</div> <div class=\"font-mono limit\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.value.item_id)) + "</div></div> <div class=\"flex\" data-v-c112aaae><div class=\"w-36 text-sm\" data-v-c112aaae>REGISTRANT</div> <div class=\"font-mono limit\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div> <div class=\"flex\" data-v-c112aaae><div class=\"w-36 text-sm\" data-v-c112aaae>CONTROLLER</div> <div class=\"font-mono limit\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div> <div class=\"flex\" data-v-c112aaae><div class=\"w-36 text-sm\" data-v-c112aaae>RESOLVER</div> <div class=\"font-mono limit\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div> <div class=\"flex\" data-v-c112aaae><div class=\"w-36 text-sm\" data-v-c112aaae>OWNER</div> <div class=\"font-mono limit\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div></div></div> <div class=\"border p-4 bg-gray-50 space-y-2 font-mono\" data-v-c112aaae><h2 class=\"uppercase text-gray-500 font-bold\" data-v-c112aaae>Metadata</h2> " + _vm._ssrList(Object.keys(_vm.traits), function (item) {
    return "<div class=\"flex text-xs\" data-v-c112aaae><div class=\"w-36\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(item)) + "</div> <div class=\"font-mono limit\" data-v-c112aaae>" + (_vm.traits[item] ? "<span data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.traits[item])) + "</span>" : "<span class=\"text-gray-400\" data-v-c112aaae>Not set</span>") + "</div></div>";
  }) + "</div> "), _vm._ssrNode("<div data-v-c112aaae>", "</div>", [_vm._ssrNode("<table class=\"min-w-full divide-y divide-gray-300 border\" data-v-c112aaae>", "</table>", [_vm._ssrNode("<thead class=\"bg-gray-50\" data-v-c112aaae><tr data-v-c112aaae><th scope=\"col\" class=\"py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6\" data-v-c112aaae>Event\n        </th> <th scope=\"col\" class=\"px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-c112aaae>Price\n        </th> <th scope=\"col\" class=\"hidden md:table-cell px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-c112aaae>From\n        </th> <th scope=\"col\" class=\"px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-c112aaae>To</th> <th scope=\"col\" class=\"px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-c112aaae>Date\n        </th></tr></thead> "), _vm._ssrNode("<tbody class=\"divide-y divide-gray-200 bg-white\" data-v-c112aaae>", "</tbody>", _vm._l(_vm.value.transactions, function (row) {
    return _vm._ssrNode("<tr data-v-c112aaae>", "</tr>", [_vm._ssrNode("<td class=\"whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(row.event_name || 'minted')) + "</td> "), _vm._ssrNode("<td class=\"whitespace-nowrap py-2 px-3 text-sm text-gray-500\" data-v-c112aaae>", "</td>", [_vm._ssrNode("<div class=\"flex space-x-1 items-center\" data-v-c112aaae>", "</div>", [_c('icon', {
      attrs: {
        "name": "eth"
      }
    }), _vm._ssrNode(" <span data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.displayPrice(row.price))) + "</span>")], 2)]), _vm._ssrNode(" <td class=\"hidden md:table-cell whitespace-nowrap py-2 px-3 text-sm text-gray-500\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.normalizeAdd(row.fr))) + "</td> <td class=\"whitespace-nowrap py-2 px-3 text-sm text-gray-500\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(_vm.normalizeAdd(row.to))) + "</td> <td class=\"whitespace-nowrap py-2 px-3 text-sm text-gray-500\" data-v-c112aaae>" + _vm._ssrEscape(_vm._s(row.timestamp)) + "</td>")], 2);
  }), 0)], 2)])], 2) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/_name.vue?vue&type=template&id=c112aaae&scoped=true&

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=template&id=c43c237c&scoped=true&
var Chartvue_type_template_id_c43c237c_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "h-full line-chart"
  }, [_vm._ssrNode("<div class=\"h-32\" data-v-c43c237c><canvas data-v-c43c237c></canvas></div>")]);
};

var Chartvue_type_template_id_c43c237c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Chart.vue?vue&type=template&id=c43c237c&scoped=true&

// EXTERNAL MODULE: external "chart.js"
var external_chart_js_ = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=script&lang=js&

external_chart_js_["Chart"].register(external_chart_js_["LineElement"], external_chart_js_["PointElement"], external_chart_js_["LineController"], external_chart_js_["CategoryScale"], external_chart_js_["LinearScale"], external_chart_js_["LogarithmicScale"], external_chart_js_["RadialLinearScale"], external_chart_js_["TimeScale"], external_chart_js_["TimeSeriesScale"], external_chart_js_["Decimation"], external_chart_js_["Filler"], external_chart_js_["Legend"], external_chart_js_["Title"], external_chart_js_["Tooltip"]);
let chart;
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  }
};
/* harmony default export */ var Chartvue_type_script_lang_js_ = ({
  name: "Chart",
  props: {
    token: {
      default: 1,
      type: Number
    }
  },
  methods: {
    async loadData() {
      const ctx = this.$refs['myChart'];

      if (this.token) {
        if (chart) {
          chart.destroy();
        }

        const res = {
          results: [{
            time_check: "12/11",
            price_avg: 2
          }, {
            time_check: "13/11",
            price_avg: 10
          }, {
            time_check: "14/11",
            price_avg: 1
          }]
        };
        const labels = [];
        const data = [];
        const range = Math.floor(res.results.length / 3);
        let start = 0;
        res.results.forEach(item => {
          if (start % range === 0) {
            labels.unshift(item.time_check);
          } else {
            labels.unshift("");
          }

          data.unshift(item.price_avg);
          start++;
        });
        chart = new external_chart_js_["Chart"](ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1
            }]
          },
          options: options
        });
      }
    }

  },

  mounted() {
    this.loadData();
  }

});
// CONCATENATED MODULE: ./components/Chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Chartvue_type_script_lang_js_ = (Chartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Chart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Chartvue_type_script_lang_js_,
  Chartvue_type_template_id_c43c237c_scoped_true_render,
  Chartvue_type_template_id_c43c237c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "c43c237c",
  "bf4b2144"
  
)

/* harmony default export */ var Chart = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_name.vue?vue&type=script&lang=js&


/* harmony default export */ var _namevue_type_script_lang_js_ = ({
  name: "NameDetail",
  components: {
    Chart: Chart
  },
  computed: {
    value() {
      return this.$store.state.data.detail;
    },

    formatPrice() {
      return this.displayPrice(this.value.current_price);
    },

    formatDate() {
      const date = new Date(this.value.expired_date);
      return date.toLocaleDateString();
    },

    formatDateMint() {
      const date = new Date(this.value.mint_date);
      return date.toLocaleDateString();
    },

    rows() {
      return [{
        name: "Transfer",
        from: "0x0000",
        to: "0x0000",
        "price": 0.022,
        timestamp: "22/22/2022"
      }];
    },

    traits() {
      return {
        "email": "",
        "url": "",
        "avatar": "",
        "description": "",
        "notice": "",
        "keywords": "",
        "com.discord": "",
        "com.github": "",
        "com.reddit": "",
        "com.twitter": "",
        "org.telegram": "",
        "eth.ens.delegate": ""
      };
    }

  }
});
// CONCATENATED MODULE: ./pages/_name.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_namevue_type_script_lang_js_ = (_namevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/_name.vue



function _name_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _name_component = Object(componentNormalizer["a" /* default */])(
  pages_namevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _name_injectStyles,
  "c112aaae",
  "24ab5c16"
  
)

/* harmony default export */ var _name = __webpack_exports__["default"] = (_name_component.exports);

/***/ })

};;
//# sourceMappingURL=_name.js.map