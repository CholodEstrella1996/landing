import { ChevronRight } from '@mui/icons-material'
import Image from 'next/image'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { mobilePages, desktopPages } from 'constants/landingPages'
import { useMediaQuery } from 'hooks/use-media-query'

import HeaderDesktopComponent from './components/HeaderDesktop'
import HeaderMobileComponent from './components/HeaderMobile'
import headerMessages from './header.messages'

const { colors, mediaQueries } = theme

const Header = () => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()

  const button = (
    <Button
      variant="outlined"
      type="button"
      iconPosition="right"
      icon={<ChevronRight sx={{ color: `${colors.primary[500]}` }} />}>
      {intl.formatMessage(headerMessages.buttonText)}
    </Button>
  )

  const brand = (
    <Image src="/brand.svg" alt="cloudLab" width={242} height={111} layout="responsive" />
  )

  return isTablet ? (
    <HeaderDesktopComponent pages={desktopPages} button={button} icon={brand} />
  ) : (
    <HeaderMobileComponent pages={mobilePages} button={button} icon={brand} />
  )
}

export default Header
