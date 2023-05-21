import { LANDING_BASE_URL } from 'constants/api.constants'
import api from 'services/api.client'
import { CookiesResponse } from 'services/models/cookies/response.model'

export const cookiesService = {
  getDetailsCookies: async () =>
    api.get<CookiesResponse['getDetailsCookies']>(`${LANDING_BASE_URL}/latest-cookies-policies`),
}
