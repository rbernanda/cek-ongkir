import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../API/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    provinces: [],
    cities: [],
    fromSearch: '',
    toSearch: '',
    services: [],
    errorMessages: []
  },
  mutations: {
    setProvinces(state, payload) {
      state.provinces = payload
    },
    setCities(state, payload) {
      state.cities = payload
    },
    setServices(state, payload) {
      state.services = payload
    },
    setErrors(state, payload) {
      state.errorMessages = payload
    }
  },
  actions: {
    async fetchProvinces(context, payload) {
      try {
        const { data } = await axios.get('/province')
        context.commit('setProvinces', data.rajaongkir.results)
      } catch (error) {
        context.commit('setErrors', error)
      }
    },

    async fetchCities(context, payload) {
      try {
        const { data } = await axios.get('/city')
        context.commit('setCities', data.rajaongkir.results)
      } catch (error) {
        context.commit('setErrors', error)
      }
    },

    postCost(context, payload) {
      const getJNE = () => {
        return axios({
          method: 'POST',
          url: '/cost',
          data: { ...payload, courier: 'jne' },
        })
      }

      const getPOS = () => {
        return axios({
          method: 'POST',
          url: '/cost',
          data: { ...payload, courier: 'pos' },
        })
      }

      const getTIKI = () => {
        return axios({
          method: 'POST',
          url: '/cost',
          data: { ...payload, courier: 'tiki' },
        })
      }

      const output = []
      Promise.all([getJNE(), getPOS(), getTIKI()])
        .then((result) => {
          for (const res of result) {
            output.push(...res.data.rajaongkir.results)
          }
          context.commit('setServices', output)
        })
        .catch((error) => context.commit('setErrors', error))
    },
  },
  modules: {},
})
