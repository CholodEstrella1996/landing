import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import NewsDetail from '../../components/modules/BlogNewsDetail'

const NewsDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return id !== undefined ? <NewsDetail id={Number(id)} /> : null
}

export default NewsDetailPage
