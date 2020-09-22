import ApiVehicles from '@/services/ApiVehicles'

const state = {
  vehicles_state: {
    list: []
  }
}

const getters = {
  getNameVehiclesById: (state) => (id) => {
    const result = state.vehicles_state.list.find(item => item.id === id) !== undefined
      ? state.vehicles_state.list.find(item => item.id === id).name
      : ''
    return result
  },

  getVehiclesByName: (state) => (slug) => {
    const result = state.vehicles_state.list.find(item => item.name === slug)
    return result
  }
}

const mutations = {
  GET_LIST (state, payload) {
    state.vehicles_state.list = payload.data
  }
}

const actions = {
  async list ({ commit, dispatch }, req) {
    try {
      let search = ''
      if (req !== undefined) {
        search += '/' + req
      }
      const res = await ApiVehicles.list(search)
      commit('GET_LIST', res)
      commit('StoreFilm/MERGE_FROM_VEHICLES', res, { root: true })
    } catch (error) {
      return error
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
