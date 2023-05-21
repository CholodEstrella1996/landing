import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const RequestDemoStyles = css`
  .request-demo {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0;
  }

  .request-demo__content,
  .request-demo__items,
  .demo__items--row,
  .demo__card,
  .card__content,
  ul.card__content__items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .demo__card {
    justify-content: space-between;
  }
  .request-demo__content :global(.imageTitle__container) {
    padding: 1.5rem;
    text-align: center;
  }

  .button__demo,
  .button__demo button,
  .button__demo button div .lib_Typography-isColor {
    color: ${colors.neutrals.white};
    width: 100%;
  }

  .request-demo__items {
    padding: 2rem;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem 2rem 0 0;
    box-shadow: 0 -1rem 1rem rgba(0, 0, 0, 0.08);
  }

  .demo__card {
    width: 100%;
    background-color: none;
    border-radius: none;
    box-shadow: none;
    border-bottom: 1px solid ${colors.neutrals[100]};
    padding-bottom: 2rem;
  }

  .request-demo__card:nth-last-child(1) {
    border-bottom: none;
  }

  .card__header,
  ul.card__content__items li {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }
  .card__header__image {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
  }

  ul.card__content__items {
    list-style: none;
  }

  .item__icon {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .space-adjuster {
    flex: 1;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .request-demo {
      margin: 0 auto 6rem;
      padding: 0 1rem;
    }

    .request-demo__content :global(.imageTitle__container) {
      text-align: start;
    }

    .button__demo,
    .button__demo button {
      color: ${colors.neutrals.white};
      width: fit-content;
    }

    .request-demo__items {
      gap: 2rem;
      padding: 0;
      background-color: inherit;
      border-radius: inherit;
      box-shadow: none;
    }

    .demo__items--row {
      flex-direction: row;
    }

    .demo__card {
      background-color: ${colors.neutrals.white};
      padding: 2rem;
      border-radius: 2rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
      border-bottom: none;
    }

    .card__header__image {
      width: 8rem;
      height: 8rem;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .request-demo {
      max-width: 71.25rem;
    }
  }
`
