import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const BlogDetailStyles = css`
  .blog-detail__container {
    padding: 2rem 1.5rem;
    margin: 0 auto;
    max-width: 100%;
  }

  .blog-detail__header {
    display: grid;
    gap: 3rem;
  }
  .blog-detail__header__title {
    display: grid;
    gap: 1rem;
  }

  .blog-detail__header__overline {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .blog-detail__header__section {
    background-color: ${colors.primary[500]};
    color: ${colors.neutrals[50]};
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    width: fit-content;
    text-transform: capitalize;
  }

  .blog-detail__carousel {
    margin-top: 1rem;
  }

  .blog-detail__content {
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
  }

  .complementary {
    height: fit-content;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    border-radius: 1rem;
    padding: 1rem;
  }

  .blog-detail__object object {
    border: none;
    width: 100%;
    overflow: auto;
  }

  .complementary,
  .complementary__access,
  .complementary__title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .complementary__access {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .blog-detail__container {
      max-width: 100vw;
    }

    .blog-detail__content {
      grid-template-columns: var(--grid-template);
    }

    .blog-detail__carousel {
      margin-top: 3rem;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .blog-detail__container {
      width: 71.25rem;
    }
  }
`
