import css from 'styled-jsx/css'

export const SpinnerStyles = css`
  .spinner :global(.spinner__container) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`
