import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme

export const CardColumnImage1Styles = css`
  .card__content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    max-width: 100%;
    height: auto;
  }

  .card__image {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    position: relative;
    text-align: center;
  }

  .card__image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .card__text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 100%;
    text-align: left;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__content {
      flex-direction: column;
    }

    .card__image {
      width: 100%;
      height: 10rem;
    }

    .card__text {
      text-align: center;
      gap: 0.5rem;
    }
  }
`
