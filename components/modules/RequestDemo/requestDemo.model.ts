import { ReactNode } from 'react'

export type RequestDemoComponentProps = {
  title: string
  description: string
  image: string
  demoSubscription: () => Promise<void>
}
export type DemoCardsProps = {
  content: DemoContent[]
}

export type DemoContent = {
  id: number
  avatar: string
  title: string
  description: string
  items: Items[]
  button: Button
}

type Items = {
  id: number
  icon: ReactNode
  title: string
  subtitle: string
}

type Button = {
  title: string
  type: string
  enable?: string[]
}
