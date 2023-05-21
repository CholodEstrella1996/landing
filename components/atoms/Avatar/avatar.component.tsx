import { ReactNode } from 'react'

import Image from 'next/image'

import { avatarStyles } from './avatar.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography'

export type AvatarProps = {
  name?: string
  color?: string
  image?: string
  icon?: ReactNode
  colorIcon?: string
  size?: 'small' | 'medium' | 'large' | 'fill'
}
const { colors } = theme

export const Avatar = (props: AvatarProps) => {
  const {
    name = ' ',
    color = colors.neutrals[500],
    image,
    icon = null,
    size = 'medium',
    colorIcon = 'inherit',
  } = props

  const containerStyles = { backgroundColor: icon || !image ? color : 'transparent' }
  const iconStyles = { color: colorIcon }
  const firstLetter = name.charAt(0).toUpperCase()

  if (icon) {
    return (
      <div className={`avatar avatar--${size}`} style={containerStyles}>
        <div className="avatar__icon" style={iconStyles}>
          {icon}
        </div>

        <style jsx>{avatarStyles}</style>
      </div>
    )
  }

  if (image) {
    return (
      <div className={`avatar avatar--${size}`} style={containerStyles}>
        <Image src={image} alt="avatar" layout="fill" className="avatar__image" />

        <style jsx>{avatarStyles}</style>
      </div>
    )
  }

  return (
    <div className={`avatar avatar--${size}`} style={containerStyles}>
      <div className="avatar__text">
        <Typography
          variant={size === 'small' ? 's2' : 'h2'}
          weight="regular"
          color={colors.neutrals.white}>
          {firstLetter}
        </Typography>
      </div>

      <style jsx>{avatarStyles}</style>
    </div>
  )
}
