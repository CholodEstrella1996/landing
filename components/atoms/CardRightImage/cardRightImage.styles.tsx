import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors, mediaQueries } = theme
export const CardRightImageStyles = css`
  .cardRight__container {
    display: flex;
    padding: 2rem 1rem;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    background-color: ${colors.neutrals[50]};
  }
  .cardRight__box {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
  }
  .cardRight__box__inner {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    margin: 1.5rem 0;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
    padding: 1rem;
    filter: drop-shadow(0 0.625rem 0.5rem rgb(0 0 0 / 0.04))
      drop-shadow(0 0.25rem 3px rgb(0 0 0 / 0.1));
  }
  .cardRight__box__image {
    width: 100%;
    height: auto;
    max-height: 14rem;
    border-radius: 1rem;
    overflow: hidden;
  }
  .cardRight__box__image :global(img) {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .cardRight__container {
      flex-direction: row;
      text-align: right;
      padding: 0;
      background: none;
    }

    .cardRight__box {
      padding-right: 2rem;
    }

    .cardRight__box__inner {
      background: none;
      padding: 0;
      filter: none;
    }
  }
`
