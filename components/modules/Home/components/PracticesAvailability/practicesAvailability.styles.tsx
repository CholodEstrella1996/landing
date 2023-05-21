import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const PracticesAvailabilityStyles = css`
  .practices-availability {
    padding: 0rem 1rem 5rem 1rem;
    background-color: ${colors.neutrals.white};
  }
  .practices-availability__content {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .practices-availability__image {
    width: 13rem;
    height: 13rem;
    margin: 0 auto;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .practices-availability {
      padding: 5rem 1rem;
      background-color: ${colors.neutrals[50]};
    }
    .practices-availability__content {
      max-width: 71.25rem;
    }
  }
`
