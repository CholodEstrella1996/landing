import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

export const CarouselStyles = css`
  .marquee.swiper-container {
    width: 100%;
    position: relative;
  }

  .marquee :global(.swiper) {
    max-width: 100%;
    height: 100%;
    padding: 0;
    margin: 0 auto;
  }

  .marquee :global(.swiper-wrapper) {
    margin: 0 0 3rem 0;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
  }

  .marquee :global(.swiper-slide) {
    width: 10rem;
    height: 10rem;
  }

  .marquee :global(.swiper-slide img) {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
  }
`

export const CarouselGlobalStyles = css.global`
  .swiper-container {
    display: grid;
    width: 100%;
    position: relative;
  }

  .swiper {
    width: 100%;
    height: fit-content;
    padding: 0;
    margin: 0 auto;
  }

  .swiper-wrapper {
    margin: 0 0 4rem 0;
  }

  .swiper-container:hover > .swiper-button-prev,
  .swiper-container:hover > .swiper-button-next {
    transition: opacity 0.2s;
    opacity: 1;
  }

  .swiper-slide {
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    transition: opacity 0.2s;
    opacity: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: ${theme.colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    top: calc(50% - 2rem);
    z-index: 1;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 0.75rem;
    font-weight: bold;
    color: black;
  }

  .swiper-button-next {
    right: var(--navPosition);
  }
  .swiper-button-prev {
    left: var(--navPosition);
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background-color: ${theme.colors.neutrals[100]};
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: var(--img-fit);
    border-radius: 1rem;
  }
`
