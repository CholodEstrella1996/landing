import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import HomeIcon from '@mui/icons-material/Home'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

import { PLATFORM_URL, STORE_URL } from './api.constants'
import messages from '../components/molecules/Header/header.messages'
import { Page } from '../components/molecules/Header/header.models'

const desktopPages: Page[] = [
  { id: 1, name: messages.menu.home, url: '/' },
  { id: 2, name: messages.menu.students, url: '/secondary-education' },
  { id: 3, name: messages.menu.parents, url: '/primary-education' },
  { id: 4, name: messages.menu.institutions, url: '/high-education' },
  {
    id: 5,
    name: messages.menu.about,
    url: '',
    subPages: [
      { id: 9, name: messages.menu.news, url: '/news' },
      {
        id: 10,
        name: messages.menu.aboutUs,
        url: '/about-us',
      },
    ],
  },
  { id: 6, name: messages.menu.support, url: '/support' },
]

const mobilePages: Page[] = [
  { id: 1, name: messages.menu.home, url: '/', icon: HomeIcon },
  { id: 9, name: messages.menu.news, url: '/news', icon: MenuBookIcon },
  {
    id: 10,
    name: messages.menu.aboutUs,
    url: '/about-us',
    icon: InfoOutlinedIcon,
  },
  {
    id: 6,
    name: messages.menu.support,
    url: '/support',
    icon: SupportAgentIcon,
  },
  {
    id: 7,
    name: messages.menu.downloadApp,
    url: '/downloads',
    icon: CloudDownloadOutlinedIcon,
  },
]

const platformLink = PLATFORM_URL
const storeLink = STORE_URL

const whatsAppSupport =
  'https://api.whatsapp.com/send/?phone=%2B13524190783&text=Escr%C3%ADbenos+para+aclarar+tus+dudas&app_absent=0'

const freshdeskSupport = 'https://cloudlabs.freshdesk.com/support/home'
const helpDeskEmail = 'mailto:helpdesk@cloudlabs.us'

export {
  desktopPages,
  mobilePages,
  platformLink,
  storeLink,
  whatsAppSupport,
  freshdeskSupport,
  helpDeskEmail,
}
