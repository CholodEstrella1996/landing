import type { NextPage } from 'next'

import { dropDownCard } from 'constants/supportPage'

import Support from '../components/modules/Support'

const SupportPage: NextPage = () => <Support infoDrop={dropDownCard} />

export default SupportPage
