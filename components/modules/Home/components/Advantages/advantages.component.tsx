import Carousel from 'components/atoms/Carousel'
import { getCardQuoteSlides } from 'utils/helpers/editContent'

import { AdvantagesStyles } from './advantages.styles'
import { HomeData } from '../../home.model'

export type AdvantagesComponentProps = {
  data: HomeData['advantages']
}

export const AdvantagesComponent = ({ data }: AdvantagesComponentProps) => (
  <>
    <div className="advantages">
      <Carousel
        itemsPerView={1}
        withNavigation
        classname="swiper1"
        slides={getCardQuoteSlides(data)}
        fullWidth
      />
    </div>

    <style jsx>{AdvantagesStyles}</style>
  </>
)
