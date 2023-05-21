import { useState } from 'react'

import { useKeycloak } from '@react-keycloak-fork/ssr'
import Image from 'next/image'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ModalHtml from 'components/molecules/ModalHtml'
import { setCookie } from 'utils/helpers/cookie'

import messages from './cardCookie.messages'
import { CardCookieLocalStyles } from './cardCookie.styles'

type Props = {
  url: string
}

const { colors } = theme

export const CardCookieComponent = ({ url }: Props) => {
  const intl = useIntl()
  const [openModal, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const { keycloak } = useKeycloak()
  const modalTitle = intl.formatMessage(messages.content.modal)

  const handleReject = () => {
    if (keycloak) window.location.href = keycloak.createLogoutUrl()
  }

  const handleAccept = () => {
    void setCookie()
    setShow((prevStep) => !prevStep)
  }

  return (
    <>
      {show && (
        <div className="cookies">
          <div className="cookies__container">
            <div className="cookies__brand">
              <Image src="/brand.svg" alt="cloudLab" width={80} height={40} layout="fixed" />
            </div>
            <div className="cookies__content">
              <Typography variant="s1" weight="bold" color={colors.neutrals[700]}>
                {intl.formatMessage(messages.content.titleCookies)}
              </Typography>
              <Typography variant="s1" color={colors.neutrals[700]}>
                {intl.formatMessage(messages.content.descriptions)}
                <button
                  type="button"
                  onClick={() => setOpen((prevStep) => !prevStep)}
                  className="button__link">
                  {intl.formatMessage(messages.content.link)}
                </button>
              </Typography>
            </div>
            <div className="cookies__buttons">
              <Button
                variant="outlined"
                onClick={() => handleReject()}
                type="button"
                size="large"
                iconPosition="right"
                className="button__decline">
                {intl.formatMessage(messages.content.button.decline)}
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleAccept()}
                className="button__accept">
                {intl.formatMessage(messages.content.button.accept)}
              </Button>
            </div>
          </div>
          <div className="cookies__overlay" />
        </div>
      )}
      <ModalHtml open={openModal} title={modalTitle} html={url} setModalOpen={setOpen} />

      <style jsx>{CardCookieLocalStyles}</style>
    </>
  )
}
