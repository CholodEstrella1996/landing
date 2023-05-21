import { Pagination } from '../responseBase.model'

export type DownloadsResponse = {
  getPlatforms: GetPlatforms
}

type GetPlatforms = Pagination & {
  content: {
    id: number
    platformName: 'Windows' | 'Mac' | 'IOS' | 'Android'
    pictureUrl: null
    downloadable: {
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
}
