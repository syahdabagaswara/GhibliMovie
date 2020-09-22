import Api from './Api'

export default {
  list (req) {
    const api = Api.generateApi()
    return api.get('/vehicles' + req)
      .then(res => res)
  }
}
