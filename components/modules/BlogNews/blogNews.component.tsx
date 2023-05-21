import { CircularProgress, Divider } from '@mui/material'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import Pagination from 'components/molecules/Pagination'

import messages from './blogNews.messages'
import { BlogNewsProps } from './blogNews.model'
import { BlogNewsStyles } from './blogNews.styles'
import CardNews from './CardNews'

const { colors } = theme

const BlogNewsComponent = (props: BlogNewsProps) => {
  const { type, cards, isLoading, totalPages, pageChange, rowsPaginationChange } = props

  const intl = useIntl()

  return (
    <div className="container_fluid">
      <div className="container">
        <div className="pathName">
          <Typography variant="s2" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.section)}
          </Typography>
          <Typography variant="h3" color={colors.primary[500]}>
            {intl.formatMessage(messages.title)}
          </Typography>
        </div>
        <Divider variant="middle" />
        {isLoading ? (
          <div className="circular__loading">
            <CircularProgress />
          </div>
        ) : (
          <div className="content">
            {!!cards.length &&
              cards.map((card) => (
                <Link key={card.id} href={`${type}/[id]`} as={`${type}/${card.id}`}>
                  <a href={`${type}/${card.id}`}>
                    <CardNews
                      title={card.title}
                      type={card.type}
                      date={card.date}
                      pictureUrl={card.pictureUrl}
                    />
                  </a>
                </Link>
              ))}
          </div>
        )}

        {!isLoading && (
          <Pagination
            totalPages={totalPages}
            activePage={0}
            countPerPage={9}
            pageChange={pageChange}
            rowsPaginationChange={rowsPaginationChange}
            label={intl.formatMessage(messages.pagination)}
          />
        )}
      </div>

      <style jsx>{BlogNewsStyles}</style>
    </div>
  )
}

export default BlogNewsComponent
