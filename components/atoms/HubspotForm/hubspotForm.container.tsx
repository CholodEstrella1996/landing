import React, { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { hubspotService } from 'services/services/hubspot'

import HubspotForm from './hubspotForm.component'
import messages from './hubspotForm.messages'

type Props = {
  open: boolean
  onClose: () => void
}

const HubspotFormContainer = ({ open, onClose }: Props) => {
  const [portalId, setPortalId] = useState<string | null>(null)
  const [formId, setFormId] = useState<string | null>(null)

  const { onError } = useNotification()

  const intl = useIntl()

  useEffect(() => {
    const getHubspotForm = async () => {
      try {
        const { data } = await hubspotService.getForm()
        setPortalId(data.content[0].portalId)
        setFormId(data.content[0].externalFormId)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('getForm --> error\n', err)
        onClose()
        onError(intl.formatMessage(messages.error.response))
      }
    }
    getHubspotForm().finally(() => {})
  }, [])

  if (!portalId || !formId) return null

  return <HubspotForm portalId={portalId} formId={formId} open={open} />
}

export default HubspotFormContainer
