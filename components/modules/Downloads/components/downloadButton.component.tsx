import React from 'react'

import Image from 'next/image'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/molecules/Footer/footer.messages'
import { DownloadsResponse } from 'services/models/downloads/response.model'

import { DownloadButtonStyles } from './downloadButton.style'

type Platform = Props['content']['platformName']

type Props = {
  title: string
  icon: React.ReactNode
  content: DownloadsResponse['getPlatforms']['content'][number]

  onDownloaded: (platform: Platform) => void
}
const { colors } = theme

const DownloadButton = (props: Props) => {
  const { title, icon, content, onDownloaded } = props
  const { downloadable } = content
  const intl = useIntl()

  return (
    <>
      <div className="platform__container">
        <div className="platform__image">
          <Image
            src={`/download${content.platformName}.svg`}
            alt=""
            width={50}
            height={30}
            layout="fixed"
          />
        </div>
        <div className="platform__title">
          <Typography variant="s2" color={colors.neutrals[400]}>
            {title}
          </Typography>
          <a href={downloadable.url} download={downloadable.url}>
            <Button
              className="platform__button"
              size="medium"
              icon={icon}
              onClick={() => onDownloaded(content.platformName)}>
              {intl.formatMessage(messages.download)}
            </Button>
          </a>
        </div>
      </div>
      <style jsx>{DownloadButtonStyles}</style>
    </>
  )
}
export default DownloadButton
