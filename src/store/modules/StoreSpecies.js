import ApiSpecies from '@/services/ApiSpecies'

const state = {
  species_state: {
    list: []
  }
}

const getters = {
  getNameSpeciesById: (state) => (id) => {
    const result = state.species_state.list.find(item => item.id === id) !== undefined
      ? state.species_state.list.find(item => item.id === id).name
      : ''
    return result
  },

  getSpeciesByName: (state) => (slug) => {
    const result = state.species_state.list.find(item => item.name === slug)
    return result
  }
}

const mutations = {
  GET_LIST (state, payload) {
    state.species_state.list = payload.data
  }
}

const actions = {
  async list ({ commit, dispatch }, req) {
    try {
      let search = ''
      if (req !== undefined) {
        search += '/' + req
      }
      const res = await ApiSpecies.list(search)
      await commit('GET_LIST', res)
      await commit('StoreFilm/MERGE_FROM_SPECIES', res, { root: true })
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
