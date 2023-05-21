import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const FooterLocalStyles = css`
  .footer__container {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    justify-content: space-between;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    background-color: ${colors.neutrals.white};
    max-width: 100%;
    align-items: center;
    gap: 1.5rem;
    z-index: 4;
    position: relative;
  }

  .footer__text,
  .footer__clickable {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .footer__text {
    align-items: center;
    text-align: center;
  }

  .footer__clickable {
    flex-shrink: 0;
    align-items: flex-end;
  }

  .footer__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .footer__social {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .footer__buttons .container {
    flex-shrink: 0;
    padding: 0;
    width: fit-content;
  }

  .footer__social .footer__medias {
    display: flex;
    gap: 1rem;
    flex-direction: row;
  }

  .footer__social .footer__medias a svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .footer__buttons :global(.buttonWithIconLeft__medium) {
    padding: 0.575rem 1rem 0.575rem 0.675rem;
    height: inherit;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .footer__container {
      flex-direction: row;
      align-items: flex-start;
    }

    .footer__buttons {
      flex-direction: row;
      align-items: flex-end;
    }
    .footer__text {
      align-items: flex-start;
      text-align: left;
    }

    .footer__social {
      align-items: flex-end;
    }
  }
`
