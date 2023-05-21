import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { CardAvatarTitleProps } from 'components/atoms/CardAvatarTitle/cardAvatarTitle.model'
import { storeLink } from 'constants/landingPages'
import { postsService } from 'services/services/posts'
import storeService from 'services/services/store'
import { formatCardData } from 'utils/helpers/editContent'

import HomeComponent from './home.component'
import messages from './home.messages'
import HomeMock from './mock'

const HomeContainer = () => {
  const [areas, setAreas] = useState<CardAvatarTitleProps[]>()
  const [editorialCurriculum, setEditorialCurriculum] = useState<CardAvatarTitleProps[]>()
  const [packages, setPackages] = useState<CardAvatarTitleProps[]>()
  const [isLoading, setIsLoading] = useState(false)
  const intl = useIntl()
  const fetchHomeAreas = async () => {
    try {
      const response = await postsService.getAreas()

      const convertedAreas = formatCardData(response.data, 'areas')
      setAreas(convertedAreas)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const fetchEditorialCurriculum = async (kind: string) => {
    setIsLoading((prevState) => !prevState)
    const isCurriculum = kind === 'country'
    const detailKind = isCurriculum ? 'detail-country' : 'detail-editorial'
    const description = isCurriculum
      ? intl.formatMessage(messages.homePage.productsCarousel.curriculum)
      : intl.formatMessage(messages.homePage.productsCarousel.editorial)

    try {
      const response = await storeService.getEditorialCurriculum(kind)
      const formattedResponse = response.data.content.map((data) => ({
        id: data.id,
        name: data.name,
        iconUrl: data.iconUrl,
        description,
        href: `${storeLink}/explore-labs/${detailKind}/${data.id}/${data.name}`,
      }))
      setEditorialCurriculum(formattedResponse)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('FetchEditorial-Curriculum error >>: ', error)
    }
    setIsLoading((prevState) => !prevState)
  }

  const fetchPackages = async () => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await storeService.getPackages()

      const formattedPackages = formatCardData(response.data, 'areas')
      setPackages(formattedPackages)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('FetchPackages error >>: ', error)
    }
    setIsLoading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchHomeAreas()
  }, [])

  const data = HomeMock()
  return (
    <HomeComponent
      data={data}
      areas={areas}
      editorialCurriculum={editorialCurriculum}
      packages={packages}
      fetchEditorialCurriculum={fetchEditorialCurriculum}
      fetchPackages={fetchPackages}
      isLoading={isLoading}
    />
  )
}

export default HomeContainer
