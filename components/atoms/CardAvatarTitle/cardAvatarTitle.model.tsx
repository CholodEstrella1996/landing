import { StaticImageData } from 'next/image'

export type CardAvatarTitleProps = {
  id: number
  name: string
  description?: string
  iconUrl: string
  color?: string
  colorLight?: string
  colorDark?: string
  price?: string
  href?: string
  image?: string | StaticImageData
}
