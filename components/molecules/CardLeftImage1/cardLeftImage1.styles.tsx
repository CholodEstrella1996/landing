import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const CardLeftImage1Styles = css`
  .card__container {
    display: flex;
    padding: 4rem 1rem;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    background-color: ${colors.neutrals[50]};
  }
  .card__box {
    width: 100%;
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
  }
  .card__box__image {
    text-align: center;
    padding: 0 2rem;
    max-height: 10rem;
  }

  .card__box__image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .stem__box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
    background: ${colors.neutrals.white};
    border-radius: 1rem;
    padding: 1.5rem;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  }
  .stem__image {
    padding: 1rem 0;
  }

  //TODO: reemplazar cuando se traiga theme a local
  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__container {
      flex-direction: row;
      text-align: left;
      padding: 0;
      background-color: none;
    }
    .card__box {
      min-height: 25rem;
    }

    .stem__box {
      background: none;
      padding: 0;
      filter: none;
    }
  }
`
