import { useIntl } from 'react-intl'

import messages from 'components/modules/EducationLevel/educationLevel.messages'
import { cardPrimaryMocks } from 'components/modules/EducationLevel/mocks'
import heroPrimaryImage from 'public/heroPrimary.png'

import EducationLevel from '../components/modules/EducationLevel'

const EducationLevelPage = () => {
  const intl = useIntl()
  return (
    <EducationLevel
      heroImage={heroPrimaryImage.src}
      title={intl.formatMessage(messages.primary.title)}
      description={intl.formatMessage(messages.primary.description)}
      cards={cardPrimaryMocks}
    />
  )
}

export default EducationLevelPage
