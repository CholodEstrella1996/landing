import { Headphones, EmailOutlined, WhatsApp } from '@mui/icons-material'
import { useIntl } from 'react-intl'

import Dropdown from 'components/atoms/Dropdown'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { freshdeskSupport, whatsAppSupport, helpDeskEmail } from 'constants/landingPages'

import { CardSupport } from './components/cardSupport'
import messages from './support.messages'
import { SupportDropDownInfoProps } from './support.model'
import { SupportStyles } from './support.styles'

const { colors } = theme
const SupportComponent = ({ infoDrop }: SupportDropDownInfoProps) => {
  const intl = useIntl()

  if (!infoDrop) return null
  return (
    <>
      <div className="container support__container">
        <div className="support__cards">
          <div className="support__cards__item">
            <CardSupport
              title={intl.formatMessage(messages.card.title2)}
              textButton={intl.formatMessage(messages.card.button2)}
              icon={<Headphones />}
              link={freshdeskSupport}
              color={colors.technology[500]}
              avatarUp
            />
          </div>
          <div className="support__cards__item">
            <CardSupport
              title={intl.formatMessage(messages.card.title3)}
              textButton={intl.formatMessage(messages.card.button3)}
              icon={<EmailOutlined />}
              link={helpDeskEmail}
              color={colors.engineering[500]}
              avatarUp
            />
          </div>
          <div className="support__cards__item">
            <CardSupport
              title={intl.formatMessage(messages.card.title1)}
              textButton={intl.formatMessage(messages.card.button1)}
              icon={<WhatsApp />}
              color={colors.science[500]}
              link={whatsAppSupport}
              avatarUp
            />
          </div>
        </div>

        <div className="drop__container">
          {infoDrop.map(({ id, title, subtitle }) => (
            <div className="drop__position" key={id}>
              <Dropdown title={intl.formatMessage(title)}>
                <Typography variant="s1" weight="regular" color={colors.neutrals[500]}>
                  {intl.formatMessage(subtitle)}
                </Typography>
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{SupportStyles}</style>
    </>
  )
}

export default SupportComponent
