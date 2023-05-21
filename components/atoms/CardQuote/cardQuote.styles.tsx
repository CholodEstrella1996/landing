import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { mediaQueries } = theme

export const CardQuoteStyles = css`
  .card-quote__container {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .card-quote__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .card-quote__image {
    width: 100%;
    height: 11rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
  }

  .card-quote__image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .card-quote__caption {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    padding: 1.5rem 1rem;
    gap: 1rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card-quote__container {
      flex-direction: row-reverse;
      height: 26.25rem;
    }

    .card-quote__image {
      height: 100%;
      border-radius: 0;
    }

    .card-quote__caption {
      text-align: right;
      padding: 0 12%;
    }

    .card-quote__caption :global(.card-quote__open-quote),
    .card-quote__caption :global(.card-quote__close-quote) {
      width: 1.5rem;
    }

    .card-quote__caption :global(.card-quote__open-quote) {
      align-self: flex-start;
    }

    .card-quote__caption :global(.card-quote__close-quote) {
      align-self: flex-end;
    }
  }
`
