import { useIntl } from 'react-intl'

import messages from 'components/modules/EducationLevel/educationLevel.messages'
import { cardUniversityMocks } from 'components/modules/EducationLevel/mocks'
import heroHighImage from 'public/heroUniversity.png'

import EducationLevel from '../components/modules/EducationLevel'

const EducationLevelPage = () => {
  const intl = useIntl()
  return (
    <EducationLevel
      heroImage={heroHighImage.src}
      title={intl.formatMessage(messages.high.title)}
      description={intl.formatMessage(messages.high.description)}
      cards={cardUniversityMocks}
    />
  )
}

export default EducationLevelPage
