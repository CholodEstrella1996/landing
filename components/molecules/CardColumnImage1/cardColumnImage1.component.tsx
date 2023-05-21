import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import { CardColumnImage1Props } from './cardColumnImage1.model'
import { CardColumnImage1Styles } from './cardColumnImage1.styles'

const { colors, mediaQueries } = theme

export const CardColumnImage1Component = (props: CardColumnImage1Props) => {
  const { src, title, description, className } = props
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <div className={className}>
      <div className="card__content">
        <div className="card__image">
          <Image src={src} alt={title} layout="fill" />
        </div>
        <div className="card__text">
          <Typography variant={isTablet ? 'h5' : 's1'} color={colors.primary[500]}>
            {title}
          </Typography>

          {description && (
            <Typography
              weight="semibold"
              variant={isTablet ? 's1' : 'c1'}
              color={colors.neutrals[300]}>
              {description}
            </Typography>
          )}
        </div>
      </div>
      <style jsx>{CardColumnImage1Styles}</style>
    </div>
  )
}
