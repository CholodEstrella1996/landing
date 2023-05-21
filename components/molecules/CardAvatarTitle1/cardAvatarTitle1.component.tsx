import { Avatar } from 'components/atoms/Avatar'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { CardAvatarTitle1Props } from './cardAvatarTitle1.model'
import { CardAvatarTitle1Styles } from './cardAvatarTitle1.styles'

const { colors } = theme
export const CardAvatarTitle1Component = (props: CardAvatarTitle1Props) => {
  const { color, title, description, textAvatar } = props

  return (
    <>
      <div className="card__container">
        <Avatar name={title} color={color} />
        <div className="card__text">
          <div className="card__title">
            <Typography variant="h6" color={color}>
              {textAvatar && textAvatar.toUpperCase()}
            </Typography>
          </div>
          <div className="card__subtext">
            <Typography variant="s1" weight="regular" color={colors.neutrals[300]}>
              {description && description}
            </Typography>
          </div>
        </div>
      </div>

      <style jsx>{CardAvatarTitle1Styles}</style>
    </>
  )
}
