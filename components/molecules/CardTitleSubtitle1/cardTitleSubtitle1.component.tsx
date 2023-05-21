import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { CardTitleSubtitle1Props } from './cardTitleSubtitle1.model'
import { CardTitleSubtitle1Styles } from './cardTitleSubtitle1.styles'

const { colors } = theme

export const CardTitleSubtitle1 = (props: CardTitleSubtitle1Props) => {
  const { title, subTitle } = props
  return (
    <>
      <div className="card">
        <Typography variant="h6" color={colors.primary[500]}>
          {title}
        </Typography>
        <Typography variant="p1" color={colors.neutrals[300]}>
          {subTitle}
        </Typography>
      </div>
      <style jsx>{CardTitleSubtitle1Styles}</style>
    </>
  )
}
