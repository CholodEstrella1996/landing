import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const EducationLevelsStyles = css`
  .education-levels__container {
    padding: 0 1.5rem 3rem;
    gap: 2rem;
    display: grid;
    align-content: center;
    justify-content: center;
  }
  .education-levels__container > :global(span) {
    text-align: center;
  }
  .education-levels {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .education-levels__title {
    max-width: 100%;
    text-align: center;
  }

  .education-levels__link {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0;
    background: transparent;
    color: ${colors.primary[500]};
    text-decoration: underline;
    font-size: 0.75rem;
  }
  .education-levels__link:hover {
    color: ${colors.primary[700]};
    background: transparent;
    cursor: pointer;
  }
  .education-levels__link:disabled {
    color: ${colors.neutrals[200]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .education-levels__container {
      padding: 5rem 1rem 10rem;
    }
    .education-levels {
      width: 100%;
      gap: 2rem;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .education-levels {
      width: 72.5rem;
    }
  }
`
