import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { cookiesService } from 'services/services/cookies'

import { CardCookieComponent } from './cardCookie.component'
import messages from './cardCookie.messages'

export const CardCookieContainer = () => {
  const intl = useIntl()
  const [modalHtml, setModalHtml] = useState<string>()
  const { onError } = useNotification()

  const getDetailsCookies = async () => {
    try {
      const { data } = await cookiesService.getDetailsCookies()
      setModalHtml(data.content.url)
    } catch (error) {
      onError(intl.formatMessage(messages.content.error))
      // eslint-disable-next-line no-console
      console.error('getCookie --> error\n', error)
    }
  }

  useEffect(() => {
    void getDetailsCookies()
  }, [])

  if (!modalHtml) return null
  return <CardCookieComponent url={modalHtml} />
}
