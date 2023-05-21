import Image from 'next/image'
import Link from 'next/link'

import { DEFAULT_IMG_PROPS } from 'constants/defaultStaticImages'

import { CardImageTitleProps } from './cardImageTitle.model'
import { CardImageTitleStyles } from './cardImageTitle.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography/typography.component'

const { colors } = theme
export const CardImageTitleComponent = ({ title, image, href }: CardImageTitleProps) => {
  const cardStyle = { '--maxHeight': '4rem', '--mixMode': 'multiply' }
  const hasTitle = title ? 'with-title' : 'no-title'

  return (
    <>
      <Link href={href}>
        <a className="card" style={title ? cardStyle : {}}>
          <div className={`card__inner__${hasTitle}`}>
            <div className={`card__inner__image__${hasTitle}`}>
              <Image
                src={image || DEFAULT_IMG_PROPS.image}
                alt={DEFAULT_IMG_PROPS.alt}
                layout="responsive"
                width={title ? '100' : '116'}
                height={title ? '100' : '53'}
                placeholder="blur"
                blurDataURL={DEFAULT_IMG_PROPS.image.blurDataURL}
              />
            </div>
            {title && (
              <Typography variant="s1" color={colors.neutrals[500]}>
                <span className="card__inner__title">{title}</span>
              </Typography>
            )}
          </div>
        </a>
      </Link>
      <style jsx>{CardImageTitleStyles}</style>
    </>
  )
}
