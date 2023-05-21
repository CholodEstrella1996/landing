import { LANDING_BASE_URL, STORE_PRODUCT_SERVICE } from 'constants/api.constants'
import api from 'services/api.client'
import { PostsResponse } from 'services/models/posts/response.model'

export type GetPostsParams = {
  pageNumber?: number
  pageSize?: number
  type?: string
  tags?: string
}

export const postsService = {
  getAreas: (pageNumber = 0, pageSize = 8) =>
    api.get<PostsResponse['getAreas']>(`${STORE_PRODUCT_SERVICE}/areas`, {
      params: { pageNumber, pageSize },
    }),

  getPosts: (params: GetPostsParams) =>
    api.get<PostsResponse['getPosts']>(`${LANDING_BASE_URL}/posts`, { params }),

  getPostById: (id: number) =>
    api.get<PostsResponse['getPostById']>(`${LANDING_BASE_URL}/posts/${id}`),
}
