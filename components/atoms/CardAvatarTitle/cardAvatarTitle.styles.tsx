import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors, mediaQueries } = theme

export const CardAvatarTitleLocalStyles = css`
  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  .card:hover {
    background-color: ${colors.neutrals[100]};
  }

  .cover__image {
    width: 100%;
    height: fit-content;
    overflow: hidden;
  }
  .cover__image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .card__content {
    width: 100%;
    min-height: 6rem;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .card__info {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .card__info__avatar {
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 100%;
    background-color: var(--avatar-bg-color);
  }
  .card__info__title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .info__title {
    color: var(--title-color);
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: var(--font-family);
    font-weight: var(--semibold-weight);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
  }

  .info__subtitle {
    color: ${colors.neutrals[300]};
    font-size: 0.75rem;
    line-height: 1rem;
    font-family: var(--font-family);
    font-weight: var(--regular-weight);
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card__price {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    flex-shrink: 0;
    background-color: ${colors.neutrals[50]};
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .cover__image {
      height: 11rem;
    }
    .card__content {
      flex-direction: row;
    }
    .card__price {
      width: auto;
    }
  }
`
