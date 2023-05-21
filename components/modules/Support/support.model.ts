export type SupportDropDownInfoProps = {
  infoDrop: SupportMesseges[]
}

type SupportMesseges = {
  id: number
  title: {
    id: string
    defaultMessage: string
  }
  subtitle: {
    id: string
    defaultMessage: string
  }
}
