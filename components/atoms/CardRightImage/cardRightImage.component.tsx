import React, { ReactNode } from 'react'

import { useMediaQuery } from 'hooks/use-media-query'

import { CardRightImageStyles } from './cardRightImage.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography'

type Props = {
  imageLeft?: ReactNode | string
  imageRight?: ReactNode | string
  title: string
  titleDescription: string
  subtitle: string
  subDescription: string
}

const { colors, mediaQueries } = theme
export const CardRightImage = (props: Props) => {
  const { imageLeft, imageRight, title, titleDescription, subtitle, subDescription } = props
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <div className="cardRight__container">
        <div className="cardRight__box">
          {!isTablet && <div className="cardRight__box__image--contain">{imageLeft}</div>}
          <Typography variant={isTablet ? 'h1' : 'h2'} color={colors.primary[500]}>
            {title}
          </Typography>
          <Typography variant={isTablet ? 'h5' : 's1'} color={colors.neutrals[400]}>
            {titleDescription}
          </Typography>
        </div>

        <div className="cardRight__box">
          <div className="cardRight__box__inner">
            <div className="cardRight__box__image">{imageRight}</div>
            <Typography variant="h6" color={colors.primary[500]}>
              {subtitle}
            </Typography>
            <Typography variant="p2" color={colors.neutrals[400]}>
              {subDescription}
            </Typography>
          </div>
        </div>
      </div>
      <style jsx>{CardRightImageStyles}</style>
    </>
  )
}
