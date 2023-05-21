import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const HeaderDesktopStyles = css`
  .navbar {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5.5rem;
    padding: 1.5rem;
    z-index: 3;
    gap: 1rem;
    background: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }
  .navbar__content {
    flex-direction: row;
    gap: 4rem;
    flex: 1;
  }
  .navbar__icon {
    width: 5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  .navbar__icon :global(img) {
    cursor: pointer;
  }

  ul.navbar__pages {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    flex: 1;
  }

  .navbar__content,
  .navbar__pages__wrapper {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .navbar__pages__item {
    display: flex;
    align-items: center;
    color: ${colors.neutrals[400]};
    margin-right: 1.5rem;
    cursor: pointer;
    position: relative;
  }

  .navbar__pages__item :global(p) {
    white-space: nowrap;
  }

  .navbar__pages__wrapper .navbar__pages__item :global(.item__title:hover p),
  .navbar__subPages__wrapper .navbar__pages__desktop :global(.item__title:hover p) {
    color: ${colors.primary[500]};
  }

  .navbar__subPages__wrapper {
    list-style: none;
    display: grid;
    position: absolute;
    top: 1.5rem;
    left: -1.25rem;
    z-index: 1;
    padding: 0.75rem;
    gap: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    min-width: 11rem;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
  }

  .navbar__subPages__wrapper li {
    padding: 0.5rem;
  }

  .navbar__subPages__wrapper li:hover {
    background-color: rgba(190, 235, 255, 0.12);
    border-radius: 0.25rem;
    color: ${colors.neutrals[400]};
  }

  .navbar__pages__wrapper
    .navbar__pages__item:hover
    .navbar__subPages__wrapper
    li:hover
    :global(span p) {
    word-break: keep-all;
    white-space: nowrap;
  }

  .navbar__right {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .navbar__right :global(button) {
    flex-shrink: 0;
  }
  .navbar__right :global(button p) {
    white-space: nowrap;
  }

  .navbar__right__buttons {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    justify-content: center;
  }
`
