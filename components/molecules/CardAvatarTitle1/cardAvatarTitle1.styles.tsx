import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const CardAvatarTitle1Styles = css`
  .card__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    padding: 1.5rem;
    border-radius: 0;
    box-shadow: none;
    background: none;
    border-bottom: 1px solid ${colors.neutrals[100]};
  }
  .card__container:last-child {
    border-bottom: none;
  }
  .card__title {
    width: 100%;
  }
  .card__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .card__text,
  .card__title {
    text-align: center;
  }
  .card__subtext {
    letter-spacing: 0.02rem;
    margin-top: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__container {
      flex-direction: row;
      background-color: ${colors.neutrals.white};
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
      border-radius: 2rem;
      border-bottom: none;
    }

    .card__text,
    .card__title {
      text-align: left;
    }
  }
`
