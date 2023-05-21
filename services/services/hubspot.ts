import { LANDING_BASE_URL } from 'constants/api.constants'
import api from 'services/api.client'
import { HubspotResponse } from 'services/models/hubspot/response.model'

export const hubspotService = {
  getForm: (pageNumber = 0, pageSize = 10, type = 'contact') =>
    api.get<HubspotResponse['getForm']>(`${LANDING_BASE_URL}/forms`, {
      params: { pageNumber, pageSize, type },
    }),
}
