import Image, { StaticImageData } from 'next/image'

import CardAvatarTitle from 'components/atoms/CardAvatarTitle'
import { CardAvatarTitleProps } from 'components/atoms/CardAvatarTitle/cardAvatarTitle.model'
import CardImageTitle from 'components/atoms/CardImageTitle'
import { CardImageTitleProps } from 'components/atoms/CardImageTitle/cardImageTitle.model'
import CardQuote from 'components/atoms/CardQuote'
import { CarouselSlide } from 'components/atoms/Carousel/carousel.model'
import { HomeData } from 'components/modules/Home/home.model'
import { DEFAULT_IMG_PROPS } from 'constants/defaultStaticImages'
import { PostsResponse } from 'services/models/posts/response.model'

type LastItem = JSX.Element | null | false

type ImageProp = PostsResponse['getPostById']['images'][number]

export const getCardAvatarTitleSlides = (
  items: CardAvatarTitleProps[],
  lastItem?: LastItem,
): CarouselSlide[] => {
  const convertedItems = items.map(({ id, ...props }) => ({
    id,
    element: <CardAvatarTitle id={id} {...props} />,
  }))

  if (!lastItem) return convertedItems
  return [...convertedItems, { id: items.length + 1, element: lastItem }]
}

export const getCardImageTitleSlides = (
  items: CardImageTitleProps[],
  lastItem?: LastItem,
): CarouselSlide[] => {
  const convertedItems = items.map(({ id, ...props }) => ({
    id,
    element: <CardImageTitle id={id} {...props} />,
  }))

  if (!lastItem) return convertedItems
  return [...convertedItems, { id: items.length + 1, element: lastItem }]
}

export const getFullImageSlides = (items: ImageProp[]) => {
  const convertedItems = items.map(({ id, url }) => ({
    id,
    element: <Image key={id} alt={url} layout="responsive" width="1280" height="720" src={url} />,
  }))

  return [...convertedItems]
}

export const getMarqueeImageSlides = (items: StaticImageData[]) => {
  const convertedItems = items.map(({ src }, index) => ({
    id: index,
    element: <Image key={src} alt={src} layout="responsive" width="200" height="200" src={src} />,
  }))

  return [...convertedItems]
}

export const getCardQuoteSlides = (items: HomeData['advantages']) => {
  const convertedItems = items.map(({ id, image, description }) => ({
    id,
    element: (
      <CardQuote
        image={
          <Image
            alt={description}
            blurDataURL={image ?? '/brand.svg'}
            placeholder="blur"
            layout="fill"
            src={image ?? '/brand.svg'}
          />
        }
        description={description}
      />
    ),
  }))

  return [...convertedItems]
}

export const formatCardData = (data: PostsResponse['getAreas'], type: string) => {
  const isPackage = type === 'packages'
  const formattedData: CardAvatarTitleProps[] = data.content.map((item) => {
    const { id, name, description, icon, color, colorDark, colorLight, media } = item

    return {
      id: Number(id),
      name,
      title: 'name',
      description,
      iconUrl: icon?.url,
      color,
      colorDark,
      colorLight,
      ...(isPackage && { image: media?.at(0)?.content.url || DEFAULT_IMG_PROPS.image }),
    }
  })

  return formattedData
}
