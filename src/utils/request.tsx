import axios from 'axios'

const BASE_URL = process.env.REACT_APP_HNI_DEBUG_HOST
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
})

request.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use((response: any) => {
  const res = response.data
  if (res.error) {
    console.log('request error', res.error)
    return Promise.reject(res.error)
  }
  return res
})

export default request
