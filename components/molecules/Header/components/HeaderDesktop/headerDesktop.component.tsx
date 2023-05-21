import React, { useMemo, useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Divider } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import type Keycloak from 'keycloak-js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { platformLink } from 'constants/landingPages'
import { useOutsideClickHandler } from 'hooks/helpers'
import { useMediaQuery } from 'hooks/use-media-query'

import { HeaderDesktopStyles } from './headerDesktop.styles'
import { HeaderComponentProps, Page } from '../../header.models'
import User from '../User'

const { colors, mediaQueries } = theme

const HeaderComponent = ({ icon, pages, button }: HeaderComponentProps) => {
  const router = useRouter()
  const intl = useIntl()
  const [showSubPages, setShowSubPages] = useState<boolean>(false)
  const isDesktop = useMediaQuery(mediaQueries.desktop)
  const { keycloak } = useKeycloak<Keycloak>()

  const pushNewPage = async (url: string, subPage?: Page[]): Promise<void> => {
    if (subPage?.length) {
      setShowSubPages(!showSubPages)
      return
    }
    await router.push(url)
  }
  const { innerBorderRef } = useOutsideClickHandler(() => setShowSubPages(false))

  const activeLink = useMemo(() => {
    const currentPath = router.asPath.charAt(1)
    const currentActive = !currentPath || currentPath === '#' ? '/' : router.asPath.slice(0, 5)
    return currentActive
  }, [router.asPath])

  return (
    <>
      <header className="navbar">
        <nav className="navbar__content">
          <div className="navbar__icon">
            <Link href="/" passHref>
              <a>{icon}</a>
            </Link>
          </div>
          <div className="navbar__pages">
            <ul className="navbar__pages__wrapper">
              {pages
                .filter((item) => item.url !== '/')
                .map(({ url, id, name, subPages }) => (
                  <li
                    style={{ marginRight: isDesktop ? '2rem' : '1.25rem' }}
                    className="navbar__pages__item"
                    key={id}
                    role="presentation"
                    onClick={() => {
                      pushNewPage(url, subPages).finally(() => {})
                    }}>
                    <Typography
                      variant={isDesktop ? 's1' : 'c1'}
                      color={
                        url.slice(0, 5) === activeLink ? colors.primary[500] : colors.neutrals[400]
                      }
                      className="item__title">
                      {intl.formatMessage(name)}
                    </Typography>
                    {subPages?.length && <KeyboardArrowDownIcon fontSize="inherit" />}
                    {subPages?.length && showSubPages && (
                      <ul ref={innerBorderRef} className="navbar__subPages__wrapper">
                        {subPages.map(({ id: subId, name: subName, url: subUrl }) => (
                          <li
                            className="navbar__pages__desktop"
                            key={subId}
                            role="presentation"
                            onClick={() => {
                              pushNewPage(subUrl).finally(() => {})
                            }}>
                            <Typography
                              variant="s2"
                              color={
                                subUrl.slice(0, 5) === activeLink
                                  ? colors.primary[500]
                                  : colors.neutrals[400]
                              }
                              className="item__title">
                              {intl.formatMessage(subName)}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </nav>
        <div className="navbar__right">
          {keycloak?.authenticated && (
            <>
              <a href={platformLink} target="_blank" rel="noopener noreferrer">
                {button}
              </a>
              <Divider orientation="vertical" flexItem />
            </>
          )}
          <div className="navbar__right__buttons">
            <User />
          </div>
        </div>
      </header>
      <style jsx>{HeaderDesktopStyles}</style>
    </>
  )
}
export default HeaderComponent
