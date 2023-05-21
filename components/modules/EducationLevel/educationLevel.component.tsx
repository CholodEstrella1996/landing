import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import HubspotForm from 'components/atoms/HubspotForm'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import CardColumnImage1 from 'components/molecules/CardColumnImage1'
import ImageTitle1 from 'components/molecules/ImageTitle1'
import ModalHtml from 'components/molecules/ModalHtml'
import { STORE_URL } from 'constants/api.constants'
import { useMediaQuery } from 'hooks/use-media-query'

import ExploreCard from './components/ExploreCard'
import messages from './educationLevel.messages'
import { EducationProps } from './educationLevel.model'
import { EducationLevelStyles } from './educationLevel.styles'

const { colors, mediaQueries } = theme
export default function EducationLevelComponent({
  heroImage,
  title,
  description,
  cards,
}: EducationProps) {
  const [openModal, setOpenModal] = useState(false)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()

  const router = useRouter()
  const level = router.asPath.split('/')[1].split('-')[0]

  const handleModal = () => setOpenModal((prevState) => !prevState)

  const handleLink = (link: string) => {
    void router.push(link)
  }

  return (
    <>
      <div className="levels__container">
        <ImageTitle1
          title={title}
          image={
            <Image
              alt=""
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL={heroImage}
              layout="responsive"
              src={heroImage ?? 'heroPrimary.png'}
            />
          }>
          <Typography variant={isTablet ? 'h5' : 's1'} color={colors.neutrals[400]}>
            {description}
          </Typography>
        </ImageTitle1>

        <div className="levels__content">
          <div className="levels__cards">
            {cards.map((card) => (
              <CardColumnImage1
                key={card.id}
                title={intl.formatMessage(card.title)}
                src={card.image ?? '/brand.svg'}
                className="levels__card__item"
              />
            ))}
          </div>

          <div className="explore">
            <div className="explore__image">
              <Image
                alt=""
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="/rocket.png"
                layout="responsive"
                src="/rocket.png"
              />
            </div>
            <ExploreCard
              title={intl.formatMessage(messages.explore.title)}
              subtitle={intl.formatMessage(messages.explore.description)}
              button={intl.formatMessage(messages.explore.button)}
              onClick={() => handleLink(`${STORE_URL || ''}/explore-labs`)}
            />
            {level === 'primary' && (
              <ExploreCard
                title={intl.formatMessage(messages.primary.demo.title)}
                subtitle={intl.formatMessage(messages.primary.demo.description)}
                button={intl.formatMessage(messages.primary.demo.button)}
                onClick={() => handleLink('/request-demo')}
              />
            )}
            {level === 'secondary' && (
              <ExploreCard
                title={intl.formatMessage(messages.secondary.demo.title)}
                subtitle={intl.formatMessage(messages.secondary.demo.description)}
                button={intl.formatMessage(messages.secondary.demo.button)}
                onClick={() => handleLink('/request-demo')}
              />
            )}
            {level === 'high' && (
              <ExploreCard
                title={intl.formatMessage(messages.high.demo.title)}
                subtitle={intl.formatMessage(messages.high.demo.description)}
                button={intl.formatMessage(messages.high.demo.button)}
                onClick={handleModal}
              />
            )}
          </div>
        </div>
      </div>
      <ModalHtml
        open={openModal}
        title={intl.formatMessage(messages.hubspotForm.title)}
        setModalOpen={setOpenModal}>
        <HubspotForm open={openModal} onClose={handleModal} />
      </ModalHtml>
      <style jsx>{EducationLevelStyles}</style>
    </>
  )
}
