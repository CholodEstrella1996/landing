import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography, mediaQueries } = theme
export const ProductsCarouselStyles = css`
  .tab {
    min-height: 15rem;
    margin-bottom: 0;
  }
  .tab :global(.tab__container) {
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
  }

  .tab :global(.tab__navigation) {
    margin-bottom: 1rem;
  }

  .tab :global(.tab__panel) {
    margin: 0 auto;
    padding: 1rem 2rem 0;
    filter: drop-shadow(0 -0.5rem 1rem rgba(0, 0, 0, 0.1));
  }

  .tab :global(.tab__items) {
    font-size: 1rem;
    text-transform: capitalize;
    color: ${colors.neutrals[500]};
    font-family: ${typography.name};
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 2px ${colors.neutrals[200]} solid;
  }
  .tab :global(.tab__items:hover) {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 2px ${colors.primary[400]} solid;
  }
  .tab :global(.tab__items.Mui-selected) {
    color: ${colors.primary[500]};
    font-weight: ${typography.weight.semibold};
  }

  .tab :global(.MuiTabs-indicator) {
    background-color: ${colors.primary[500]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .tab {
      margin-bottom: 10rem;
    }

    .tab :global(.tab__panel) {
      padding: 1rem 2rem 0;
      filter: none;
    }
  }
`
