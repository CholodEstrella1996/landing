import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme

export const SupportStyles = css`
  .support__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 4rem 1.5rem;
  }
  .support__cards {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .support__cards__item {
    width: 100%;
  }
  .drop__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .drop__position {
    width: 100%;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .support__cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .drop__position {
      width: 100%;
    }
    .drop__container {
      gap: 2rem;
    }
  }
`
