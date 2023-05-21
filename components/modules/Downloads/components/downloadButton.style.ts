import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const DownloadButtonStyles = css`
  .platform__container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  .platform__image {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .platform__title {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.4rem;
    text-align: center;
    color: ${colors.neutrals[400]};
    display: grid;
    gap: 1rem;
  }

  .platform__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.4rem 0;
  }

  .platform__button p {
    color: ${colors.neutrals.white};
  }
`
