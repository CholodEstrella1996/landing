import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const HeaderMobileStyles = css`
  .navbar__container__mobile {
    max-width: 100%;
    position: sticky;
    top: 0;
    padding: 0.25rem;
    z-index: 3;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }

  .navbar__opened {
    position: relative;
    height: 100vh;
    max-width: 100%;
    z-index: 2;
    background-color: ${colors.neutrals.white};
  }

  .navbar__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.75rem;
  }

  .navbar__brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 0.5rem;
  }

  .navbar__icon {
    margin-left: 0.2rem;
    width: 5rem;
    height: 2.5rem;
  }

  .navbar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .navbar__pages__item {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1.5rem;
    color: ${colors.neutrals[300]};
  }
  .navbar__pages__item:hover {
    color: ${colors.primary[500]};
    background-color: rgba(190, 235, 255, 0.12);
    border-radius: 0.25rem;
  }

  .navbar__pages__wrapper {
    display: grid;
    gap: 1rem;
    margin: auto;
    padding: 1rem;
    list-style: none;
    cursor: pointer;
  }

  .navbar__content__right {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .navbar__item__button {
    margin-top: 1rem;
  }
`
