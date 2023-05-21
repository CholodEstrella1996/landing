import { ChevronRight } from '@mui/icons-material'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { CardAvatarTitleProps } from 'components/atoms/CardAvatarTitle/cardAvatarTitle.model'
import Carousel from 'components/atoms/Carousel'
import Spinner from 'components/atoms/Spinner'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Home/home.messages'
import Dialog from 'components/molecules/Dialog'
import { getCardAvatarTitleSlides } from 'utils/helpers/editContent'

import { PanelCardsStyles } from './panelCards.styles'

type PanelCardsProps = {
  type: string
  href: string
  itemsPerView: number
  slideAreasPackages?: CardAvatarTitleProps[]
  slideEditorialCurriculum?: CardAvatarTitleProps[]
  isLoading: boolean
}

const { colors } = theme
export const PanelCardsComponent = ({
  type,
  href,
  itemsPerView,
  slideAreasPackages,
  slideEditorialCurriculum,
  isLoading,
}: PanelCardsProps) => {
  const intl = useIntl()
  const areSlidesNotEmpty = slideAreasPackages?.length || slideEditorialCurriculum?.length

  const lastCard = (
    <Link href={href}>
      <a className="card__last">
        <Typography variant="s2" color={colors.neutrals[500]}>
          {intl.formatMessage(messages.homePage.productsCarousel.seeMore)}
        </Typography>
        <ChevronRight htmlColor={colors.primary[500]} />
      </a>
    </Link>
  )

  const formattedCarousel = slideAreasPackages
    ? getCardAvatarTitleSlides(slideAreasPackages ?? [], lastCard)
    : getCardAvatarTitleSlides(slideEditorialCurriculum ?? [], lastCard)

  if (!areSlidesNotEmpty && !isLoading) {
    return (
      <Dialog
        message={intl.formatMessage(messages.homePage.productsCarousel.empty, {
          type,
        })}
      />
    )
  }

  return (
    <>
      <div className="carousel__content">
        {areSlidesNotEmpty && !isLoading ? (
          <Carousel
            slides={formattedCarousel}
            loop={false}
            itemsPerView={itemsPerView}
            classname="swipe2"
          />
        ) : (
          <Spinner type="inline" />
        )}
      </div>

      <style jsx>{PanelCardsStyles}</style>
    </>
  )
}
