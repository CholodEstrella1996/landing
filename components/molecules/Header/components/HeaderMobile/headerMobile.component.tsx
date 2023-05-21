import React, { useMemo, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import type Keycloak from 'keycloak-js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { platformLink } from 'constants/landingPages'

import { HeaderMobileStyles } from './headerMobile.styles'
import messages from '../../header.messages'
import { HeaderComponentProps } from '../../header.models'
import User from '../User'

const { colors } = theme

const HeaderMobileComponent = ({ icon, pages, button }: HeaderComponentProps) => {
  const router = useRouter()
  const intl = useIntl()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { keycloak } = useKeycloak<Keycloak>()
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const pushNewPage = async (url: string): Promise<void> => {
    setMenuOpen(false)
    await router.push(url)
  }

  const activeLink = useMemo(() => {
    const currentPath = router.asPath.charAt(1)
    const currentActive = !currentPath || currentPath === '#' ? '/' : router.asPath.slice(0, 5)
    return currentActive
  }, [router.asPath])

  return (
    <>
      <header className="navbar__container__mobile">
        {menuOpen && (
          <div className="navbar__opened">
            <div className="navbar__header">
              <Typography
                className="navbar__header__title"
                variant="h6"
                color={colors.primary[500]}>
                {intl.formatMessage(messages.menu.title)}
              </Typography>
              <div className="navbar__header__icon">
                <CloseIcon sx={{ color: `${colors.primary[500]}` }} onClick={handleMenuClick} />
              </div>
            </div>
            <div className="navbar__header__divider">
              <Divider variant="middle" />
            </div>

            <div className="navbar__pages">
              <ul className="navbar__pages__wrapper">
                {pages
                  .filter((item) => item.url !== '/')
                  .map(({ url, id, name, icon: Icon }) => (
                    <li
                      className="navbar__pages__item"
                      key={id}
                      role="presentation"
                      onClick={() => void pushNewPage(url)}>
                      <Icon className="navbar__pages__mobileIcons" />
                      <Typography
                        variant="s1"
                        color={
                          url.slice(0, 5) === activeLink
                            ? colors.primary[500]
                            : colors.neutrals[400]
                        }>
                        {intl.formatMessage(name)}
                      </Typography>
                    </li>
                  ))}
                {keycloak?.authenticated && (
                  <li className="navbar__item__button">
                    <a href={platformLink} target="_blank" rel="noopener noreferrer">
                      {button}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

        {!menuOpen && (
          <nav className="navbar__content">
            <div className="navbar__brand">
              <MenuIcon sx={{ color: colors.neutrals[300] }} onClick={handleMenuClick} />
              <div className="navbar__icon">
                <Link href="/" passHref>
                  <a>{icon}</a>
                </Link>
              </div>
            </div>
            <div className="navbar__content__right">
              <User />
            </div>
          </nav>
        )}
      </header>
      <style jsx>{HeaderMobileStyles}</style>
    </>
  )
}
export default HeaderMobileComponent
