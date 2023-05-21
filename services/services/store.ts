import { STORE_GUIDE_SERVICE, STORE_CUSTOMER_SERVICE } from 'constants/api.constants'
import api from 'services/api.client'
import { PostsResponse } from 'services/models/posts/response.model'
import { EditorialsCurriculum } from 'services/models/store'

export type StoreParams = {
  pageNumber: 0
  pageSize: 8
}

const storeService = {
  getEditorialCurriculum: (kind: string, pageNumber = 0, pageSize = 8) =>
    api.get<EditorialsCurriculum>(`${STORE_GUIDE_SERVICE}/groups`, {
      params: { pageNumber, pageSize, kind },
    }),

  getPackages: (pageNumber = 0, pageSize = 8) =>
    api.get<PostsResponse['getAreas']>(
      `${STORE_CUSTOMER_SERVICE}/packages/visible-custom/packages`,
      {
        params: { pageNumber, pageSize },
      },
    ),
}

export default storeService
