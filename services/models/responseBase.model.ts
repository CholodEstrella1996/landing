export type Pagination = {
  pageable:
    | {
        sort: {
          sorted: boolean
          unsorted: boolean
          empty: boolean
        }
        offset: number
        pageSize?: number
        pageNumber: number
        unpaged: boolean
        paged: boolean
      }
    | string
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }
  first: boolean
  numberOfElements: number
  empty: boolean
}

export type Media = {
  id: number
  content: GeneralFile[] | GeneralFile
}

export type GeneralFile = {
  id: number
  name: string
  url: string
  kind: string
  format: {
    extension: string
    contentType: string
  }
}

export type ProductSalesStatus =
  | 'user-not-logged'
  | 'available'
  | 'unavailable'
  | 'purchased'
  | 'in-cart'
