import { PostsResponse } from 'services/models/posts/response.model'

type Card = PostsResponse['getPosts']['content'][number]

type BlogNewsProps = {
  type: string
  image: string
  title: string
  cards: Card[]
  isLoading: boolean
  totalPages: number
  pageChange?: (newPage: number) => void
  rowsPaginationChange?: (rowsPerPage: number) => void
}

type CardNewsProps = {
  type: string
  pictureUrl: string
  title: string
  date: string
}

export type { Card, BlogNewsProps, CardNewsProps }
