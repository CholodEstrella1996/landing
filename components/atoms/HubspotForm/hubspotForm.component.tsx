import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form'
import { useIntl } from 'react-intl'

import Dialog from 'components/molecules/Dialog'

import messages from './hubspotForm.messages'
import { HubspotFormStyles } from './hubspotForm.styles'

type Props = {
  open: boolean
  portalId: string
  formId: string
}

const HubspotForm = ({ open, portalId, formId }: Props) => {
  const { error } = useHubspotForm({
    portalId,
    formId,
    target: '#my-hubspot-form',
  })
  const intl = useIntl()

  if (error) {
    return (
      <div style={{ height: '100%' }}>
        <Dialog message={intl.formatMessage(messages.error.response)} />
      </div>
    )
  }

  return (
    <>
      {open && <div id="my-hubspot-form" className="contactForm__form" />}
      <style jsx>{HubspotFormStyles}</style>
    </>
  )
}

export default HubspotForm
