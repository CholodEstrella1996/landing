import React from 'react'

import { HomeOutline } from '@easy-eva-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ImageTitle1 from 'components/molecules/ImageTitle1'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from './errorPage.messages'
import { ErrorPageProps } from './errorPage.model'
import { ErrorStyles } from './errorPage.styles'

const { colors, mediaQueries } = theme

const ErrorPageContent = ({ errorType }: ErrorPageProps) => {
  const isDesktop = useMediaQuery(mediaQueries.desktop)
  const intl = useIntl()
  const title =
    (errorType === 404 && intl.formatMessage(messages.error.e404.title)) ||
    (errorType === 500 && intl.formatMessage(messages.error.e500.title)) ||
    (errorType === 'invitation' && intl.formatMessage(messages.error.invitation.title)) ||
    ''
  const descrition1 =
    (errorType === 404 && intl.formatMessage(messages.error.e404.notFoundText1)) ||
    (errorType === 500 && intl.formatMessage(messages.error.e500.serverErrorText1)) ||
    (errorType === 'invitation' && intl.formatMessage(messages.error.invitation.description)) ||
    ''
  const descrition2 =
    (errorType === 404 && intl.formatMessage(messages.error.e404.notFoundText2)) ||
    (errorType === 500 && intl.formatMessage(messages.error.e500.serverErrorText2)) ||
    ''

  return (
    <>
      <div className="error__container">
        <ImageTitle1
          title={title}
          image={
            <Image
              src={`/error_${errorType}.png`}
              alt={`Error ${errorType}`}
              width={500}
              height={500}
              layout="responsive"
              placeholder="blur"
              blurDataURL={`/error_${errorType}.png`}
            />
          }
          position="left">
          <div className="spacing">
            <Typography
              variant={isDesktop ? 'h6' : 'p1'}
              color={colors.neutrals[400]}
              weight={isDesktop ? 'bold' : 'regular'}>
              {descrition1}
            </Typography>
            <Typography
              variant={isDesktop ? 'h6' : 'p1'}
              color={colors.neutrals[400]}
              weight={isDesktop ? 'bold' : 'regular'}>
              {descrition2}
            </Typography>
          </div>
          <Link href="/" passHref>
            <Button
              variant="contained"
              className="button"
              size="medium"
              icon={<HomeOutline />}
              iconPosition="left">
              {intl.formatMessage(messages.buttonText.buttonMessage)}
            </Button>
          </Link>
        </ImageTitle1>
      </div>

      <style jsx>{ErrorStyles}</style>
    </>
  )
}

export default ErrorPageContent
