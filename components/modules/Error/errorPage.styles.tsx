import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme
export const ErrorStyles = css`
  .spacing {
    margin: 1rem 0;
  }

  .error__container :global(.imageTitle__container) {
    padding: 1.5rem;
    text-align: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .error__container :global(.imageTitle__container) {
      padding: 0 1.5rem;
      text-align: start;
    }

    .error__container
      :global(.imageTitle__container .imageTitle__content .imageTitle__content__child) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .error__container {
      margin: 3rem 5rem;
    }
  }
`
