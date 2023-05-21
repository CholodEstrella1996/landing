import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors } = theme
export const CardImageTitleStyles = css`
  .card {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.08);
    padding: 1rem;
    width: 100%;
    height: 100%;
  }
  .card:hover {
    background-color: ${colors.neutrals[100]};
  }

  .card__inner {
    width: 100%;
  }
  .card__inner__no-title {
    height: fit-content;
    overflow: hidden;
  }
  .card__inner__with-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .card__inner__image__no-title {
    width: 100%;
    max-height: var(--maxHeight);
    overflow: hidden;
    mix-blend-mode: multiply;
  }
  .card__inner__image__with-title {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    overflow: hidden;
    flex-shrink: 0;
    background-color: ${colors.neutrals[50]};
  }

  .card__inner__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: center;
  }
`
