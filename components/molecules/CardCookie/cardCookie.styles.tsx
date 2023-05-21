import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const CardCookieLocalStyles = css`
  .cookies {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 1rem;
  }

  .cookies__overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .cookies__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    min-height: 12rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
    border-radius: 2rem;
    gap: 2rem;
    padding: 2rem;
    z-index: 3;
  }

  .cookies__brand {
    width: 5rem;
    height: auto;
    flex-shrink: 0;
  }

  .cookies__content a {
    cursor: pointer;
    text-decoration: underline;
  }
  .cookies__content a:hover {
    color: ${colors.primary[500]};
  }

  .cookies__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  .cookies__buttons :global(.button__decline),
  .cookies__buttons :global(.button__decline button),
  .cookies__buttons :global(.button__accept),
  .cookies__buttons :global(.button__accept button) {
    width: 100%;
  }
  .cookies__buttons :global(.button__decline) {
    order: 2;
  }
  .cookies__buttons :global(.button__accept) {
    order: 1;
  }

  .button__link {
    all: unset;
    color: ${colors.neutrals[700]};
    text-decoration: underline;
    cursor: pointer;
  }

  .button__link:hover {
    color: ${colors.primary[500]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .cookies {
      padding: 2rem;
    }
    .cookies__container {
      flex-direction: row;
      padding: 4rem;
    }
    .cookies__buttons {
      flex-direction: row;
      width: fit-content;
    }

    .cookies__buttons :global(.button__decline),
    .cookies__buttons :global(.button__decline button),
    .cookies__buttons :global(.button__accept),
    .cookies__buttons :global(.button__accept button) {
      width: fit-content;
    }

    .cookies__buttons :global(.button__decline) {
      order: 1;
    }
    .cookies__buttons :global(.button__accept) {
      order: 2;
    }
  }
`
