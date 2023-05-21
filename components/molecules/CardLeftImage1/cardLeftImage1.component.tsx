import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import { CardLeftImage1Props } from './cardLeftImage1.model'
import { CardLeftImage1Styles } from './cardLeftImage1.styles'

const { colors, mediaQueries } = theme
export const CardLeftImage1Component = (props: CardLeftImage1Props) => {
  const { image, title, description1, icon, subtitle, description2 } = props
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <div className="card__container">
        <div className="card__box">
          <div className="card__box__image">
            <Image alt={title} width="400" height="84" layout="responsive" src={image} />
          </div>
        </div>
        <div className="card__box">
          <Typography variant={isTablet ? 'h1' : 'h3'} color={colors.primary[500]}>
            {title}
          </Typography>
          <Typography variant="s1" color={colors.neutrals[400]}>
            {description1}
          </Typography>

          <div className="stem__box">
            {!!icon && (
              <div className="stem__image">
                <Image alt={subtitle} width="195" height="45" layout="fixed" src={icon} />
              </div>
            )}
            {!!subtitle && (
              <Typography variant="h6" color={colors.primary[500]}>
                {subtitle}
              </Typography>
            )}
            {!!description2 && (
              <Typography variant="p2" color={colors.neutrals[400]}>
                {description2}
              </Typography>
            )}
          </div>
        </div>
      </div>
      <style jsx>{CardLeftImage1Styles}</style>
    </>
  )
}
