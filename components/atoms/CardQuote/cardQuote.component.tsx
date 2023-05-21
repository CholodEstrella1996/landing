import { useMediaQuery } from 'hooks/use-media-query'

import { CardQuoteProps } from './cardQuote.model'
import { CardQuoteStyles } from './cardQuote.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography'

/* Quote */
type QuoteProps = {
  variant: 'open' | 'close'
  color?: string
  className?: string
}
const Quote = ({ variant, color, className }: QuoteProps) => (
  <span className={className}>
    {variant === 'open' ? (
      <svg viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.5615 19.6016C19.1344 17.2318 20.0719 14.263 21.374 10.6953C22.7021 7.10156 24.0563 3.83333 25.4365 0.890625H33.9912C32.2724 7.84375 30.9573 14.3672 30.0459 20.4609H19.1084L18.5615 19.6016ZM0.319313 19.6016C0.89223 17.2318 1.82973 14.263 3.13181 10.6953C4.45994 7.10156 5.8141 3.83333 7.19431 0.890625H15.749C14.0303 7.84375 12.7151 14.3672 11.8037 20.4609H0.866188L0.319313 19.6016Z"
          fill={color}
        />
      </svg>
    ) : (
      <svg viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.0312 1.75C14.7291 6.88021 12.4375 13.1172 9.15623 20.4609H0.60154C2.39841 12.7526 3.7005 6.22917 4.50779 0.890625H15.4844L16.0312 1.75ZM34.2734 1.75C32.9713 6.88021 30.6797 13.1172 27.3984 20.4609H18.8437C20.6406 12.7526 21.9427 6.22917 22.75 0.890625H33.6875L34.2734 1.75Z"
          fill={color}
        />
      </svg>
    )}
  </span>
)

const { colors, mediaQueries } = theme
export const CardQuoteComponent = ({ description, image }: CardQuoteProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <div className="card-quote__container">
        <div className="card-quote__content">
          <div className="card-quote__image">{image}</div>
        </div>
        <div className="card-quote__content">
          <div className="card-quote__caption">
            {isTablet && (
              <Quote
                variant="open"
                className="card-quote__open-quote"
                color={colors.primary[500]}
              />
            )}

            <Typography variant={isTablet ? 'h3' : 'h6'} color={colors.neutrals[300]}>
              {isTablet ? description : `"${description}"`}
            </Typography>

            {isTablet && (
              <Quote
                variant="close"
                className="card-quote__close-quote"
                color={colors.primary[500]}
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>{CardQuoteStyles}</style>
    </>
  )
}
