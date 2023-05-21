import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'
import { CircularProgress } from '@mui/material'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import BackArrowMobile1 from 'components/atoms/BackArrowMobile1'
import Carousel from 'components/atoms/Carousel'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messagesNews from 'components/modules/BlogNews/blogNews.messages'
import { useMediaQuery } from 'hooks/use-media-query'
import { getFullImageSlides } from 'utils/helpers/editContent'

import messagesNewsDetail from './blogNewsDetail.messages'
import { BlogNewsDetailProps } from './blogNewsDetail.model'
import { BlogDetailStyles } from './blogNewsDetail.styles'

const { colors, mediaQueries } = theme

const BlogNewsDetailComponent = (props: BlogNewsDetailProps) => {
  const { detail, isLoading } = props
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()

  return (
    <>
      {isLoading ? (
        <div className="container circular__loading">
          <CircularProgress />
        </div>
      ) : (
        <div className="blog-detail__container">
          <div className="blog-detail__header">
            {isTablet ? (
              <Link href="/news" passHref>
                <a>
                  <Typography variant="s2" color={colors.primary[500]}>
                    {intl.formatMessage(messagesNews.section)}
                  </Typography>
                </a>
              </Link>
            ) : (
              <BackArrowMobile1 title={intl.formatMessage(messagesNews.section)} />
            )}
            <div className="blog-detail__header__title">
              <div className="blog-detail__header__overline">
                <div className="blog-detail__header__section">{detail.type}</div> /
                <Typography variant="s2" color={colors.neutrals[300]}>
                  {intl.formatDate(detail.date, { day: 'numeric', year: 'numeric', month: 'long' })}
                </Typography>
              </div>
              <Typography
                variant={isTablet ? 'h3' : 'h4'}
                weight="bold"
                color={colors.primary[500]}>
                {detail.title}
              </Typography>
            </div>
          </div>

          {!!detail.images.length && (
            <section className="blog-detail__carousel">
              <Carousel
                itemsPerView={3}
                loop={false}
                classname="swiper1"
                slides={getFullImageSlides(detail.images)}
              />
            </section>
          )}
          <div
            className="blog-detail__content"
            style={{ '--grid-template': detail.materials.length ? '2fr 1fr' : '3fr' }}>
            <div className="blog-detail__object">
              <object data={detail.contentUrl} title={detail.contentUrl} />
            </div>

            {!!detail.materials.length && (
              <div className="complementary">
                <div className="complementary__title">
                  <Typography variant="c1" color={colors.neutrals[500]}>
                    {intl.formatMessage(messagesNewsDetail.materails)}
                  </Typography>
                </div>
                {detail.materials.map((material) => (
                  <a
                    href={material.content.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={material.id}>
                    <div className="complementary__access">
                      <SystemUpdateAltIcon
                        sx={{ color: colors.primary[500], width: '1rem', height: '1rem' }}
                      />
                      <Typography variant="c1" color={colors.primary[500]}>
                        {material.name}
                      </Typography>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx>{BlogDetailStyles}</style>
    </>
  )
}

export default BlogNewsDetailComponent
