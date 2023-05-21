import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { PostsResponse } from 'services/models/posts/response.model'
import { GetPostsParams, postsService } from 'services/services/posts'

import AboutUsComponent from './aboutus.component'
import messages from './aboutus.messages'

type Card = PostsResponse['getPosts']['content'][number]

const AboutUs = () => {
  const [cards, setCards] = useState<Card[]>([])

  const { onError } = useNotification()

  const intl = useIntl()

  useEffect(() => {
    const fetchHighlight = async () => {
      const paramsRequest: GetPostsParams = {
        type: 'news',
        pageNumber: 0,
        pageSize: 3,
        tags: 'highlight',
      }
      try {
        const response = await postsService.getPosts(paramsRequest)
        setCards(response.data.content)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('getPosts --> error\n', error)
        onError(intl.formatMessage(messages.error.response))
      }
    }
    void fetchHighlight()
  }, [])

  return <AboutUsComponent cards={cards} />
}

export default AboutUs
