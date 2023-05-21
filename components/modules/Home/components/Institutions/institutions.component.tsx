import Carousel from 'components/atoms/Carousel'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { getMarqueeImageSlides } from 'utils/helpers/editContent'

import { InstitutionsStyles } from './institutions.styles'
import { HomeData } from '../../home.model'

export type InstitutionsComponentProps = {
  data: HomeData['institutions']
  title: string
}
const { colors } = theme

export const InstitutionsComponent = ({ data, title }: InstitutionsComponentProps) => (
  <>
    <div className="institutions">
      <div className="institutions__title">
        <Typography variant="h6" color={colors.neutrals[400]}>
          {title}
        </Typography>
      </div>

      <div className="institutions__carousel">
        <Carousel
          classname="marquee"
          withAutoplay
          withNavigation={false}
          withPagination={false}
          slides={getMarqueeImageSlides(data)}
          imgFit="contain"
        />
      </div>
    </div>

    <style jsx>{InstitutionsStyles}</style>
  </>
)
