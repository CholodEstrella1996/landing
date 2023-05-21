import { theme } from 'components/atoms/ThemeProvider'

import { ImageTitle2Props } from './imageTitle2.model'
import { ImageTitle2LocalStyles } from './imageTitle2.styles'
import { Typography } from '../../atoms/Typography'

const { colors } = theme

export const ImageTitle2Component = ({ image, title, className = '' }: ImageTitle2Props) => (
  <div className={className}>
    <div className="image2__container">
      <div className="image2__image">{image}</div>
      <div className="image2__title">
        <Typography variant="h5" color={colors.neutrals.white} weight="bold">
          {title}
        </Typography>
      </div>
    </div>

    <style jsx>{ImageTitle2LocalStyles}</style>
  </div>
)
