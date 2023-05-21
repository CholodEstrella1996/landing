import React from 'react'

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { Typography } from 'components/atoms/Typography'

import { HubspotSuccessStyles } from './hubspotSuccess.styles'
import messages from '../hubspotForm.messages'

const HubspotSuccess = () => {
  const intl = useIntl()
  return (
    <div className="success__container">
      <div className="success__content">
        <Typography variant="h5">{intl.formatMessage(messages.success.title)}</Typography>
        <Typography variant="p1">{intl.formatMessage(messages.success.request)}</Typography>
        <Typography variant="p1">{intl.formatMessage(messages.success.response)}</Typography>
        <Typography variant="p1">{intl.formatMessage(messages.success.thank)}</Typography>
        <Link href="/" passHref>
          <a href="/home">
            <Button icon={<ArrowForwardOutlinedIcon />} iconPosition="right">
              {intl.formatMessage(messages.success.buttonText)}
            </Button>
          </a>
        </Link>
      </div>
      <style jsx>{HubspotSuccessStyles}</style>
    </div>
  )
}

export default HubspotSuccess
