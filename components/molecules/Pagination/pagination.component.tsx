import React, { useState } from 'react'

import { TablePagination } from '@mui/material'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { translatePagination } from 'utils/helpers/translatePagination'

import { PaginationProps } from './pagination.model'
import { PaginationStyles } from './pagination.styles'

const { colors } = theme
export const PaginationComponent = (props: PaginationProps) => {
  const {
    totalPages = 100,
    activePage = 1,
    countPerPage = 12,
    label = 'Filas por página',
    pageChange = () => {},
    rowsPaginationChange = () => {},
  } = props
  const [page, setPage] = useState(activePage)
  const [rowsPerPage, setRowsPerPage] = useState(countPerPage)

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
    rowsPaginationChange(Number(event.target.value))
  }

  const labelPerPage = (
    <Typography variant="s2" color={colors.neutrals[400]}>
      {label}
    </Typography>
  )

  return (
    <>
      <TablePagination
        component="div"
        className="pagination__container"
        count={totalPages}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[9, 24, 48, 100]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={labelPerPage}
        labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
      />
      <style jsx>{PaginationStyles}</style>
    </>
  )
}
