export type CookiesResponse = {
  getDetailsCookies: GetDetailsCookies
}

type GetDetailsCookies = {
  id: number
  version: string
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
}
