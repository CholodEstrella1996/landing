import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ImageTitle1 from 'components/molecules/ImageTitle1'
import { STORE_URL } from 'constants/api.constants'

import { HeroStyles } from './hero.styles'
import messages from '../../home.messages'

export type HeroComponentProps = {
  title: string
  description: string
  image: string
}

const { colors } = theme

export const HeroComponent = ({ title, description, image }: HeroComponentProps) => {
  const intl = useIntl()

  const router = useRouter()
  const navigatePage = async (link: string): Promise<void> => {
    await router.push(link)
  }
  return (
    <div className="container">
      <div className="hero">
        <ImageTitle1
          title={title}
          image={
            <Image
              alt={title}
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={image || '/brand.svg'}
              layout="responsive"
              src={image || '/brand.svg'}
            />
          }
          position="left">
          <Typography variant="s1" color={colors.neutrals[500]}>
            {description}
          </Typography>
          <Button
            size="large"
            variant="contained"
            className="button__demo"
            onClick={() => {
              void navigatePage('/request-demo')
            }}>
            {intl.formatMessage(messages.homePage.hero.button.demo)}
          </Button>
          <Button
            size="medium"
            variant="outlined"
            className="button__portfolio"
            onClick={() => void navigatePage(`${STORE_URL || ''}/explore-labs`)}>
            {intl.formatMessage(messages.homePage.hero.button.portfolio)}
          </Button>
        </ImageTitle1>
      </div>

      <style jsx>{HeroStyles}</style>
    </div>
  )
}
