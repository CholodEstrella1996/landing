import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const EducationLevelStyles = css`
  .levels__container {
    max-width: 100vw;
    height: auto;
    margin: 0 auto;
    padding: 0;
  }

  .levels__content {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 1rem 0 5rem;
    background-color: ${colors.neutrals.white};
    margin: 3rem 0 0;
    border-radius: 2rem 2rem 0 0;
    box-shadow: 0 -1rem 1rem rgba(0, 0, 0, 0.08);
  }

  .levels__cards {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .levels__cards :global(.levels__card__item) {
    width: 100%;
    padding: 1rem 1.5rem 2rem;
    background: none;
    border-bottom: 1px solid ${colors.neutrals[100]};
    box-shadow: none;
  }
  .levels__cards :global(.levels__card__item .card__content) {
    gap: 1rem;
  }

  .levels__container :global(.imageTitle__container) {
    padding: 0 1.5rem;
    text-align: center;
  }

  .explore {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 1rem;
  }

  .explore__card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
    min-height: fit-content;
    text-align: center;
  }

  .explore__image {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .levels__container {
      max-width: 100vw;
    }

    .levels__content {
      padding: 0;
      margin: 3rem auto;
      border-radius: none;
      box-shadow: none;
      background: none;
    }

    .levels__cards {
      flex-direction: row;
    }

    .levels__cards :global(.levels__card__item) {
      padding: 0 1.5rem 1rem;
      border-radius: 2rem;
      background-color: ${colors.neutrals.white};
      border-bottom: none;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
      font-size: 1rem;
    }

    .levels__container :global(.imageTitle__container) {
      padding: 0 2rem;
      text-align: start;
    }

    .explore {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      gap: 2rem;
      text-align: left;
      padding: 0;
    }
    .explore__image {
      width: 100%;
    }
    .explore__card {
      justify-content: space-between;
      min-height: 10rem;
      text-align: left;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .levels__container {
      max-width: 71.25rem;
    }

    .levels__cards :global(.levels__card__item) {
      padding: 1rem 1.5rem;
    }
  }
`
