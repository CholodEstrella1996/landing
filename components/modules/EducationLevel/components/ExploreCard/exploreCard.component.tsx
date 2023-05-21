import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import { EducationLevelStyles } from '../../educationLevel.styles'

type CardProps = {
  title: string
  subtitle: string
  button: string
  onClick: () => void
}

const { colors, mediaQueries } = theme
export const ExploreCardComponent = ({ title, subtitle, button, onClick }: CardProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <div className="explore__card">
        <Typography variant={isTablet ? 'h4' : 'h5'} color={colors.primary[500]}>
          {title}
        </Typography>
        <Typography variant={isTablet ? 'h6' : 's1'} color={colors.neutrals[400]}>
          {subtitle}
        </Typography>
        <div style={{ flex: 1 }} />
        <Button variant="contained" size="medium" onClick={onClick}>
          {button}
        </Button>
      </div>
      <style jsx>{EducationLevelStyles}</style>
    </>
  )
}
