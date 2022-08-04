exports.ids = [2];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/bulk-search.vue?vue&type=template&id=79471742&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "max-w-4xl my-4 mx-auto space-y-4 text-xl"
  }, [_vm._ssrNode("<div data-v-79471742><h1 class=\"text-4xl limit font-semibold\" data-v-79471742>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1> <p class=\"text-gray-500\" data-v-79471742>Enter a list of domains (line by line)</p></div> <textarea rows=\"3\" placeholder=\"example.eth\" class=\"border w-full p-4 outline-none\" data-v-79471742>" + _vm._ssrEscape(_vm._s(_vm.lines)) + "</textarea> "), _vm._ssrNode("<div class=\"flex justify-center\" data-v-79471742>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("btn pri xl", {
    'animate-pulse': _vm.fetching
  }) + " data-v-79471742>", "</div>", [_c('icon', {
    attrs: {
      "name": "search"
    }
  }), _vm._ssrNode(" <span data-v-79471742>Search</span>")], 2)]), _vm._ssrNode(" " + (_vm.results.length ? "<div class=\"space-y-3\" data-v-79471742><div class=\"text-xs uppercase font-bold\" data-v-79471742>Results</div> <div class=\"border\" data-v-79471742>" + _vm._ssrList(_vm.results, function (item) {
    return "<div class=\"flex items-center justify-between border-b p-2 px-4\" data-v-79471742><div class=\"font-bold\" data-v-79471742>" + _vm._ssrEscape(_vm._s(item.name) + ".eth") + "</div> <div class=\"flex space-x-2 text-xs\" data-v-79471742>" + (item.isBought ? "<a" + _vm._ssrAttr("href", `https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/${item.id}`) + " target=\"_blank\" data-v-79471742><img src=\"/opensea.svg\" alt class=\"w-4 h-4\" data-v-79471742></a>" : "<!---->") + " " + (item.isBought ? "<a" + _vm._ssrAttr("href", `https://etherscan.io/address/${item.owner}`) + " target=\"_blank\" data-v-79471742><img src=\"/etherscan.svg\" alt class=\"w-4 h-4\" data-v-79471742></a>" : "<a" + _vm._ssrAttr("href", `https://app.ens.domains/name/${item.name}/register`) + " target=\"_blank\" class=\"btn xs\" data-v-79471742><img src=\"/ens.svg\" alt class=\"w-4 h-4\" data-v-79471742> <span data-v-79471742>register</span></a>") + "</div></div>";
  }) + "</div></div>" : "<!---->"))], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/bulk-search.vue?vue&type=template&id=79471742&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bulk-search.vue?vue&type=script&lang=js&
const Web3 = __webpack_require__(10);

const web3 = new Web3("https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79");
/* harmony default export */ var bulk_searchvue_type_script_lang_js_ = ({
  name: "BulkSearchPage",

  head() {
    return {
      title: this.title
    };
  },

  data() {
    return {
      title: "Bulk ENS Search",
      lines: null,
      results: [],
      fetching: false
    };
  },

  methods: {
    async search() {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      if (!this.lines) return;
      this.fetching = true;
      const lines = this.lines.split("\n").filter(onlyUnique).map(x => {
        if (x.endsWith(".eth")) {
          x = x.substr(0, x.length - 4);
        }

        return x;
      });
      const results = await Promise.all(lines.map(x => {
        return web3.eth.ens.getOwner(x + ".eth");
      }));
      this.results = results.map((x, i) => {
        return {
          name: lines[i],
          owner: x,
          isBought: x !== '0x0000000000000000000000000000000000000000',
          id: web3.utils.BN(web3.utils.keccak256(lines[i])).toString()
        };
      });
      this.fetching = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/bulk-search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_bulk_searchvue_type_script_lang_js_ = (bulk_searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/bulk-search.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_bulk_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "79471742",
  "1a72bbef"
  
)

/* harmony default export */ var bulk_search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=bulk-search.js.map