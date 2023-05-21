import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const BlogNewsStyles = css`
  .container_fluid {
    max-width: 100vw;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 100vw;
    display: grid;
    margin: 0 auto;
    padding: 0;
    gap: 2rem;
  }
  .pathName {
    padding: 1rem;
    text-align: center;
  }

  .headerImage {
    border-radius: 0;
    overflow: hidden;
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    justify-content: center;
    margin: 1.5rem;
    gap: 2rem;
    width: auto;
  }

  .circular__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .card-news {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 1rem;
    overflow: hidden;
    border-bottom: 1px solid ${colors.neutrals[100]};
    padding-bottom: 2rem;
    align-content: flex-start;
  }

  .card-news__image {
    width: 100%;
    height: 15rem;
    border-radius: 1rem;
    overflow: hidden;
    position: sticky;
  }

  .card-news__image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.2s ease-in-out;
  }
  .card-news:hover :global(img) {
    transform: scale(1.1);
  }

  .card-news__content {
    display: grid;
    gap: 0rem;
    height: 100%;
  }
  .card-news:hover :global(span h6) {
    color: ${colors.neutrals[900]};
  }

  .card-news__content--capitalized {
    text-transform: capitalize;
  }

  .card-news__section {
    position: absolute;
    z-index: 1;
    left: 0rem;
    bottom: 0rem;
    background-color: ${colors.primary[500]};
    color: ${colors.neutrals[50]};
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 0 1rem 0 1rem;
    width: fit-content;
    text-transform: capitalize;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .container {
      max-width: 100vw;
      padding: 0 1.5rem;
    }
    .pathName {
      padding: 4rem 0 1rem;
      text-align: center;
    }

    .headerImage {
      border-radius: 1rem;
    }
    .content {
      margin: 2rem auto;
      width: 100%;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .container {
      max-width: 71.25rem;
    }
  }
`
