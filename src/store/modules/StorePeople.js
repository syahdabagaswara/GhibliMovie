import ApiPeople from '@/services/ApiPeople'

const state = {
  people_state: {
    list: []
  }
}

const getters = {
  getNamePeopleById: (state) => (id) => {
    const result = state.people_state.list.find(item => item.id === id) !== undefined
      ? state.people_state.list.find(item => item.id === id).name
      : ''
    return result
  },

  getPeopleById: (state) => (slug) => {
    const result = state.people_state.list.find(item => item.name === slug)
    return result
  }
}

const mutations = {
  GET_LIST (state, payload) {
    state.people_state.list = payload.data
  }

  // MERGE_FROM_LOCATION (state, payload) {
  //   payload.data.map((item) => {
  //     const url = item.url[0]
  //     item.residents.map((residents) => {
  //       const index = state.people_state.list.findIndex(result => result.id === residents.split('/')[4])
  //       if (index !== -1) {
  //         if (state.people_state.list[index].locations === undefined) {
  //           state.people_state.list[index].locations = []
  //         }
  //         // update data & check duplicate with old item
  //         const found = state.people_state.list[index].locations.some(el => el === url)
  //         if (!found) state.people_state.list[index].locations.push(url)
  //         // check duplicate new item
  //         state.people_state.list[index].locations.map((element) => {
  //           return element
  //         }).filter((v, i, currentStatus) => (
  //           currentStatus.indexOf(v) === i
  //         ))
  //       }
  //     })
  //   })
  // }
}

const actions = {
  async list ({ commit, dispatch }, req) {
    try {
      let search = ''
      if (req !== undefined) {
        search += '/' + req
      }
      const res = await ApiPeople.list(search)
      await commit('GET_LIST', res)
      await commit('StoreFilm/MERGE_FROM_PEOPLE', res, { root: true })
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
