import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const HomeStyles = css`
  .home__content {
    background-color: ${colors.neutrals.white};
    padding: 1.5rem 0 0;
    border-radius: 2rem 2rem 0 0;
    box-shadow: 0 -1rem 1rem rgba(0, 0, 0, 0.08);
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .home__content {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      box-shadow: none;
      background: none;
    }
  }
`
