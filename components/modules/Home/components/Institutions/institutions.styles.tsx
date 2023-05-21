import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const InstitutionsStyles = css`
  .institutions {
    padding: 2rem 0;
    background-color: ${colors.neutrals.white};
  }
  .institutions__title {
    text-align: center;
  }
  .institutions__carousel {
    padding: 3rem 0 0;
  }
  .institution__slide {
    padding: 0 2rem;
  }

  .institution__image {
    object-fit: contain;
    height: 10rem;
    width: 10rem;
  }
  @media screen and (min-width: ${mediaQueries.tablet}) {
    .institutions {
      padding: 3rem 0;
    }
  }
`
