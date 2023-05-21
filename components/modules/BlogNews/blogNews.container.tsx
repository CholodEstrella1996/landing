import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { postsService } from 'services/services/posts'

import BlogNewsComponent from './blogNews.component'
import { BlogNewsProps, Card } from './blogNews.model'

const BlogNews = (props: BlogNewsProps) => {
  const { type, image, title } = props
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [rowsPerPage, setRowsPerPage] = useState<number>(9)
  const [pages, setPages] = useState<number>(0)
  const [postReq, setPostReq] = useState({
    pageNumber: 0,
    pageSize: 9,
  })
  const router = useRouter()

  const handleChangePage = (newPage: number) => {
    setPostReq({
      pageNumber: newPage,
      pageSize: rowsPerPage,
    })
  }

  const handleChangePagination = (rowsPage: number) => {
    setRowsPerPage(rowsPage)
    setPostReq({
      pageNumber: 0,
      pageSize: rowsPage,
    })
  }

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await postsService.getPosts(postReq)
        setPages(response.data.totalElements)
        setCards(response.data.content)
        setLoading(false)
      } catch (error) {
        await router.push('error/500')
      }
    }
    void getPosts()
  }, [postReq, router])

  return (
    <BlogNewsComponent
      type={type}
      image={image}
      title={title}
      cards={cards}
      totalPages={pages}
      pageChange={handleChangePage}
      rowsPaginationChange={handleChangePagination}
      isLoading={loading}
    />
  )
}
export default BlogNews
