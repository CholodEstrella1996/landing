import React, { ReactNode } from 'react'

import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import { ImageTitle1Styles } from './imageTitle1.styles'
import { Typography } from '../../atoms/Typography'

type Props = {
  title: string
  position?: 'left' | 'right'
  image: ReactNode | string
  withButton?: boolean
  children?: ReactNode
  className?: string
}

const { colors, mediaQueries } = theme
export const ImageTitle1 = (props: Props) => {
  const { title, position = 'left', image, withButton = false, children, className = '' } = props

  const isDesktop = useMediaQuery(mediaQueries.desktop)
  const isReversed = position === 'right'
  const style = {
    '--flex-direction': isReversed ? 'row-reverse' : 'row',
    '--align-items': isReversed ? 'flex-end' : 'flex-start',
    '--text-align': isReversed ? 'right' : 'left',
  }
  const desktopTextVariant = withButton ? 'h4' : 'h1'

  return (
    <>
      <div className={`${className} imageTitle__container`} style={style}>
        <div className="imageTitle__image">{image}</div>
        <div className="imageTitle__content">
          <Typography
            variant={isDesktop ? desktopTextVariant : 'h5'}
            className="imageTitle__title"
            color={colors.primary[500]}>
            {title}
          </Typography>

          <div className="imageTitle__content__child">{children}</div>
        </div>
      </div>
      <style jsx>{ImageTitle1Styles}</style>
    </>
  )
}
