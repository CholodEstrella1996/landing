import Image from 'next/image'
import { useIntl } from 'react-intl'

import CardRightImage from 'components/atoms/CardRightImage'
import { useFallbackImage } from 'hooks/useFallbackImage'
import computerImage from 'public/images/computer.png'
import labImage from 'public/images/lab.jpg'

import messages from '../../aboutus.messages'
import { AboutUsStyles } from '../../aboutus.styles'

export const VirtualMode = () => {
  const { withFallback } = useFallbackImage()
  const intl = useIntl()

  return (
    <>
      <div className="container_fluid bg-white">
        <div className="container">
          <CardRightImage
            title={intl.formatMessage(messages.modalidad.title)}
            titleDescription={intl.formatMessage(messages.modalidad.description1)}
            subtitle={intl.formatMessage(messages.modalidad.subtitle)}
            subDescription={intl.formatMessage(messages.modalidad.description2)}
            imageLeft={
              <Image
                alt={intl.formatMessage(messages.modalidad.subtitle)}
                width="300"
                height="180"
                layout="responsive"
                placeholder="blur"
                blurDataURL={computerImage.src}
                {...withFallback(computerImage.src)}
              />
            }
            imageRight={
              <Image
                alt={intl.formatMessage(messages.modalidad.title)}
                width="505"
                height="214"
                layout="responsive"
                placeholder="blur"
                blurDataURL={labImage.src}
                {...withFallback(labImage.src)}
              />
            }
          />
        </div>
      </div>
      <style jsx>{AboutUsStyles}</style>
    </>
  )
}
