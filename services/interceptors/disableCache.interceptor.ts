import { AxiosCacheInstance } from 'axios-cache-interceptor'

export const disableCacheInterceptor = (axiosInstance: AxiosCacheInstance) => {
  axiosInstance.interceptors.request.use((request) => {
    request.cache = false

    return request
  })
}
