import Vue from 'vue'
import Vuex from 'vuex'

// modules
import StoreFilm from './modules/StoreFilm'
import StorePeople from './modules/StorePeople'
import StoreLocation from './modules/StoreLocation'
import StoreSpecies from './modules/StoreSpecies'
import StoreVehicles from './modules/StoreVehicles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    StoreFilm,
    StorePeople,
    StoreLocation,
    StoreSpecies,
    StoreVehicles
  }
})
