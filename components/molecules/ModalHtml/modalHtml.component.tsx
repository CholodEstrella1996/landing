import { Close } from '@mui/icons-material'
import { Modal, Box, IconButton } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'

import { Button } from 'components/atoms/Button'
import { theme, ThemeProvider } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { PropsModal } from './modalHtml.model'
import { ModalHtmlStyles } from './modalHtml.styles'

const { colors } = theme
const ModalHtmlComponent = (props: PropsModal) => {
  const {
    title,
    buttonOutlined,
    buttonContained,
    html,
    open,
    children,
    setModalOpen,
    onAcceptTerms,
  } = props

  const { keycloak } = useKeycloak()
  const handleClick = () => {
    if (keycloak) window.location.href = keycloak.createLogoutUrl()
  }
  const handleAccept = () => {
    if (onAcceptTerms) {
      void onAcceptTerms()
      setModalOpen(false)
    }
  }

  return (
    <>
      <Modal className="modalHtml is-open" open={open}>
        <Box sx={{ outline: 'none' }}>
          <ThemeProvider>
            <div className="modalHtml__container">
              <div className="modalHtml__content">
                {buttonOutlined && buttonContained ? (
                  <div className="modalHtml__container__title modalHtml__container__title--center">
                    <Typography variant="h5" weight="bold" color={colors.primary[500]}>
                      {title}
                    </Typography>
                  </div>
                ) : (
                  <div className="modalHtml__container__title modalHtml__container__title--start">
                    <Typography variant="h5" weight="bold" color={colors.primary[500]}>
                      {title}
                    </Typography>

                    <IconButton onClick={() => setModalOpen(false)}>
                      <Close fontSize="small" />
                    </IconButton>
                  </div>
                )}

                {children || (
                  <>
                    <iframe
                      frameBorder="0"
                      scroll-behavior="smooth"
                      id="iframeConcent"
                      title="Concent Detail"
                      src={html}
                      {...(buttonContained && {
                        srcDoc: html,
                      })}
                      className="modalHtml__iframe"
                    />
                    {buttonOutlined && buttonContained && (
                      <div className="modalHtml__buttons">
                        <Button
                          variant="outlined"
                          onClick={() => handleClick()}
                          type="button"
                          size="large"
                          iconPosition="right">
                          {buttonOutlined}
                        </Button>

                        <Button variant="contained" size="large" onClick={() => handleAccept()}>
                          {buttonContained}
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </ThemeProvider>
        </Box>
      </Modal>

      <style jsx>{ModalHtmlStyles}</style>
    </>
  )
}

export default ModalHtmlComponent
