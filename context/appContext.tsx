import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { useKeycloak } from '@react-keycloak-fork/ssr'
import { IntlProvider } from 'react-intl'

import api from 'services/api.client'
import { userService } from 'services/services/user'
import messages from 'translations'
import { defaultLanguage } from 'utils/helpers/handleLanguage'

import { ContextProps } from './context.model'

type Props = {
  children: React.ReactNode
}
const defaultValues: ContextProps = {
  language: defaultLanguage() as ContextProps['language'],
  user: null,
  updateLanguage: () => {},
  updateUser: () => {},
}

const AppContext = createContext(defaultValues)

export function ContextProvider({ children }: Props) {
  const { keycloak } = useKeycloak()
  const [appState, setAppState] = useState<ContextProps>(defaultValues)

  const updateLanguage = (language: ContextProps['language']) => {
    setAppState((prevState) => ({ ...prevState, language }))
  }

  const updateUser = (user: ContextProps['user']) => {
    setAppState((prevState) => ({ ...prevState, user }))
  }

  const setUser = async () => {
    try {
      api.interceptors.request.use(
        (req) => {
          if (keycloak && req.headers) {
            req.headers.Authorization = `Bearer ${String(keycloak.token)}`
          }
          return req
        },
        (error) => Promise.reject(error),
      )
      const { data: user } = await userService.getUser()
      setAppState({ ...appState, user })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Context err :>> ', err)
    }
  }

  const contextValue = useMemo(() => ({ ...appState, updateLanguage, updateUser }), [appState])

  useEffect(() => {
    if (!keycloak || !keycloak.authenticated) return
    void setUser()
  }, [])

  return (
    <AppContext.Provider value={contextValue}>
      <IntlProvider locale={contextValue.language} messages={messages[contextValue.language]}>
        {children}
      </IntlProvider>
    </AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}
