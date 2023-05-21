import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import CardColumnImage1 from 'components/molecules/CardColumnImage1'
import { useMediaQuery } from 'hooks/use-media-query'

import { LearningEnvironmentsStyles } from './learningEnvironments.styles'
import { HomeData } from '../../home.model'

export type LearningEnvironmentsComponentProps = {
  title: string
  data: HomeData['learningEnvironments']
}

const { colors, mediaQueries } = theme

export const LearningEnvironmentsComponent = ({
  data,
  title: titleProp,
}: LearningEnvironmentsComponentProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <div className="learning-environments">
      <div className="container">
        <Typography
          variant={isTablet ? 'h4' : 'h6'}
          color={colors.neutrals[400]}
          className="learning-environments__title">
          {titleProp}
        </Typography>

        <div className="learning-environments__info-items">
          {data.map(({ id, title, description, image }) => (
            <CardColumnImage1
              key={id}
              title={title}
              src={image ?? '/brand.svg'}
              description={description}
              className="learning-environments__card"
            />
          ))}
        </div>
      </div>

      <style jsx>{LearningEnvironmentsStyles}</style>
    </div>
  )
}
