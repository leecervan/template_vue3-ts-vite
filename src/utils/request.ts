import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (error) => {
    console.log(error)
    return error
  },
)

service.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    console.log(error)
    return error
  },
)

export default service
