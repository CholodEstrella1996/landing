import React from 'react'

import { getCookie } from 'utils/helpers/cookie'

import { DefaultLayoutStyles } from './defaultLayout.styles'
import CardCookie from '../CardCookie'
import Footer from '../Footer'
import Header from '../Header'

interface DefaultLayoutProps {
  children: React.ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const cookies = getCookie()
  return (
    <>
      <Header />
      <main className="defaultLayout__main">{children}</main>
      {!cookies && <CardCookie />}
      <Footer />
      <style jsx>{DefaultLayoutStyles}</style>
    </>
  )
}

export default DefaultLayout
