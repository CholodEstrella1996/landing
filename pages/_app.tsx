import type { IncomingMessage } from 'http'

import { useEffect, useState } from 'react'

import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak-fork/ssr'
import cookie from 'cookie'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { SnackbarProvider } from 'notistack'

import Spinner from 'components/atoms/Spinner'
import { ThemeProvider } from 'components/atoms/ThemeProvider'
import keycloakCfg from 'constants/keycloak.config'
import { ContextProvider } from 'context/appContext'

import DefaultLayout from '../components/molecules/DefaultLayout/defaultLayout.component'

/* Global styles */
import '../styles/globals.css'
import '@splidejs/react-splide/css'

interface InitialProps {
  cookies: unknown
}

const App = ({ Component, pageProps, cookies }: AppProps & InitialProps) => {
  const [showChild, setShowChild] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const start = () => setIsLoading(true)
  const complete = () => setIsLoading(false)

  useEffect(() => {
    setShowChild(true)

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', complete)
    Router.events.on('routeChangeError', complete)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', complete)
      Router.events.off('routeChangeError', complete)
    }
  }, [])

  if (!showChild || typeof window === 'undefined') return null

  return (
    <>
      <Head>
        <title>CloudLabs</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <SSRKeycloakProvider
        keycloakConfig={keycloakCfg}
        persistor={SSRCookies(cookies)}
        autoRefreshToken
        LoadingComponent={<Spinner />}>
        <HubspotProvider>
          <ContextProvider>
            <ThemeProvider>
              <SnackbarProvider
                maxSnack={1}
                hideIconVariant
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
                <DefaultLayout>
                  {isLoading ? <Spinner /> : <Component {...pageProps} />}
                </DefaultLayout>
              </SnackbarProvider>
            </ThemeProvider>
          </ContextProvider>
        </HubspotProvider>
      </SSRKeycloakProvider>
    </>
  )
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

App.getInitialProps = async (context: AppContext) =>
  // Extract cookies from AppContext
  ({
    cookies: parseCookies(context?.ctx?.req),
  })

export default App
