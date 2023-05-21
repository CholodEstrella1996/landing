import Link from 'next/link'

import { BackArrowDesktop1Props } from './backArrowDesktop1.model'
import { BackArrowDesktop1Styles } from './backArrowDesktop1.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography'

const { colors } = theme

const BackArrowDesktop1Component = ({ title, section, redirect }: BackArrowDesktop1Props) => {
  const route = section.charAt(0).toUpperCase() + section.slice(1)

  return (
    <>
      <div className="backArrow__container">
        <Link href={redirect}>
          <a href={redirect} className="link__title">
            <Typography variant="s2" color={colors.primary[500]}>
              {route}
            </Typography>
          </a>
        </Link>
        <Typography variant="s2" className="others__title" color={colors.neutrals[300]}>
          &nbsp;{`/ ${title}`}
        </Typography>
      </div>

      <style jsx>{BackArrowDesktop1Styles}</style>
    </>
  )
}

export default BackArrowDesktop1Component
