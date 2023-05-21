import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const DefaultLayoutStyles = css`
  .defaultLayout__main {
    display: flex;
    flex-direction: column;
    background-color: ${colors.neutrals[50]};
    min-height: calc(100vh - 150px);
  }
`
