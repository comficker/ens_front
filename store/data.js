export default {
  namespaced: true,
  state: () => ({
    detail: null,
    response: {
      results: [],
      count: 0,
      next: null,
      previous: null
    }
  }),
  mutations: {
    ['SET_DETAIL'](state, res) {
      if (!res) return;
      state.detail = res;
    },
    ['SET_RESPONSE'](state, res) {
      state.response = res;
    },
  },
  actions: {
    async fetchData({commit, state}, kwargs) {
      let res;
      if (kwargs.params.name) {
        const id = kwargs.params.name.split("-")[0]
        res = await this.$api.asset.get(id)
        commit('SET_DETAIL', res);
      } else {
        res = await this.$api.asset.list({
          page_size: 10,
          ...kwargs.query
        })
        commit('SET_RESPONSE', res);
      }
      const title = kwargs.params.name ? `${res.name}.eth` : "ENSHunt - Ethereum Name Service";
      const description = kwargs.params.name ?
        `${res.name}.eth registered by ${res.owner} in ${ new Date(res.expired_date).toLocaleString()} and will be expired in ${new Date(res.mint_date).toLocaleString()}`
        : "Find the best ENS domain to collect and invest";
      commit('config/SET_META', {
        title: title,
        description: description,
      }, {root: true})
    },
  },
  getters: {}
}
