import { useIntl } from 'react-intl'

import CardLeftImage1 from 'components/molecules/CardLeftImage1'
import cloudlabsBlueLogo from 'public/images/blueCloudlabs.png'

import messages from '../../aboutus.messages'
import { AboutUsStyles } from '../../aboutus.styles'

export const Hero = () => {
  const intl = useIntl()

  return (
    <>
      <div className="container_fluid">
        <div className="container aboutUs__hero">
          <CardLeftImage1
            title={intl.formatMessage(messages.cloudlabs.title)}
            description1={intl.formatMessage(messages.cloudlabs.description1)}
            subtitle={intl.formatMessage(messages.cloudlabs.subtitle)}
            description2={intl.formatMessage(messages.cloudlabs.description2)}
            icon="/stemLogo.svg"
            image={cloudlabsBlueLogo.src}
          />
        </div>
      </div>
      <style jsx>{AboutUsStyles}</style>
    </>
  )
}
