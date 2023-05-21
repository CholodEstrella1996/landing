import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const DownloadStyles = css`
  .download__container {
    max-width: 100vw;
    height: auto;
    margin: 0 auto;
  }

  .download__content {
    margin: 0 1.5rem 3.5rem;
  }

  .download__card {
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  }

  .download__content :global(.imageTitle__container) {
    padding: 1.5rem;
    text-align: center;
  }
  .download__content :global(.imageTitle__container .imageTitle__image) {
    display: block;
  }

  .download__card__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .download__card__content :global(.platform__container) {
    width: 100%;

    padding: 1rem 0 2rem;
  }

  .download__card__content :global(.platform__container:nth-last-child(1)) {
    border-bottom: none;
  }

  .download__card :global(.card__title) {
    text-align: center;
  }

  .download__content :global(.card__subtitle) {
    text-align: center;
    margin-top: 1rem;
  }

  .card__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }
  .card__link div p > a {
    word-break: break-all;
    white-space: normal;
  }
  .circular__loading {
    padding-top: 7rem;
  }

  .returnButton {
    color: ${colors.neutrals.white};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .download__content :global(.imageTitle__container) {
      padding: 0 1.5rem;
      text-align: start;
    }
    .download__card__content {
      flex-direction: row;
      justify-content: space-around;
    }

    .download__card__content :global(.platform__container) {
      border-bottom: none;
    }

    .card__link {
      align-items: flex-start;
    }
  }
  @media screen and (min-width: ${mediaQueries.desktop}) {
    .download__container {
      width: 71.25rem;
      text-align: center;
    }
  }
`
