import Api from './Api'

export default {
  list (req) {
    const api = Api.generateApi()
    return api.get('/people' + req)
      .then(res => res)
  }
}
