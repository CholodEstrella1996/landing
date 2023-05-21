import React, { ReactNode } from 'react'

import { Avatar } from 'components/atoms/Avatar'
import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import { CardSupportStyles } from './cardSupport.styles'

export type CardSupportProps = {
  icon?: ReactNode
  title: string
  textButton: string
  avatarUp?: boolean
  color?: string
  link?: string
}

const { colors, mediaQueries } = theme

export const CardSupport = (props: CardSupportProps) => {
  const { icon, title, textButton, avatarUp = false, link, color } = props
  const isDesktop = useMediaQuery(mediaQueries.desktop)

  return (
    <>
      <div className="card__container">
        <div className="card__content">
          {avatarUp && (
            <Avatar name="whatsapp" icon={icon} color={color} colorIcon={colors.neutrals.white} />
          )}
          <Typography
            weight="semibold"
            variant="p2"
            color={colors.neutrals[400]}
            className="title__center">
            {title}
          </Typography>
          {!avatarUp && <Avatar name="whatsapp" icon={icon} colorIcon={colors.neutrals.white} />}
          <a href={link} target="_blank" rel="noreferrer">
            <Button variant="outlined" type="button" size={isDesktop ? 'medium' : 'small'}>
              {textButton}
            </Button>
          </a>
        </div>
      </div>
      <style jsx>{CardSupportStyles}</style>
    </>
  )
}
