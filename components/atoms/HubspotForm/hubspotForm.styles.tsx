import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors, gradients, typography } = theme

export const HubspotFormStyles = css`
  .contactForm__form {
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    height: 100%;
    padding: 1rem;
    overflow: auto;
  }
  .contactForm__form :global(form) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contactForm__form :global(form li) {
    list-style-type: none;
  }

  .contactForm__form :global(input) {
    width: 100%;
    border: 2px solid ${colors.neutrals[300]};
    border-radius: 100px;
    padding: 0.75rem;
    margin: 0.25rem 0;
    outline: none;
  }

  .contactForm__form :global(input:focus) {
    border: 2px solid #000;
  }

  .contactForm__form :global(label) {
    margin-left: 1.5rem;
    color: ${colors.neutrals[400]};
    font-weight: ${typography.weight.semibold};
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .contactForm__form :global(ul > li > label) {
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: 700;
    margin-left: 1rem;
  }

  .contactForm__form :global(ul > li > label > input) {
    width: auto;
    color: ${colors.neutrals[400]};
  }

  .contactForm__form :global(ul > li > label) {
    color: #ea3f3f;
  }

  .contactForm__form :global(ul > li > label > span) {
    color: ${colors.neutrals[400]};
  }

  .contactForm__form :global(p) {
    padding: 0.75rem 0;
    color: ${colors.neutrals[300]};
    font-weight: ${typography.weight.bold};
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .contactForm__form :global(input[type='submit']) {
    color: ${colors.neutrals.white};
    border: none;
    background-color: ${gradients.primary2};
    font-weight: ${typography.weight.bold};
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1rem;
  }
  .contactForm__form :global(input[type='submit']:hover) {
    cursor: pointer;
  }
`
