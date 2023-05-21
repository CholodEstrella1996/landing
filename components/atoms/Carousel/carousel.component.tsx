import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMediaQuery } from 'hooks/use-media-query'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { CarouselProps } from './carousel.model'
import { CarouselGlobalStyles, CarouselStyles } from './carousel.styles'
import { theme } from '../ThemeProvider'

const { mediaQueries } = theme

export const CarouselComponent = ({
  itemsPerView,
  slides,
  loop = true,
  classname,
  withNavigation = true,
  withAutoplay = false,
  withPagination = true,
  imgFit = 'cover',
  fullWidth = false,
}: CarouselProps) => {
  const Breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: itemsPerView === 1 ? 1 : 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: itemsPerView,
      spaceBetween: 32,
    },
  }

  const autoplay = withAutoplay && {
    delay: 1,
    disableOnInteraction: false,
  }
  const autoplaySpeed = withAutoplay ? 2000 : 300
  const pagination = withPagination && {
    clickable: true,
    dynamicBullets: true,
  }

  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <div
      className={`${classname ?? ''} swiper-container`}
      style={{
        '--img-fit': imgFit,
        '--navPosition': fullWidth ? '1rem' : '-1.5rem',
      }}>
      <Swiper
        slidesPerView={withAutoplay ? 'auto' : itemsPerView}
        spaceBetween={32}
        loopPreventsSlide
        loopFillGroupWithBlank
        loop={loop}
        pagination={pagination}
        speed={autoplaySpeed}
        autoplay={autoplay}
        navigation={{
          nextEl: `.${classname ?? ''}.swiper-button-next`,
          prevEl: `.${classname ?? ''}.swiper-button-prev`,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={withAutoplay ? {} : Breakpoints}>
        {slides.map(({ element, id }) => (
          <SwiperSlide key={id}>{element}</SwiperSlide>
        ))}
      </Swiper>
      {isTablet && withNavigation && (
        <>
          <div className={`${classname ?? ''} swiper-button-next`} />
          <div className={`${classname ?? ''} swiper-button-prev`} />
        </>
      )}
      <style jsx>{CarouselStyles}</style>
      <style jsx global>
        {CarouselGlobalStyles}
      </style>
    </div>
  )
}
