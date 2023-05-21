import { Pagination } from '../responseBase.model'

export type PostsResponse = {
  getAreas: GetAreas
  getPosts: GetPosts
  getPostById: GetPostById
}

type GetAreas = Pagination & {
  content: {
    id: number
    name: string
    description: string
    visible: boolean
    productUnitId: number
    defaultPackage: boolean
    type: string
    price: number
    color: string
    colorDark: string
    colorLight: string
    icon: {
      id: number
      name: string
      url: string
      kind: string
      format: {
        extension: string
        contentType: string
      }
    }
    picture: null
    media:
      | {
          id: number
          content: {
            id: number
            name: string
            url: string
            kind: string
            format: {
              extension: string
              contentType: string
            }
          }
        }[]
      | null
  }[]
}

type GetPosts = Pagination & {
  content: {
    id: number
    title: string
    date: string
    iconUrl: string | null
    pictureUrl: string
    type: string
  }[]
}

type GetPostById = {
  id: number
  title: string
  date: string
  iconUrl: string
  pictureUrl: string
  contentUrl: string
  images: {
    id: number
    url: string
  }[]
  materials: {
    id: number
    name: string
    content: {
      id: number
      name: string
      url: string
      kind: string
      format: {
        extension: string
        contentType: string
      }
    }
  }[]
  type: string
}
