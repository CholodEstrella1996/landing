import { ReactNode } from 'react'

export type PaginationProps = {
  totalPages: number
  activePage: number
  countPerPage: number
  label: string | ReactNode
  pageChange?: (newPage: number) => void
  rowsPaginationChange?: (rowsPerPage: number) => void
}
