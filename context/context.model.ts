import { User } from 'services/models/user.model'

export type ContextProps = {
  user: User | null
  language: Language
  updateLanguage?: (language: Language) => void
  updateUser?: (user: User) => void
}

export type Language = 'es' | 'en' | 'pt'
