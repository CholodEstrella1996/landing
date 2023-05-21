import Image from 'next/image'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import DEFAULT_IMG from 'public/genericLabs.jpg'

import { CardNewsProps } from '../blogNews.model'
import { BlogNewsStyles } from '../blogNews.styles'

const { colors } = theme
export const CardNews = (props: CardNewsProps) => {
  const { type, title, date, pictureUrl } = props
  const intl = useIntl()
  return (
    <>
      <div className="card-news">
        <div className="card-news__image ">
          <div className="card-news__section">{type}</div>
          <Image
            src={pictureUrl || DEFAULT_IMG.src}
            alt={title}
            width="500"
            height="500"
            placeholder="blur"
            blurDataURL={pictureUrl || DEFAULT_IMG.blurDataURL}
            layout="responsive"
          />
        </div>
        <div className="card-news__content">
          <div className="card-news__content--capitalized">
            <Typography variant="s2" color={colors.neutrals[300]} weight="regular">
              {intl.formatDate(date)}
            </Typography>
          </div>
          <Typography variant="h6" weight="bold" color={colors.neutrals[500]}>
            {title}
          </Typography>
        </div>
      </div>
      <style jsx>{BlogNewsStyles}</style>
    </>
  )
}
