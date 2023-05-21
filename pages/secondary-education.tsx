import { useIntl } from 'react-intl'

import messages from 'components/modules/EducationLevel/educationLevel.messages'
import { cardSecondaryMocks } from 'components/modules/EducationLevel/mocks'
import welcomeToCloudLabsImage from 'public/images/onboarding/onboarding-1.png'

import EducationLevel from '../components/modules/EducationLevel'

const EducationLevelPage = () => {
  const intl = useIntl()
  return (
    <EducationLevel
      heroImage={welcomeToCloudLabsImage.src}
      title={intl.formatMessage(messages.secondary.title)}
      description={intl.formatMessage(messages.secondary.description)}
      cards={cardSecondaryMocks}
    />
  )
}
export default EducationLevelPage
