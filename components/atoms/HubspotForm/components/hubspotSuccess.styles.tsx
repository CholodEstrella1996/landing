import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const HubspotSuccessStyles = css`
  .success__container {
    padding: 1.5rem 1rem 1rem 1rem;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    max-width: 36rem;
    margin: auto 1rem;
  }

  .success__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .success__content p {
    color: ${colors.neutrals.white};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .success__container {
      margin: auto;
    }
  }
`
