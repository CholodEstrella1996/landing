import { useState } from 'react'

import { CloseOutlined, PersonOutlined, LogoutOutlined } from '@mui/icons-material'
import { IconButton, ClickAwayListener } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { REDIRECT_URI } from 'constants/home.constants'
import { User } from 'services/models/user.model'

import { UserAvatarStyles, UserAvatarGlobalStyles } from './user.styles'
import messages from '../../header.messages'

type UserAvatarProps = {
  user: User
}

const { colors } = theme

export const UserAvatar = ({ user }: UserAvatarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const { firstName, surname, email, avatarUrl } = user
  const { keycloak } = useKeycloak()
  const intl = useIntl()
  const router = useRouter()

  const navigatePage = (link: string) => {
    setOpenMenu(false)
    void router.push(link)
  }

  return (
    <>
      <IconButton
        onClick={() => void setOpenMenu((prevState) => !prevState)}
        className="avatar__button">
        <Avatar name={firstName ?? ''} size="small" image={avatarUrl ?? '/cloudlabicon.jpg'} />
      </IconButton>
      {openMenu && (
        <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
          <div className="user-detail">
            <div className="user-detail__container">
              <div className="user-info">
                <div className="user-info--avatar-and-close">
                  <Avatar
                    name={firstName ?? ''}
                    size="large"
                    image={avatarUrl ?? '/cloudlabicon.jpg'}
                  />
                  <IconButton onClick={() => setOpenMenu(false)} className="close__button">
                    <CloseOutlined fontSize="medium" />
                  </IconButton>
                </div>
                <Typography variant="h6" color={colors.neutrals[600]} className="user-name">
                  {firstName} {surname}
                </Typography>
                <Typography variant="c1" color={colors.neutrals[400]}>
                  {email}
                </Typography>
              </div>
              <div className="menu__buttons">
                <IconButton
                  onClick={() => void navigatePage(`${REDIRECT_URI}/profile`)}
                  className="action__buttons">
                  <PersonOutlined fontSize="small" />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.user.profile)}
                  </Typography>
                </IconButton>
                <IconButton
                  onClick={() => {
                    if (keycloak) {
                      window.location.href = keycloak?.createLogoutUrl()
                    }
                  }}
                  className="action__buttons">
                  <LogoutOutlined fontSize="small" />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.user.logout)}
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
