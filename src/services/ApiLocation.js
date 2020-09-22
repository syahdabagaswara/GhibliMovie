import Api from './Api'

export default {
  list (req) {
    const api = Api.generateApi()
    return api.get('/locations' + req)
      .then(res => res)
  }
}
