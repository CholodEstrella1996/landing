export type EducationProps = {
  heroImage: string
  title: string
  description: string
  cards: Card[]
}

type Card = {
  id: number
  image: string
  title: {
    id: string
    defaultMessage: string
  }
}
