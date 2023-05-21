import { useIntl } from 'react-intl'

import spaceshipImage from 'public/images/onboarding/dashboard.png'
import welcomeToCloudLabsImage from 'public/images/onboarding/onboarding-1.png'

import Advantages from './components/Advantages'
import EducationLevels from './components/EducationLevels'
import Hero from './components/Hero'
import Institutions from './components/Institutions'
import LearningEnvironments from './components/LearningEnvironments'
import PracticesAvailability from './components/PracticesAvailability'
import ProductsCarousel from './components/ProductsCarousel'
import messages from './home.messages'
import { HomeComponentProps } from './home.model'
import { HomeStyles } from './home.styles'

const HomeComponent = (props: HomeComponentProps) => {
  const intl = useIntl()
  const {
    data: { advantages, educationLevels, institutions, learningEnvironments },
    areas,
    editorialCurriculum,
    packages,
    fetchEditorialCurriculum,
    fetchPackages,
    isLoading,
  } = props

  return (
    <>
      <Hero
        title={intl.formatMessage(messages.homePage.hero.title)}
        description={intl.formatMessage(messages.homePage.hero.description)}
        image={welcomeToCloudLabsImage.src}
      />

      <div className="home__content">
        <Advantages data={advantages} />

        <EducationLevels data={educationLevels} />

        <Institutions
          title={intl.formatMessage(messages.homePage.institutions.title)}
          data={institutions}
        />

        <PracticesAvailability
          title={intl.formatMessage(messages.homePage.practices.title)}
          description={intl.formatMessage(messages.homePage.practices.description)}
          image={spaceshipImage.src}
        />

        <ProductsCarousel
          areas={areas}
          editorialCurriculum={editorialCurriculum}
          packages={packages}
          fetchEditorialCurriculum={fetchEditorialCurriculum}
          fetchPackages={fetchPackages}
          isLoading={isLoading}
        />

        <LearningEnvironments
          title={intl.formatMessage(messages.homePage.learning.title)}
          data={learningEnvironments}
        />
      </div>

      <style jsx>{HomeStyles}</style>
    </>
  )
}
export default HomeComponent
