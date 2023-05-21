import { useIntl } from 'react-intl'

import { CardAvatarTitleProps } from 'components/atoms/CardAvatarTitle/cardAvatarTitle.model'
import { storeLink } from 'constants/landingPages'

import { ProductsCarouselComponent } from './productsCarousel.component'
import messages from '../../home.messages'

type Props = {
  areas?: CardAvatarTitleProps[]
  editorialCurriculum?: CardAvatarTitleProps[]
  packages?: CardAvatarTitleProps[]
  fetchEditorialCurriculum: (kind: string) => Promise<void>
  fetchPackages: () => Promise<void>
  isLoading: boolean
}

export const ProductsCarouselContainer = ({
  areas,
  editorialCurriculum,
  packages,
  fetchEditorialCurriculum,
  fetchPackages,
  isLoading,
}: Props) => {
  const intl = useIntl()
  const areasContent = areas
    ? areas.map((data) => ({
        ...data,
        description: intl.formatMessage(messages.homePage.productsCarousel.areas),
        href: `${storeLink}/explore-labs/detail-area/${data.id}/${data.name}`,
      }))
    : []

  const packagesContent = packages
    ? packages.map((data) => ({
        ...data,
        description: intl.formatMessage(messages.homePage.productsCarousel.package),
        href: `${storeLink}/explore-labs/detail-package/${data.id}/${data.name}`,
      }))
    : []

  return (
    <ProductsCarouselComponent
      areas={areasContent}
      editorialCurriculum={editorialCurriculum}
      packages={packagesContent}
      fetchEditorialCurriculum={fetchEditorialCurriculum}
      fetchPackages={fetchPackages}
      isLoading={isLoading}
    />
  )
}
