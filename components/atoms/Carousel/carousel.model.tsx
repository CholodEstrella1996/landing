export type CarouselProps = {
  slides: CarouselSlide[]
  itemsPerView?: number
  loop?: boolean
  classname?: string
  withNavigation?: boolean
  withAutoplay?: boolean
  withPagination?: boolean
  imgFit?: string
  fullWidth?: boolean
}

export type CarouselSlide = {
  id: number
  element: JSX.Element
}
