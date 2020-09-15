import axios from 'axios'

export default {
  generateApi () {
    const api = axios.create({
      baseURL: 'https://ghibliapi.herokuapp.com'
    })

    return api
  }
}
