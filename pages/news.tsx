import type { NextPage } from 'next'
import { useIntl } from 'react-intl'

import messages from 'components/modules/BlogNews/blogNews.messages'

import BlogNews from '../components/modules/BlogNews'

const NewsPage: NextPage = () => {
  const intl = useIntl()
  return (
    <BlogNews
      type="news"
      image="/imageNews.jpg"
      title={intl.formatMessage(messages.title)}
      cards={[]}
      totalPages={0}
      isLoading={false}
    />
  )
}
export default NewsPage
