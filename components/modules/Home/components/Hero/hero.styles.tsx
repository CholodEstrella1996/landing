import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme

export const HeroStyles = css`
  .hero {
    padding: 0 0 4rem;
  }

  .hero :global(.imageTitle__container) {
    padding: 1.5rem;
    text-align: center;
  }

  .hero :global(.imageTitle__container .imageTitle__image) {
    display: block;
  }
  .hero :global(.imageTitle__container .imageTitle__content .imageTitle__content__child) {
    justify-content: center;
  }

  .hero :global(.button__demo),
  .hero :global(.button__demo button),
  .hero :global(.button__portfolio),
  .hero :global(.button__portfolio button) {
    width: 100%;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .hero :global(.imageTitle__container) {
      text-align: start;
    }
    .hero :global(.imageTitle__container .imageTitle__content .imageTitle__content__child) {
      align-items: flex-start;
    }

    .hero :global(.button__demo),
    .hero :global(.button__demo button),
    .hero :global(.button__portfolio),
    .hero :global(.button__portfolio button) {
      width: fit-content;
    }
  }
`
