import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const CardLeftImageTitle1Styles = css`
  .card__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: var(--fullscreen-border-radius);
    background-color: ${colors.neutrals.white};
    overflow: hidden;
    gap: 0;
    padding-left: 0;
  }

  .image__container {
    width: var(--fullscreen-width-mobile);
    height: var(--fullscreen-height);
    flex-shrink: 0;
    align-items: center;
    overflow: hidden;
    margin: var(--fullscreen-margin-mobile);
    position: relative;
  }

  .image__container :global(img) {
    width: 100%;
    height: 100%;
    object-fit: var(--fullscreen-fit);
    object-position: center;
  }

  .card__title {
    padding: 1rem 1.5rem;
    text-align: center;
  }
  .card__title :global(p) {
    display: -webkit-box;
    -webkit-line-clamp: inherit;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__container {
      flex-direction: row;
      box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.08);
      border-radius: 1.5rem;
      padding-left: 1rem;
    }

    .image__container {
      width: var(--fullscreen-width-desktop);
      margin: var(--fullscreen-margin-desktop);
    }

    .card__title {
      padding: 1rem;
      text-align: start;
    }
    .card__title :global(p) {
      -webkit-line-clamp: 3;
    }
  }
`
