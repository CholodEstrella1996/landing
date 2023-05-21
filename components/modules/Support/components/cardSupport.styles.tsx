import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const CardSupportStyles = css`
  .card__container {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }
  .card__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
  }
  .title__center {
    text-align: center;
  }
  .card__image {
    width: auto;
    height: 2.5rem;
  }
`
