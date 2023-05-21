import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const AdvantagesStyles = css`
  .advantages {
    padding: 0.5rem 1.5rem 0;
    margin: 0 0 3rem 0;
  }

  .advantages :global(.swiper-container) {
    display: block;
  }
  .advantages :global(.swiper) {
    border-radius: 0;
    display: block;
    filter: none;
  }
  .advantages :global(.swiper-slide) {
    padding: 0;
    background-color: ${colors.neutrals.white};
    border-radius: 0;
  }

  .advantages :global(.swiper-slide img) {
    border-radius: 0;
  }

  .advantage__slide.splide__slide > div {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-position: center;
  }

  .advantage__image {
    object-position: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .advantages {
      margin: 0;
      padding: 0;
    }
    .advantage__slide {
      padding: 0;
    }
  }
`
