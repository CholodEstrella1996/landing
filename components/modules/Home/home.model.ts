import { StaticImageData } from 'next/image'

import { CardAvatarTitleProps } from 'components/atoms/CardAvatarTitle/cardAvatarTitle.model'

export type HomeData = {
  advantages: {
    id: number
    image: string
    description: string
  }[]
  educationLevels: {
    id: number
    image: string
    description: string
    buttonLabel: string
    link: string
  }[]
  institutions: StaticImageData[]
  learningEnvironments: {
    id: number
    image: string
    title: string
    description: string
  }[]
}

export type HomeComponentProps = {
  data: HomeData
  areas: CardAvatarTitleProps[] | undefined
  editorialCurriculum?: CardAvatarTitleProps[]
  packages?: CardAvatarTitleProps[]
  fetchEditorialCurriculum: (kind: string) => Promise<void>
  fetchPackages: () => Promise<void>
  isLoading: boolean
}
