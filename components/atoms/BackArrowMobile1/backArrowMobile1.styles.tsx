import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors } = theme
export const BackArrowMobile1Styles = css`
  .backArrow__container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .backArrow__button {
    border: none;
    background-color: transparent;
    color: ${colors.primary[500]};
  }
`
