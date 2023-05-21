import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const LearningEnvironmentsStyles = css`
  .learning-environments {
    width: 100%;
    padding: 0 1rem 3rem 1rem;
    background-color: ${colors.neutrals.white};
  }
  .learning-environments__content {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .learning-environments :global(.learning-environments__title) {
    max-width: 100%;
    text-align: center;
    padding: 4rem 0;
  }

  .learning-environments__info-items {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 1rem;
  }
  .learning-environments__info-items :global(.learning-environments__card) {
    display: flex;
    border-bottom: 1px solid ${colors.neutrals[100]};
    padding-bottom: 2rem;
  }
  .learning-environments__info-items :global(.learning-environments__card:nth-last-child(1)) {
    border-bottom: none;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .learning-environments__content {
      padding: 5rem 2rem;
      margin-bottom: 5rem;
    }

    .learning-environments__info-items {
      flex-direction: row;
      gap: 2rem;
    }
    .learning-environments__info-items :global(.learning-environments__card) {
      width: 100%;
      border-bottom: none;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .learning-environments__content {
      width: 71.25rem;
      padding: 5rem 0;
    }
  }
`
