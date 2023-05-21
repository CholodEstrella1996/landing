import { LANDING_BASE_URL } from 'constants/api.constants'
import api from 'services/api.client'
import { LanguagesResponse } from 'services/models/languages/response.model'

export const languagesService = {
  getLanguages: () => api.get<LanguagesResponse['getLanguages']>(`${LANDING_BASE_URL}/languages`),
}
