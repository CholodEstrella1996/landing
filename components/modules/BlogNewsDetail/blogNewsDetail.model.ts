import { PostsResponse } from 'services/models/posts/response.model'

export type BlogNewsDetailProps = {
  detail: PostsResponse['getPostById']
  section?: string
  isLoading: boolean
}
