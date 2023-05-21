/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeycloakTokenParsed } from 'keycloak-js'

export type Page = {
  id: number
  name: object
  url: string
  icon?: any
  subPages?: Page[]
}

export type HeaderComponentProps = {
  icon: React.ReactNode
  pages: Page[]
  button: React.ReactNode
}

export type ParsedToken = KeycloakTokenParsed & {
  given_name?: string
  picture?: string
}
