import { PostsResponse } from 'services/models/posts/response.model'

type Card = PostsResponse['getPosts']['content'][number]

type AboutUsCardsProps = {
  cards: Card[]
}

export type { AboutUsCardsProps }
