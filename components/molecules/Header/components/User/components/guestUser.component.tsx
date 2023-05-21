import { useState } from 'react'

import { LoginOutlined, PersonAddOutlined, PersonOutlined } from '@mui/icons-material'
import { ClickAwayListener, IconButton } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { STORE_URL } from 'constants/api.constants'
import { REDIRECT_URI } from 'constants/home.constants'

import messages from '../../../header.messages'
import { UserAvatarGlobalStyles, UserAvatarStyles } from '../user.styles'

const { colors } = theme

export const GuestUser = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const intl = useIntl()
  const router = useRouter()
  const { keycloak } = useKeycloak()

  const handleLoginClick = () => {
    window.location.href = keycloak?.createLoginUrl({ redirectUri: REDIRECT_URI }) ?? ''
  }
  const handleRegistration = () => {
    void router.push(`${STORE_URL || ''}/registration`)
  }

  return (
    <>
      <div className="navbar__avatar">
        <IconButton
          onClick={() => setOpenMenu((prevState) => !prevState)}
          className="avatar__button">
          <PersonOutlined sx={{ color: colors.neutrals[300] }} />
        </IconButton>
      </div>
      {openMenu && (
        <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
          <div className="user-detail">
            <div className="not-logged__container">
              <div className="menu__buttons">
                <IconButton onClick={handleLoginClick} className="action__buttons">
                  <LoginOutlined />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.user.login)}
                  </Typography>
                </IconButton>
                <IconButton onClick={handleRegistration} className="action__buttons">
                  <PersonAddOutlined />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.user.register)}
                  </Typography>
                </IconButton>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      )}

      <style jsx>{UserAvatarStyles}</style>
      <style jsx global>
        {UserAvatarGlobalStyles}
      </style>
    </>
  )
}
