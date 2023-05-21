import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { CardLeftImageTitle1Props } from './cardLeftImageTitle1.model'
import { CardLeftImageTitle1Styles } from './cardLeftImageTitle1.styles'

const { colors } = theme

export const CardLeftImageTitle1Component = (props: CardLeftImageTitle1Props) => {
  const { image = '', title, colorDescription, fullImage = false } = props
  const styles = {
    '--fullscreen-width-desktop': fullImage ? '9rem' : '7rem',
    '--fullscreen-width-mobile': fullImage ? '100%' : 'calc(100% - 2rem)',
    '--fullscreen-height': fullImage ? '8rem' : '6rem',
    '--fullscreen-margin-desktop': fullImage ? '0' : '1rem 0 ',
    '--fullscreen-margin-mobile': fullImage ? '0' : '0 1rem',
    '--fullscreen-fit': fullImage ? 'cover' : 'contain',
    '--fullscreen-border-radius': fullImage ? '1.5rem' : '0',
  }
  return (
    <>
      <div style={styles} className="card__container">
        <div className="image__container">
          <Image
            alt={title}
            blurDataURL={image || '/genericLabs.jpg'}
            layout="fill"
            src={image || '/genericLabs.jpg'}
          />
        </div>
        <div className="card__title">
          <Typography variant="s1" color={colorDescription || colors.neutrals[400]}>
            {title}
          </Typography>
        </div>
      </div>
      <style jsx>{CardLeftImageTitle1Styles}</style>
    </>
  )
}
