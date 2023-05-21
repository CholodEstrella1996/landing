import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const PaginationStyles = css`
  :global(.pagination__container) {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    color: ${colors.neutrals[400]};
  }

  :global(p.MuiTablePagination-selectLabel) {
    font-family: var(--font-family);
  }

  :global(.MuiTablePagination-toolbar) {
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
`
