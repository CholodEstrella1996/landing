import axios, { AxiosRequestConfig } from 'axios'
import { setupCache } from 'axios-cache-interceptor'

import { defaultLanguage } from 'utils/helpers/handleLanguage'

const config: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': `${defaultLanguage()}`,
    'Content-Type': 'application/json',
  },
}

const api = axios.create(config)

// Disable cache for all requests. Comment the next line to enable cache.
// disableCacheInterceptor(api)

export default api
