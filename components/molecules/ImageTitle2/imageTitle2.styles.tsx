import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme

export const ImageTitle2LocalStyles = css`
  .image2__container {
    position: relative;
    width: 100%;
    height: 13rem;
    overflow: hidden;
  }

  .image2__image {
    width: 100%;
    height: 100%;
  }

  .image2__container :global(img) {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .image2__image::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: inherit;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.54) 17.19%, rgba(0, 0, 0, 0) 76.04%);
    transform: rotate(180deg);
  }

  .image2__title {
    position: absolute;
    bottom: 1.5rem;
    width: 100%;
    text-align: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .image2__container {
      height: fit-content;
      max-height: 18rem;
    }
  }
`
