import Image from 'next/image'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import CardLeftImageTitle1 from 'components/molecules/CardLeftImageTitle1'
import ImageTitle1 from 'components/molecules/ImageTitle1'
import { useMediaQuery } from 'hooks/use-media-query'
import spaceshipImage from 'public/rocket.png'

import messages from '../../aboutus.messages'
import { AboutUsCardsProps } from '../../aboutus.model'
import { AboutUsStyles } from '../../aboutus.styles'

const { colors, mediaQueries } = theme
export const OurAchievements = ({ cards }: AboutUsCardsProps) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      {!!cards.length && (
        <div className="container_fluid">
          <div className="container achievements">
            <ImageTitle1
              title={intl.formatMessage(messages.achievements.title)}
              position="left"
              image={
                <Image
                  alt={intl.formatMessage(messages.stem.title)}
                  width={500}
                  height={500}
                  blurDataURL={spaceshipImage.src}
                  layout="responsive"
                  src={spaceshipImage.src}
                />
              }>
              <Typography variant={isTablet ? 'h5' : 's1'} color={colors.neutrals[400]}>
                {intl.formatMessage(messages.achievements.subtitle)}
              </Typography>
            </ImageTitle1>

            <div className="grid__container highligth three_cols">
              {cards.map(({ id, iconUrl, title }) => (
                <CardLeftImageTitle1 key={id} title={title} image={String(iconUrl)} />
              ))}
            </div>
          </div>
        </div>
      )}
      <style jsx>{AboutUsStyles}</style>
    </>
  )
}
