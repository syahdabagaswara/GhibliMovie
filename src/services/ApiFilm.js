import Api from './Api'

export default {
  listFilm (req) {
    const api = Api.generateApi()
    return api.get('/films' + req)
      .then(res => res)
  },

  detail (req) {
    const api = Api.generateApi()
    return api.get('/films/' + req)
      .then(res => res)
  }
}
