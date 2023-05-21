import { useEffect, useState } from 'react'

import { PostsResponse } from 'services/models/posts/response.model'
import { postsService } from 'services/services/posts'

import BlogNewsDetailComponent from './blogNewsDetail.component'

type Props = {
  id: number
}

const BlogDetail = ({ id }: Props) => {
  const [dataDetail, setDataDetail] = useState<PostsResponse['getPostById']>()
  const [isLoading, setLoading] = useState(true)
  const getPosts = async () => {
    try {
      const { data } = await postsService.getPostById(id)
      setDataDetail(data)
      setLoading(false)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  useEffect(() => {
    void getPosts()
  }, [id])

  return dataDetail ? <BlogNewsDetailComponent detail={dataDetail} isLoading={isLoading} /> : null
}

export default BlogDetail
