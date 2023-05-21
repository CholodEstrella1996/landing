import { Pagination } from './responseBase.model'

export type EditorialsCurriculum = Pagination & {
  content: {
    id: number
    name: string
    description: string | null
    visible: boolean
    iconUrl: string
  }[]
}
