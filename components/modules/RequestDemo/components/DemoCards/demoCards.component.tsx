import {
  BookOutlined,
  CallOutlined,
  GamepadOutlined,
  NavigationOutlined,
  SettingsOutlined,
  VideoLibraryOutlined,
} from '@mui/icons-material'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'

import messages from '../../requestDemo.messages'
import { DemoCardsProps } from '../../requestDemo.model'
import { RequestDemoStyles } from '../../requestDemo.styles'
import DemoCard from '../DemoCard'

type Prop = {
  demoSubscription: () => Promise<void>
}

const INDEPENDENT_TEACHER = 'independent-teacher'
const INDEPENDENT_STUDENT = 'independent-student'
const PARENT = 'family-parent'
const { colors } = theme
export const DemoCardsComponent = ({ demoSubscription }: Prop) => {
  const intl = useIntl()

  const demoCardsMock: DemoCardsProps = {
    content: [
      {
        id: 1,
        avatar: '/images/demo/demo-01.svg',
        title: intl.formatMessage(messages.requestDemo.cards.first.title),
        description: intl.formatMessage(messages.requestDemo.cards.first.description),
        items: [
          {
            id: 1,
            icon: <GamepadOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.first.items.one.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.first.items.one.subtitle),
          },
          {
            id: 2,
            icon: <BookOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.first.items.two.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.first.items.two.subtitle),
          },
          {
            id: 3,
            icon: <VideoLibraryOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.first.items.three.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.first.items.three.subtitle),
          },
        ],
        button: {
          title: intl.formatMessage(messages.requestDemo.cards.first.button),
          type: 'register',
          enable: [INDEPENDENT_TEACHER, INDEPENDENT_STUDENT],
        },
      },
      {
        id: 2,
        avatar: '/images/demo/demo-02.svg',
        title: intl.formatMessage(messages.requestDemo.cards.second.title),
        description: intl.formatMessage(messages.requestDemo.cards.second.description),
        items: [
          {
            id: 1,
            icon: <GamepadOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.second.items.one.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.second.items.one.subtitle),
          },
          {
            id: 2,
            icon: <BookOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.second.items.two.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.second.items.two.subtitle),
          },
          {
            id: 3,
            icon: <VideoLibraryOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.second.items.three.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.second.items.three.subtitle),
          },
        ],
        button: {
          title: intl.formatMessage(messages.requestDemo.cards.second.button),
          type: 'register',
          enable: [PARENT],
        },
      },
      {
        id: 3,
        avatar: '/images/demo/demo-03.svg',
        title: intl.formatMessage(messages.requestDemo.cards.third.title),
        description: intl.formatMessage(messages.requestDemo.cards.third.description),
        items: [
          {
            id: 1,
            icon: <CallOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.third.items.one.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.third.items.one.subtitle),
          },
          {
            id: 2,
            icon: <NavigationOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.third.items.two.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.third.items.two.subtitle),
          },
          {
            id: 3,
            icon: <SettingsOutlined fontSize="large" sx={{ color: colors.primary[500] }} />,
            title: intl.formatMessage(messages.requestDemo.cards.third.items.three.title),
            subtitle: intl.formatMessage(messages.requestDemo.cards.third.items.three.subtitle),
          },
        ],
        button: {
          title: intl.formatMessage(messages.requestDemo.cards.third.button),
          type: 'form',
        },
      },
    ],
  }

  return (
    <>
      <div className="request-demo__items">
        <div className="demo__items--row">
          <DemoCard content={demoCardsMock.content[0]} demoSubscription={demoSubscription} />
          <DemoCard content={demoCardsMock.content[1]} demoSubscription={demoSubscription} />
        </div>
        <DemoCard content={demoCardsMock.content[2]} />
      </div>
      <style jsx>{RequestDemoStyles}</style>
    </>
  )
}
