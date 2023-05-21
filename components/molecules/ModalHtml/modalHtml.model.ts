export type PropsModal = {
  title: string
  buttonOutlined?: string
  buttonContained?: string
  html?: string
  open: boolean
  children?: React.ReactNode
  setModalOpen: (openM: boolean) => void
  onAcceptTerms?: () => Promise<void>
}
