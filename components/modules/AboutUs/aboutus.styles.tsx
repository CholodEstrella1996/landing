import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const AboutUsStyles = css`
  .main {
    display: flex;
    flex-direction: column;
    gap: 0;
    background-color: ${colors.neutrals[50]};
  }
  .container_fluid {
    max-width: 100vw;
    height: auto;
    margin: 0;
    padding: 0;
  }

  .grid__container {
    display: grid;
    gap: 2rem;
    padding: 1rem;
  }

  .two_cols,
  .three_cols {
    grid-template-columns: repeat(1, 1fr);
  }
  .three_cols > div {
    border-radius: 0;
    padding: 1rem 0;
    border-bottom: 1px solid ${colors.neutrals[100]};
  }
  .three_cols > div:nth-last-child(1) {
    border-bottom: none;
  }

  .highligth {
    margin: 0 1rem 1rem;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }

  .bg-white {
    background: none;
  }

  .virtual-stem :global(.imageTitle__container),
  .achievements :global(.imageTitle__container),
  .history :global(.imageTitle__container) {
    padding: 1.5rem;
    text-align: center;
  }

  .historyCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-bottom: 1rem;
    margin: 0;
    border-bottom: 1px solid ${colors.neutrals[100]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .main {
      gap: 4rem;
    }

    .aboutUs__hero,
    .virtual-stem,
    .achievements {
      padding: 4rem 1rem;
    }

    .virtual-stem :global(.imageTitle__container),
    .achievements :global(.imageTitle__container),
    .history :global(.imageTitle__container) {
      padding: 0 1.5rem;
      text-align: start;
    }

    .virtual-stem :global(.isReverse) {
      text-align: end;
    }

    .bg-white {
      background-color: ${colors.neutrals.white};
      padding: 3rem 0;
    }

    .highligth {
      margin: 0;
      background: none;
      box-shadow: none;
    }

    .grid__container {
      box-shadow: none;
    }
    .two_cols,
    .three_cols {
      grid-template-columns: repeat(2, 1fr);
    }
    .three_cols > div {
      border: none;
      padding: 0 1rem;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .three_cols {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
