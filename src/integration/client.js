import axios from 'axios'
import * as config from '../config'
import * as interceptors from './interceptors'

const client = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout
})

client.defaults.headers.common = {
  ...client.defaults.headers.common,
  'Content-Type': config.api.headers.contentType
}

client.interceptors.request.use(interceptors.request)

client.interceptors.response.use(
  interceptors.responseSuccess,
  (err) => Promise.reject(interceptors.responseError(err))
)

export default client
