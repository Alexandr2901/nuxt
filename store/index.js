const state = () => ({
  // token: null,
  filters: null,
  news: null,
})

const getters = {
  // hasToken: state => !!state.token
  filters: (s) => s.filters,
}
const mutations = {
  setFilters(state, data) {
    state.filters = data
    // console.log(state.filters);
  },
  // setToken(state, token) {
  //     state.token = token
  // },
  // clearToken(state) {
  //     state.token = null
  // }
}

const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch('getNewsFilters')
  },
  async getNewsFilters({ commit }) {
    const data = await this.$axios.$get('news/filters')
    commit('setFilters', data)
    // console.log(data);
  },
  // async fetch({ commit }) {
  //     const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
  //     commit('setUsers', users)
  // },

  // login({ commit }) {
  //     commit('setToken', 'truetoken')
  // },
  // logout({ commit }) {
  //     commit('clearToken')
  // },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
