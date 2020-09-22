import ApiLocation from '@/services/ApiLocation'

const state = {
  location_state: {
    list: []
  }
}

const getters = {
  getNameLocationById: (state) => (id) => {
    const result = state.location_state.list.find(item => item.id === id) !== undefined
      ? state.location_state.list.find(item => item.id === id).name
      : ''
    return result
  },

  getLocationByName: (state) => (slug) => {
    const result = state.location_state.list.find(item => item.name === slug)
    return result
  }
}

const mutations = {
  GET_LIST (state, payload) {
    state.location_state.list = payload.data
  }
}

const actions = {
  async list ({ commit, dispatch }, req) {
    try {
      let search = ''
      if (req !== undefined) {
        search += '/' + req
      }
      const res = await ApiLocation.list(search)
      await commit('GET_LIST', res)
      await commit('StoreFilm/MERGE_FROM_LOCATION', res, { root: true })
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
