import { useId } from 'react'

import Image from 'next/image'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import CardTitleSubtitle1 from 'components/molecules/CardTitleSubtitle1'
import ImageTitle1 from 'components/molecules/ImageTitle1'
import historyCards from 'constants/cloudLabsHistory'
import { useMediaQuery } from 'hooks/use-media-query'
import { useFallbackImage } from 'hooks/useFallbackImage'
import globeImage from 'public/images/primaria/cienciasSociales/ciencias-sociales-134.png'
import tabletImage from 'public/tabletCloudlab.png'

import messages from '../../aboutus.messages'
import { AboutUsStyles } from '../../aboutus.styles'

const { colors, mediaQueries } = theme

export const OurHistory = () => {
  const { withFallback } = useFallbackImage()
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const historyId = useId()

  return (
    <>
      <div className="container_fluid bg-white">
        <div className="container history">
          <ImageTitle1
            title={intl.formatMessage(messages.history.title)}
            position="right"
            image={
              <Image
                alt={intl.formatMessage(messages.stem.title)}
                width={500}
                height={500}
                blurDataURL={tabletImage.src}
                layout="responsive"
                {...withFallback(globeImage.src)}
              />
            }
            className="isReverse">
            <Typography variant={isTablet ? 'h5' : 's1'} color={colors.neutrals[400]}>
              {intl.formatMessage(messages.history.description)}
            </Typography>
          </ImageTitle1>

          <div className="grid__container two_cols highligth">
            {!!historyCards.length &&
              historyCards.map(({ title, subtitle }) => (
                <CardTitleSubtitle1
                  key={`${title}-${historyId}`}
                  title={title}
                  subTitle={intl.formatMessage(subtitle)}
                />
              ))}
          </div>
        </div>
      </div>

      <style jsx>{AboutUsStyles}</style>
    </>
  )
}
