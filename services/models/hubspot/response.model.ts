import { Pagination } from '../responseBase.model'

export type HubspotResponse = {
  getForm: GetForm
}

type GetForm = Pagination & {
  content: {
    id: number
    name: string
    portalId: string | null
    externalFormId: string | null
    region: string | null
    type: string
  }[]
}
