import { LANDING_BASE_URL } from 'constants/api.constants'
import api from 'services/api.client'
import { DownloadsResponse } from 'services/models/downloads/response.model'

export const downloadsService = {
  getPlatforms: () =>
    api.get<DownloadsResponse['getPlatforms']>(`${LANDING_BASE_URL}/platform-downloadables`),
}
