import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import HubspotForm from 'components/atoms/HubspotForm'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ModalHtml from 'components/molecules/ModalHtml'
import { STORE_URL } from 'constants/api.constants'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../requestDemo.messages'
import { DemoContent } from '../../requestDemo.model'
import { RequestDemoStyles } from '../../requestDemo.styles'

type Props = {
  content: DemoContent
  demoSubscription?: () => Promise<void>
}

const { colors, mediaQueries } = theme
export const DemoCardComponent = ({ content, demoSubscription }: Props) => {
  const { avatar, button, description, items, title } = content

  const isTablet = useMediaQuery(mediaQueries.tablet)
  const [openModal, setOpenModal] = useState(false)
  const intl = useIntl()

  const { user } = useAppContext()
  const profile = user ? user.role?.find((role) => role)?.name : 'no-role'

  const isAllowedProfile = button.enable?.includes(String(profile))
  const hasSubscription = Boolean(user?.subscriptions)
  const disableButton = user ? !isAllowedProfile || hasSubscription : false

  const handleModal = () => setOpenModal((prevState) => !prevState)

  const router = useRouter()
  const registerPage = async (): Promise<void> => {
    if (user && demoSubscription) return demoSubscription()
    return void router.push(`${STORE_URL}/registration?request-demo=true`)
  }

  return (
    <>
      <div className="demo__card">
        <div className="card__header">
          <div className="card__header__image">
            <Image src={avatar} width={300} height={300} alt="" />
          </div>
          <Typography variant={isTablet ? 'h3' : 'h5'} color={colors.primary[500]}>
            {title}
          </Typography>
        </div>
        <div className="card__content">
          <Typography variant="p1" color={colors.neutrals[600]}>
            {description}
          </Typography>
          <ul className="card__content__items">
            {items.length &&
              items.map((item) => (
                <li key={item.id}>
                  <div className="item__icon">{item.icon}</div>
                  <div className="item__title">
                    <Typography variant="s1" color={colors.neutrals[800]}>
                      {item.title}
                    </Typography>
                    <Typography variant="p1" color={colors.neutrals[600]}>
                      {item.subtitle}
                    </Typography>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="space-adjuster" />
        {button.type === 'register' ? (
          <Button
            size="large"
            variant="contained"
            className="button__demo"
            disabled={disableButton}
            onClick={() => void registerPage()}>
            {button.title}
          </Button>
        ) : (
          <>
            <Button size="large" variant="contained" className="button__demo" onClick={handleModal}>
              {button.title}
            </Button>
            <ModalHtml
              open={openModal}
              title={intl.formatMessage(messages.requestDemo.hubspotForm.title)}
              setModalOpen={setOpenModal}>
              <HubspotForm open={openModal} onClose={handleModal} />
            </ModalHtml>
          </>
        )}
      </div>
      <style jsx>{RequestDemoStyles}</style>
    </>
  )
}
