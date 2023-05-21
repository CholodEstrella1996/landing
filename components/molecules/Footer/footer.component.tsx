import React from 'react'

import { DownloadOutlined } from '@mui/icons-material'
import Image from 'next/image'
import router from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.model'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'
import { LanguagesResponse } from 'services/models/languages/response.model'

import FooterSocialMedia from './components/SocialMedia'
import messages from './footer.messages'
import { FooterLocalStyles } from './footer.styles'

type Language = LanguagesResponse['getLanguages']['content'][number]

type Prop = {
  listLanguage: Language[]
}

const { colors, mediaQueries } = theme

export const FooterComponent = ({ listLanguage }: Prop) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const navigatePage = async (): Promise<void> => {
    await router.replace(`/downloads`)
  }

  const languageList: OptionProps[] = listLanguage.map(({ id, name, languageCode }: Language) => ({
    id,
    value: languageCode,
    label: name,
  }))

  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer__container">
        <section className="footer__text">
          <Image src="/brand.svg" width="80px" height="40px" alt="logo" />

          <Typography variant="c1" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.brand.copyright, { year: currentYear })}
          </Typography>
        </section>
        <section className="footer__clickable">
          <div className="footer__buttons">
            <Select
              name="languageCode"
              label=""
              size="small"
              options={languageList}
              isSearchable={isTablet}
              fullWidth
            />
            <Button
              variant="outlined"
              size="medium"
              onClick={() => {
                void navigatePage()
              }}
              icon={<DownloadOutlined />}
              iconPosition="left">
              {intl.formatMessage(messages.download)}
            </Button>
          </div>
          <div className="footer__social">
            <FooterSocialMedia />
          </div>
        </section>
      </footer>

      <style jsx>{FooterLocalStyles}</style>
    </>
  )
}
