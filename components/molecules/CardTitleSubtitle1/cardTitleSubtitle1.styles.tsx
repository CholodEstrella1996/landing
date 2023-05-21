import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const CardTitleSubtitle1Styles = css`
  .card {
    display: grid;
    gap: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.neutrals[100]};
    align-content: flex-start;
  }

  .card:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card:last-child {
      border-bottom: 1px solid ${colors.neutrals[100]};
    }
  }
`
