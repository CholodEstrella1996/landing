import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const PanelCardsStyles = css`
  .carousel__content :global(.swiper-slide .card__last) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.08);
  }

  .carousel__content :global(.swiper-slide .card__last:hover) {
    background-color: ${colors.neutrals[100]};
  }
`
