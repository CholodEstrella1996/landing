import Link from 'next/link'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import CardLeftIconButton1 from 'components/molecules/CardLeftIconButton1'
import { useMediaQuery } from 'hooks/use-media-query'

import { EducationLevelsStyles } from './educationLevels.styles'
import messages from '../../home.messages'
import { HomeData } from '../../home.model'

export type EducationLevelsComponentProps = {
  data: HomeData['educationLevels']
}
const { colors, mediaQueries } = theme
export const EducationLevelsComponent = ({ data }: EducationLevelsComponentProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()

  return (
    <div className=" education-levels__container">
      <div className="education-levels__title">
        <Typography variant={isTablet ? 'h3' : 'h5'} weight="regular" color={colors.primary[500]}>
          {intl.formatMessage(messages.homePage.education.title1)}
        </Typography>
        <Typography variant={isTablet ? 'h3' : 'h5'} weight="bold" color={colors.primary[500]}>
          {intl.formatMessage(messages.homePage.education.title2)}
        </Typography>
      </div>
      <div className="education-levels">
        {data.map(({ id, buttonLabel, link, image, description }) => (
          <CardLeftIconButton1
            key={id}
            title={buttonLabel}
            button={
              <Link href={link}>
                <a href={link} className="education-levels__link">
                  {intl.formatMessage(messages.homePage.education.button)}
                </a>
              </Link>
            }
            description={description}
            image={image}
          />
        ))}
      </div>
      <style jsx>{EducationLevelsStyles}</style>
    </div>
  )
}
