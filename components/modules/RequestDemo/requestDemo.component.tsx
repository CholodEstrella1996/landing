import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ImageTitle1 from 'components/molecules/ImageTitle1'

import DemoCards from './components/DemoCards'
import { RequestDemoComponentProps } from './requestDemo.model'
import { RequestDemoStyles } from './requestDemo.styles'

const { colors } = theme

export const RequestDemoComponent = ({
  title,
  description,
  image,
  demoSubscription,
}: RequestDemoComponentProps) => (
  <div className="request-demo">
    <div className="request-demo__content">
      <ImageTitle1
        title={title}
        image={
          <Image
            src={image ?? '/brand.svg'}
            alt={title}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={image ?? '/brand.svg'}
            layout="responsive"
          />
        }
        position="left">
        <Typography variant="s1" color={colors.neutrals[500]}>
          {description}
        </Typography>
      </ImageTitle1>

      <DemoCards demoSubscription={demoSubscription} />
    </div>

    <style jsx>{RequestDemoStyles}</style>
  </div>
)
