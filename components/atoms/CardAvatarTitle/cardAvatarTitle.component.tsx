import Image from 'next/image'
import Link from 'next/link'

import { DEFAULT_IMG_PROPS } from 'constants/defaultStaticImages'
import { useFallbackImage } from 'hooks/useFallbackImage'

import { CardAvatarTitleProps } from './cardAvatarTitle.model'
import { CardAvatarTitleLocalStyles } from './cardAvatarTitle.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography'

const { colors } = theme
export const CardAvatarTitleComponent = (props: CardAvatarTitleProps) => {
  const { name, price, iconUrl, colorLight, colorDark, href = '', image, description } = props
  const { withFallback } = useFallbackImage()

  return (
    <div
      style={{
        '--avatar-bg-color': colorLight || colors.neutrals[50],
        '--title-color': colorDark || colors.neutrals[500],
      }}>
      <Link href={href}>
        <div className="card">
          {image && (
            <div className="cover__image">
              <Image
                src={image}
                alt={DEFAULT_IMG_PROPS.alt}
                layout="responsive"
                width="640"
                height="360"
                placeholder="blur"
                blurDataURL={DEFAULT_IMG_PROPS.image.blurDataURL}
              />
            </div>
          )}

          <div className="card__content">
            <div className="card__info">
              <div className="card__info__avatar">
                <Image
                  layout="responsive"
                  width="80"
                  height="80"
                  alt={name}
                  {...withFallback(iconUrl, '/brand.svg')}
                />
              </div>
              <div className="card__info__title">
                {!!description && <span className="info__subtitle">{description}</span>}
                <span className="info__title">{name}</span>
              </div>
            </div>
            {!!price && (
              <div className="card__price">
                <Typography variant="c2" color={colors.neutrals[500]}>
                  USD {price}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </Link>
      <style jsx>{CardAvatarTitleLocalStyles}</style>
    </div>
  )
}
