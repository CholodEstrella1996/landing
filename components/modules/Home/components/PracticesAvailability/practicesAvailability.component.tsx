import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'
import { useFallbackImage } from 'hooks/useFallbackImage'

import { PracticesAvailabilityStyles } from './practicesAvailability.styles'

export type PracticesAvailabilityComponentProps = {
  title: string
  description: string
  image: string
}

const { colors, mediaQueries } = theme

export const PracticesAvailabilityComponent = ({
  title,
  description,
  image,
}: PracticesAvailabilityComponentProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const { withFallback } = useFallbackImage()

  return (
    <div className="practices-availability">
      <div className="practices-availability__content">
        <div className="practices-availability__image">
          <Image
            alt={title}
            width={400}
            height={400}
            placeholder="blur"
            blurDataURL={image ?? '/cloudlabicon.png'}
            layout="responsive"
            {...withFallback(image, '/cloudlabicon.png')}
          />
        </div>
        <Typography variant={`${isTablet ? 'h3' : 'h5'}`} color={colors.primary[500]}>
          {title}
        </Typography>
        <Typography variant={`${isTablet ? 'h4' : 'h6'}`} color={colors.neutrals[300]}>
          {description}
        </Typography>
      </div>

      <style jsx>{PracticesAvailabilityStyles}</style>
    </div>
  )
}
