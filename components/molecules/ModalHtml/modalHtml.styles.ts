import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const ModalHtmlStyles = css`
  .modalHtml {
    background-color: 0 0 1rem rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    outline: none;
  }
  .modalHtml__container {
    position: absolute;
    width: calc(100vw - 1rem);
    height: calc(100vh - 2rem);
    overflow: hidden;
    background-color: ${colors.neutrals[50]};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 2rem;
    gap: 2rem;
  }

  .modalHtml__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    height: 100%;
  }
  .modalHtml__container__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
  }
  .modalHtml__container__title--start {
    align-items: flex-start;
  }
  .modalHtml__container__title--center {
    align-items: center;
    justify-content: center;
  }

  .modalHtml__iframe {
    width: 100%;
    height: 100%;
  }

  .modalHtml__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  .modalHtml__buttons > div,
  .modalHtml__buttons > button {
    width: 100%;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .modalHtml__container {
      max-width: 55rem;
      max-height: 40rem;
    }
    .modalHtml__buttons {
      flex-direction: row;
      justify-content: space-between;
    }
    .modalHtml__buttons > div,
    .modalHtml__buttons > button {
      width: fit-content;
    }
  }
`
