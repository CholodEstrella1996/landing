import { useState } from 'react'

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import { CircularProgress, Divider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import footerMessages from 'components/molecules/Footer/footer.messages'
import ImageTitle1 from 'components/molecules/ImageTitle1'
import { useFallbackImage } from 'hooks/useFallbackImage'
import successImage from 'public/successDownload.png'
import tabletImage from 'public/tabletCloudlab.png'
import { DownloadsResponse } from 'services/models/downloads/response.model'

import DownloadButton from './components/downloadButton.component'
import messages from './downloads.messages'
import { DownloadStyles } from './downloads.styles'

type Platform = Props['data']['content'][number]['platformName']

type Props = {
  data: DownloadsResponse['getPlatforms']
  isLoading: boolean
}

const { colors } = theme

const DownloadsContent = ({ data, isLoading }: Props) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState(0)
  const { content } = data
  const intl = useIntl()
  const { withFallback } = useFallbackImage()

  const handleDownload = (platform: Platform): void => {
    const platforms = {
      Windows: () => {
        setShowSuccess(true)
      },
      Mac: () => {
        setShowSuccess(true)
      },
      IOS: () => {
        setShowSuccess(true)
      },
      Android: () => {
        setShowSuccess(true)
      },
    }

    platforms[platform]()
    setSelectedPlatform(content.findIndex((item) => item.platformName === platform))
  }

  return (
    <>
      {!isLoading ? (
        <div className="download__container">
          {!showSuccess ? (
            <div className="download__content">
              <ImageTitle1
                title={intl.formatMessage(messages.downloads.title)}
                position="left"
                image={
                  <Image
                    alt={intl.formatMessage(messages.downloads.title)}
                    width={500}
                    height={500}
                    blurDataURL={tabletImage.src}
                    placeholder="blur"
                    layout="responsive"
                    {...withFallback(tabletImage.src)}
                  />
                }>
                <Typography variant="s1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.downloads.subtitle)}
                </Typography>
              </ImageTitle1>

              <div className="download__card">
                <Typography
                  color={colors.primary[500]}
                  variant="h5"
                  weight="bold"
                  className="card__title">
                  {intl.formatMessage(footerMessages.download)}
                </Typography>
                <Divider />
                <div className="download__card__content">
                  {content.length > 0 &&
                    content.map(
                      (item) =>
                        item.downloadable && (
                          <DownloadButton
                            key={item.id}
                            title={intl.formatMessage(messages.platforms[item.platformName])}
                            icon={<DownloadOutlinedIcon />}
                            content={item}
                            onDownloaded={handleDownload}
                          />
                        ),
                    )}
                </div>
              </div>
              <Typography variant="s2" color={colors.neutrals[400]} className="card__subtitle">
                {intl.formatMessage(messages.downloads.footer)}
              </Typography>
            </div>
          ) : (
            <ImageTitle1
              title={intl.formatMessage(messages.success.title)}
              position="left"
              image={
                <Image
                  alt={intl.formatMessage(messages.downloads.title)}
                  width={500}
                  height={500}
                  blurDataURL={successImage.src}
                  placeholder="blur"
                  layout="responsive"
                  {...withFallback(successImage.src)}
                />
              }
              className="imageTitle__main">
              <Typography variant="s1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.success.subtitle)}
              </Typography>
              <div className="card__link">
                <Typography variant="p2" color={colors.primary[500]}>
                  <a href={content[selectedPlatform].downloadable.url}>
                    {content[selectedPlatform].downloadable.url}
                  </a>
                </Typography>
                <Link href="/">
                  <Button variant="contained" className="returnButton" size="medium">
                    {intl.formatMessage(messages.redirect.button)}
                  </Button>
                </Link>
              </div>
            </ImageTitle1>
          )}
        </div>
      ) : (
        <div className="download__container circular__loading">
          <CircularProgress />
        </div>
      )}
      <style jsx>{DownloadStyles}</style>
    </>
  )
}

export default DownloadsContent
