const state = () => ({
    // token: null,
    news: null
})

const getters = {
    // hasToken: state => !!state.token
}
const mutations = {
    // setToken(state, token) {
    //     state.token = token
    // },
    // clearToken(state) {
    //     state.token = null
    // }
}

const actions = {
    nuxtServerInit({ dispatch }) {
        // dispatch('getNews')
    },
    async getNews() {
        const data = await this.$axios.$get('news')
        console.log(data);
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
    state, getters, mutations, actions
}