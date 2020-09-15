import Vue from 'vue'
import Vuex from 'vuex'

// modules
import StoreFilm from './modules/StoreFilm'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    StoreFilm
  }
})
