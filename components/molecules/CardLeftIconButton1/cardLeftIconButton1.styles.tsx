import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const CardLeftIconButton1Styles = css`
  .card__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    border-radius: 0;
    background: none;
    padding: 0;
    border-bottom: 1px solid ${colors.neutrals[100]};
    padding-bottom: 1rem;
  }

  .card__container:nth-last-child(1) {
    border-bottom: none;
    padding-bottom: 0;
  }

  .card__image {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    overflow: hidden;
  }

  .card__image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem;
  }

  .card__description {
    display: grid;
    gap: 0.25rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__container {
      border-radius: 2rem;
      border: 0;
      background: ${colors.neutrals.white};
      padding: 1.5rem;
      height: 100%;
    }

    .card__container:nth-last-child(1) {
      padding-bottom: 1.5rem;
    }
    .card__content {
      padding: 0;
    }
  }
`
