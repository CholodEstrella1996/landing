import { Pagination } from '../responseBase.model'

export type LanguagesResponse = {
  getLanguages: GetLanguages
}

type GetLanguages = Pagination & {
  content: {
    id: number
    name: string
    languageCode: string
    defaultLanguage: boolean
  }[]
}
