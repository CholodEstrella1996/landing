import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { CardLeftIconButton1Props } from './cardLeftIconButton1.model'
import { CardLeftIconButton1Styles } from './cardLeftIconButton1.styles'

const { colors } = theme

export const CardLeftIconButton1Component = (props: CardLeftIconButton1Props) => {
  const { title, button, image, description } = props

  return (
    <>
      <div className="card__container">
        <div className="card__image">
          <Image
            alt={description}
            width={100}
            height={100}
            layout="responsive"
            src={image || '/brand.svg'}
          />
        </div>
        <div className="card__content">
          <div className="card__description">
            <Typography variant="s1" color={colors.primary[500]}>
              {title}
            </Typography>
            <Typography variant="c1" color={colors.neutrals[300]}>
              {description}
            </Typography>
          </div>
          <div className="card__button">{button}</div>
        </div>
      </div>
      <style jsx>{CardLeftIconButton1Styles}</style>
    </>
  )
}
