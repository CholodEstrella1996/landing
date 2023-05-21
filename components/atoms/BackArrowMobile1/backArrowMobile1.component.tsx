import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'

import { BackArrowMobile1Props } from './backArrowMobile1.model'
import { BackArrowMobile1Styles } from './backArrowMobile1.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography'

const { colors } = theme

const BackArrowMobile1Component = ({ title }: BackArrowMobile1Props) => {
  const router = useRouter()
  const route = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <>
      <div
        className="backArrow__container"
        onClick={() => router.back()}
        onKeyPress={() => router.back()}
        role="button"
        tabIndex={0}>
        <button type="button" className="backArrow__button">
          <ArrowBackIcon />
        </button>
        <Typography variant="h6" color={colors.primary[500]}>
          {route}
        </Typography>
      </div>
      <style jsx>{BackArrowMobile1Styles}</style>
    </>
  )
}

export default BackArrowMobile1Component
