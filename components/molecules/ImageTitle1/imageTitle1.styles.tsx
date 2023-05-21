import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme

export const ImageTitle1Styles = css`
  .imageTitle__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .imageTitle__image {
    width: 100%;
    min-height: 10rem;
  }

  .imageTitle__image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .imageTitle__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .imageTitle__content :global(.imageTitle__title) {
    text-align: center;
  }

  .imageTitle__content__child {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .imageTitle__container {
      flex-direction: var(--flex-direction);
    }

    .imageTitle__image {
      min-height: 22rem;
    }

    .imageTitle__content {
      align-items: var(--align-items);
    }

    .imageTitle__content :global(.imageTitle__title) {
      text-align: var(--text-align);
    }

    .imageTitle__content__child {
      align-items: var(--align-items);
      text-align: var(--text-align);
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .imageTitle__image {
      min-height: 32rem;
    }
  }
`
