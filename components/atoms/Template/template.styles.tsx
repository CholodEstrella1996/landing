import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors, mediaQueries } = theme

export const TemplateStyles = css`
  .box {
    background-color: ${colors.primary[500]};
    padding: 4rem;
  }

  ${mediaQueries.desktop} {
    .box {
      background-color: ${colors.neutrals[300]};
    }
  }
`
