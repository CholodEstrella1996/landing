export type UserResponse = {
  getUser: GetUser
  getAllUsers: GetAllUsers
  createUser: CreateUser
  deleteUser: DeleteUser
}

type IdNameDisplay = {
  id: number | null
  name: string | null
  displayName: string | null
}

type GetUser = {
  id: string
  username: string
  createdAt: number
  enabled: boolean
  email: string
  emailVerified: boolean
  firstName: string
  surname: string
  phoneNumber: string
  address: string
  identityType: {
    id: number
    name: string
  }
  identityNumber: string
  postalCode: string
  cityId: number
  stateId: number
  countryId: number
  avatarUrl: string | null
  avatarContentId: null
  gender: IdNameDisplay
  educationalLevel: IdNameDisplay
  birthDate: string
  isCustomer: boolean
  requiredActions: string[]
  role: IdNameDisplay[]
  status: IdNameDisplay
  city: {
    name: string
    stateName: string
    countryName: string
  }
  organization: {
    id: number
    name: string
    cityId: number
    country: string
    state: string
    city: string
    phoneNumber: string
    address: string
    postalCode: string
    identityType: string
    identityNumber: string
    logoUrl: null
    educationKind: IdNameDisplay
    organizationKind: IdNameDisplay
    sector: IdNameDisplay
  }
  subscriptions: {
    id: number
    code: string
  }[]
}

type GetAllUsers = never

type CreateUser = never

type DeleteUser = never
