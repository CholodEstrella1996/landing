/* eslint-disable @next/next/no-img-element */
import { Box, CircularProgress } from '@mui/material'

import { SpinnerStyles } from './spinner.styles'

type Props = {
  type?: 'fullScreen' | 'inline'
}
const Spinner = ({ type = 'fullScreen' }: Props) => {
  const inlineStyles = {
    display: 'grid',
    placeContent: 'center',
    padding: '1.5rem',
    width: '100%',
    height: '100%',
  }

  if (type === 'inline')
    return (
      <Box sx={inlineStyles}>
        <CircularProgress />
      </Box>
    )

  return (
    <div className="spinner">
      <Box className="spinner__container">
        <img src="/loader.svg" alt="Loading..." />
      </Box>

      <style jsx>{SpinnerStyles}</style>
    </div>
  )
}

export default Spinner
