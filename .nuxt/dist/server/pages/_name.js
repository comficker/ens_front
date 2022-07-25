exports.ids = [1];
exports.modules = {

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/_name.vue?vue&type=template&id=683c2f60&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.value ? _c('div', {
    staticClass: "max-w-4xl mx-auto space-y-4"
  }, [_vm._ssrNode("<div class=\"flex items-center gap-3\" data-v-683c2f60><h1 class=\"text-5xl font-semibold\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.name) + ".eth") + "</h1></div> "), _vm._ssrNode("<div class=\"border p-4 space-y-3\" data-v-683c2f60>", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6\" data-v-683c2f60>", "</div>", [_vm._ssrNode("<div class=\"md:py-2\" data-v-683c2f60>", "</div>", [_vm._ssrNode("<h4 class=\"text-xs uppercase\" data-v-683c2f60>Price</h4> "), _vm._ssrNode("<div class=\"text-3xl flex items-center space-x-1 font-mono font-semibold text-green-500 fill-green-500\" data-v-683c2f60>", "</div>", [_vm._ssrNode("<span data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.formatPrice)) + "</span> "), _c('icon', {
    staticClass: "lg",
    attrs: {
      "name": "eth"
    }
  })], 2)], 2), _vm._ssrNode(" <div class=\"md:py-2\" data-v-683c2f60><h4 class=\"text-xs uppercase\" data-v-683c2f60>Born</h4> <div class=\"text-lg font-mono font-semibold\" data-v-683c2f60><div data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.formatDateMint.toLocaleDateString())) + "</div> <div class=\"text-xs text-gray-500\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.formatDateMint.toLocaleTimeString())) + "</div></div></div> <div class=\"md:py-2\" data-v-683c2f60><h4 class=\"text-xs uppercase\" data-v-683c2f60>Expired</h4> <div class=\"text-lg font-mono font-semibold\" data-v-683c2f60><div data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.formatDate.toLocaleDateString())) + "</div> <div class=\"text-xs text-gray-500\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.formatDate.toLocaleTimeString())) + "</div></div></div>")], 2), _vm._ssrNode(" <div class=\"space-y-2\" data-v-683c2f60><div class=\"flex\" data-v-683c2f60><div class=\"w-36 text-sm\" data-v-683c2f60>ID</div> <div class=\"font-mono limit\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.item_id)) + "</div></div> <div class=\"flex\" data-v-683c2f60><div class=\"w-36 text-sm\" data-v-683c2f60>REGISTRANT</div> <div class=\"font-mono limit\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div> <div class=\"flex\" data-v-683c2f60><div class=\"w-36 text-sm\" data-v-683c2f60>CONTROLLER</div> <div class=\"font-mono limit\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div> <div class=\"flex\" data-v-683c2f60><div class=\"w-36 text-sm\" data-v-683c2f60>RESOLVER</div> <div class=\"font-mono limit\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div> <div class=\"flex\" data-v-683c2f60><div class=\"w-36 text-sm\" data-v-683c2f60>OWNER</div> <div class=\"font-mono limit\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.owner)) + "</div></div></div> <div class=\"text-xs italic border-t border-dashed pt-3\" data-v-683c2f60><p data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.name) + ".eth registered by " + _vm._s(_vm.value.owner) + " in " + _vm._s(_vm.formatDateMint.toLocaleString()) + " and will be expired in " + _vm._s(_vm.formatDate.toLocaleString())) + "</p></div>")], 2), _vm._ssrNode(" <div class=\"border p-4 bg-gray-50 space-y-2 font-mono\" data-v-683c2f60><h2 class=\"uppercase text-gray-500 font-bold\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.value.name) + ".eth Metadata") + "</h2> " + _vm._ssrList(Object.keys(_vm.traits), function (item) {
    return "<div class=\"flex text-xs\" data-v-683c2f60><div class=\"w-36\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(item)) + "</div> <div class=\"font-mono limit\" data-v-683c2f60>" + (_vm.traits[item] ? "<span data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.traits[item])) + "</span>" : "<span class=\"text-gray-400\" data-v-683c2f60>Not set</span>") + "</div></div>";
  }) + "</div> "), _vm._ssrNode("<div data-v-683c2f60>", "</div>", [_vm._ssrNode("<table class=\"min-w-full border\" data-v-683c2f60>", "</table>", [_vm._ssrNode("<thead class=\"bg-gray-50\" data-v-683c2f60><tr data-v-683c2f60><th scope=\"col\" class=\"py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6\" data-v-683c2f60>Event\n        </th> <th scope=\"col\" class=\"px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-683c2f60>Price\n        </th> <th scope=\"col\" class=\"hidden md:table-cell px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-683c2f60>From\n        </th> <th scope=\"col\" class=\"px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-683c2f60>To</th> <th scope=\"col\" class=\"px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500\" data-v-683c2f60>Date\n        </th></tr></thead> "), _vm._ssrNode("<tbody class=\"divide-y divide-gray-200 bg-white\" data-v-683c2f60>", "</tbody>", _vm._l(_vm.value.transactions, function (row) {
    return _vm._ssrNode("<tr data-v-683c2f60>", "</tr>", [_vm._ssrNode("<td class=\"whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(row.event_name || 'minted')) + "</td> "), _vm._ssrNode("<td class=\"whitespace-nowrap py-2 px-3 text-sm text-gray-500\" data-v-683c2f60>", "</td>", [_vm._ssrNode("<div class=\"flex space-x-1 items-center\" data-v-683c2f60>", "</div>", [_c('icon', {
      attrs: {
        "name": "eth"
      }
    }), _vm._ssrNode(" <span data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.displayPrice(row.price))) + "</span>")], 2)]), _vm._ssrNode(" <td class=\"hidden md:table-cell whitespace-nowrap py-2 px-3 text-sm text-gray-500\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.normalizeAdd(row.fr))) + "</td> <td class=\"whitespace-nowrap py-2 px-3 text-sm text-gray-500\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(_vm.normalizeAdd(row.to))) + "</td> <td class=\"whitespace-nowrap py-2 px-3 text-gray-500 text-xs\" data-v-683c2f60><div class=\"font-bold\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(new Date(row.timestamp).toLocaleDateString())) + "</div> <div class=\"text-gray-500\" data-v-683c2f60>" + _vm._ssrEscape(_vm._s(new Date(row.timestamp).toLocaleTimeString())) + "</div></td>")], 2);
  }), 0)], 2)])], 2) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/_name.vue?vue&type=template&id=683c2f60&scoped=true&

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
      return new Date(this.value.expired_date);
    },

    formatDateMint() {
      return new Date(this.value.mint_date);
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
        "org.telegram": ""
      };
    }

  }
});
// CONCATENATED MODULE: ./pages/_name.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_namevue_type_script_lang_js_ = (_namevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/_name.vue



function _name_injectStyles (context) {
  
  
}

/* normalize component */

var _name_component = Object(componentNormalizer["a" /* default */])(
  pages_namevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _name_injectStyles,
  "683c2f60",
  "24ab5c16"
  
)

/* harmony default export */ var _name = __webpack_exports__["default"] = (_name_component.exports);

/***/ })

};;
//# sourceMappingURL=_name.js.map