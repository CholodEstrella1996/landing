import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { PLATFORM_URL } from 'constants/api.constants'
import { demoService } from 'services/services/demo'

import { RequestDemoComponent } from './requestDemo.component'
import messages from './requestDemo.messages'

export const RequestDemoContainer = () => {
  const intl = useIntl()
  const router = useRouter()

  const postDemoSubscription = async () => {
    try {
      await demoService.postDemoSubscription()
      void router.push(PLATFORM_URL)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('postDemoSubscription error >>: ', error)
    }
  }
  return (
    <RequestDemoComponent
      title={intl.formatMessage(messages.requestDemo.hero.title)}
      description={intl.formatMessage(messages.requestDemo.hero.description)}
      image="/rocket.png"
      demoSubscription={postDemoSubscription}
    />
  )
}
