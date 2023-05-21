import Image from 'next/image'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import CardAvatarTitle1 from 'components/molecules/CardAvatarTitle1'
import ImageTitle1 from 'components/molecules/ImageTitle1'
import { useMediaQuery } from 'hooks/use-media-query'
import { useFallbackImage } from 'hooks/useFallbackImage'
import tabletImage from 'public/tabletCloudlab.png'

import messages from '../../aboutus.messages'
import { AboutUsStyles } from '../../aboutus.styles'

const { colors, mediaQueries } = theme

export const VirtualStem = () => {
  const { withFallback } = useFallbackImage()
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <div className="container_fluid">
        <div className="container virtual-stem">
          <ImageTitle1
            title={intl.formatMessage(messages.stem.title)}
            position="left"
            image={
              <Image
                alt={intl.formatMessage(messages.stem.title)}
                width={500}
                height={500}
                blurDataURL={tabletImage.src}
                layout="responsive"
                {...withFallback(tabletImage.src)}
              />
            }>
            <Typography variant={isTablet ? 'h5' : 's1'} color={colors.neutrals[400]}>
              {intl.formatMessage(messages.stem.description)}
            </Typography>
          </ImageTitle1>

          <div className="grid__container two_cols highligth">
            <CardAvatarTitle1
              color={colors.science[500]}
              title="s"
              description={intl.formatMessage(messages.stem.science.description)}
              textAvatar={intl.formatMessage(messages.stem.science.title)}
            />
            <CardAvatarTitle1
              color={colors.technology[500]}
              title="t"
              description={intl.formatMessage(messages.stem.technology.description)}
              textAvatar={intl.formatMessage(messages.stem.technology.title)}
            />
            <CardAvatarTitle1
              color={colors.engineering[500]}
              title="e"
              description={intl.formatMessage(messages.stem.engineer.description)}
              textAvatar={intl.formatMessage(messages.stem.engineer.title)}
            />
            <CardAvatarTitle1
              color={colors.mathematics[500]}
              title="m"
              description={intl.formatMessage(messages.stem.mathematics.description)}
              textAvatar={intl.formatMessage(messages.stem.mathematics.title)}
            />
          </div>
        </div>
      </div>
      <style jsx>{AboutUsStyles}</style>
    </>
  )
}
