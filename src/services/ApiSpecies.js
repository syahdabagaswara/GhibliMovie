import Api from './Api'

export default {
  list (req) {
    const api = Api.generateApi()
    return api.get('/species' + req)
      .then(res => res)
  }
}
