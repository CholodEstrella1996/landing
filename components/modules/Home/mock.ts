import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import institution1Image from 'public/images/instituciones/intituciones-1.png'
import institution10Image from 'public/images/instituciones/intituciones-10.png'
import institution11Image from 'public/images/instituciones/intituciones-11.png'
import institution12Image from 'public/images/instituciones/intituciones-12.png'
import institution13Image from 'public/images/instituciones/intituciones-13.png'
import institution14Image from 'public/images/instituciones/intituciones-14.png'
import institution15Image from 'public/images/instituciones/intituciones-15.png'
import institution16Image from 'public/images/instituciones/intituciones-16.png'
import institution17Image from 'public/images/instituciones/intituciones-17.png'
import institution2Image from 'public/images/instituciones/intituciones-2.png'
import institution3Image from 'public/images/instituciones/intituciones-3.png'
import institution4Image from 'public/images/instituciones/intituciones-4.png'
import institution5Image from 'public/images/instituciones/intituciones-5.png'
import institution6Image from 'public/images/instituciones/intituciones-6.png'
import institution7Image from 'public/images/instituciones/intituciones-7.png'
import institution8Image from 'public/images/instituciones/intituciones-8.png'
import institution9Image from 'public/images/instituciones/intituciones-9.png'
import studentProgressImage from 'public/images/onboarding/onboarding-2.png'
import digitalResourcesImage from 'public/images/onboarding/onboarding-3.png'
import challengeLearningImage from 'public/images/onboarding/onboarding-6.png'
import carousel1Image from 'public/images/otros/carousel-1.jpg'
import carousel2Image from 'public/images/otros/carousel-2.jpg'
import carousel3Image from 'public/images/otros/carousel-3.jpg'
import mathematicsImage from 'public/images/primaria/matematicas/matematica-primaria-133.png'
import biologyImage from 'public/images/secundaria/biologia/biologia-133.png'
import physicsImage from 'public/images/secundaria/fisica/fisica-133.png'
import chemistryImage from 'public/images/secundaria/quimicaGeneral/quimica-general-133.png'
import roboticImage from 'public/images/secundaria/robotica/robotica-133.png'
import agricultureImage from 'public/images/universidad/agricultura/agricultura-133.png'
import processControlImage from 'public/images/universidad/controlDeProcesos/control-de-procesos-133.png'
import electronicImage from 'public/images/universidad/electronica/electronica-133.png'

import messages from './home.messages'

const { colors } = theme

const HomeMock = () => {
  const intl = useIntl()

  const advantages = [
    {
      id: 0,
      image: carousel1Image.src,
      description: intl.formatMessage(messages.homePage.advantages.slide01),
    },
    {
      id: 1,
      image: carousel2Image.src,
      description: intl.formatMessage(messages.homePage.advantages.slide02),
    },
    {
      id: 2,
      image: carousel3Image.src,
      description: intl.formatMessage(messages.homePage.advantages.slide03),
    },
  ]

  const educationLevels = [
    {
      id: 0,
      image: mathematicsImage.src,
      description: intl.formatMessage(messages.homePage.education.primary.description),
      buttonLabel: intl.formatMessage(messages.homePage.education.primary.label),
      link: '/primary-education',
    },
    {
      id: 1,
      image: biologyImage.src,
      description: intl.formatMessage(messages.homePage.education.secondary.description),
      buttonLabel: intl.formatMessage(messages.homePage.education.secondary.label),
      link: '/secondary-education',
    },
    {
      id: 2,
      image: processControlImage.src,
      description: intl.formatMessage(messages.homePage.education.high.description),
      buttonLabel: intl.formatMessage(messages.homePage.education.high.label),
      link: '/high-education',
    },
  ]

  const institutions = [
    institution1Image,
    institution2Image,
    institution3Image,
    institution4Image,
    institution5Image,
    institution6Image,
    institution7Image,
    institution8Image,
    institution9Image,
    institution10Image,
    institution11Image,
    institution12Image,
    institution13Image,
    institution14Image,
    institution15Image,
    institution16Image,
    institution17Image,
  ]

  const learningEnvironments = [
    {
      id: 0,
      image: challengeLearningImage.src,
      title: intl.formatMessage(messages.homePage.learning.item01.title),
      description: intl.formatMessage(messages.homePage.learning.item01.description),
    },
    {
      id: 1,
      image: studentProgressImage.src,
      title: intl.formatMessage(messages.homePage.learning.item02.title),
      description: intl.formatMessage(messages.homePage.learning.item02.description),
    },
    {
      id: 2,
      image: digitalResourcesImage.src,
      title: intl.formatMessage(messages.homePage.learning.item03.title),
      description: intl.formatMessage(messages.homePage.learning.item03.description),
    },
  ]

  const areas = [
    {
      id: 3,
      name: 'Agricultura',
      description:
        'La biología es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: agricultureImage.src,
      bgcolor: colors.science[100],
      color: colors.science[900],
    },
    {
      id: 4,
      name: 'Electrónica',
      description:
        'La ciencia social es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: electronicImage.src,
      bgcolor: colors.primary[100],
      color: colors.primary[900],
    },
    {
      id: 5,
      name: 'Química',
      description:
        'La ciencia natural es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: chemistryImage.src,
      bgcolor: colors.mathematics[100],
      color: colors.mathematics[900],
    },
    {
      id: 6,
      name: 'Física',
      description:
        'La ciencia de la salud es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: physicsImage.src,
      bgcolor: colors.technology[100],
      color: colors.technology[900],
    },
    {
      id: 1,
      name: 'Matemática',
      description:
        'La matemática es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: mathematicsImage.src,
      bgcolor: colors.mathematics[100],
      color: colors.mathematics[900],
    },
    {
      id: 7,
      name: 'Robótica',
      description:
        'La ciencia de la ingeniería es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: roboticImage.src,
      bgcolor: colors.engineering[100],
      color: colors.engineering[900],
    },
    {
      id: 2,
      name: 'Biología',
      description:
        'La biología es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: biologyImage.src,
      bgcolor: colors.science[100],
      color: colors.science[900],
    },
    {
      id: 8,
      name: 'Mecánica',
      description:
        'La ciencia de la ingeniería es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: mathematicsImage.src,
      bgcolor: colors.engineering[100],
      color: colors.engineering[900],
    },
    {
      id: 9,
      name: 'Biomédica',
      description:
        'La ciencia de la ingeniería es un conjunto de lenguajes formales que pueden usarse como herramienta para plantear problemas en contextos específicos.',
      iconUrl: mathematicsImage.src,
      bgcolor: colors.science[100],
      color: colors.science[900],
    },
  ]

  return { advantages, educationLevels, institutions, learningEnvironments, areas }
}
export default HomeMock
