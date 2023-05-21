import { SyntheticEvent, useState } from 'react'

import { Box, Tab, Tabs, tabsClasses } from '@mui/material'
import { useIntl } from 'react-intl'

import { CardAvatarTitleProps } from 'components/atoms/CardAvatarTitle/cardAvatarTitle.model'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Home/home.messages'
import { storeLink } from 'constants/landingPages'
import { useMediaQuery } from 'hooks/use-media-query'

import PanelCarousel from './PanelCards'
import { ProductsCarouselStyles } from './productsCarousel.styles'

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box className="tab__panel">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

type Props = {
  areas: CardAvatarTitleProps[]
  editorialCurriculum?: CardAvatarTitleProps[]
  packages?: CardAvatarTitleProps[]
  fetchEditorialCurriculum: (kind: string) => Promise<void>
  fetchPackages: () => Promise<void>
  isLoading: boolean
}

const { mediaQueries } = theme
const STORE_LINK = `${storeLink}/explore-labs`
export const ProductsCarouselComponent = ({
  areas,
  editorialCurriculum,
  packages,
  fetchEditorialCurriculum,
  fetchPackages,
  isLoading,
}: Props) => {
  const [value, setValue] = useState(0)
  const intl = useIntl()

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const isTablet = useMediaQuery(mediaQueries.tablet)

  const panelTabs = [
    { type: intl.formatMessage(messages.homePage.productsCarousel.areas) },
    { type: intl.formatMessage(messages.homePage.productsCarousel.editorial) },
    { type: intl.formatMessage(messages.homePage.productsCarousel.curriculum) },
    { type: intl.formatMessage(messages.homePage.productsCarousel.package) },
  ]

  return (
    <>
      <div className="tab">
        <Box className="tab__container container">
          <Box className="tab__navigation">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              variant={isTablet ? 'fullWidth' : 'scrollable'}
              scrollButtons
              allowScrollButtonsMobile
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                },
              }}>
              <Tab label={panelTabs[0].type} className="tab__items" {...a11yProps(0)} />
              <Tab
                onClick={() => void fetchEditorialCurriculum('publisher')}
                label={panelTabs[1].type}
                className="tab__items"
                {...a11yProps(1)}
              />
              <Tab
                onClick={() => void fetchEditorialCurriculum('country')}
                label={panelTabs[2].type}
                className="tab__items"
                {...a11yProps(2)}
              />
              <Tab
                onClick={() => void fetchPackages()}
                label={panelTabs[3].type}
                className="tab__items"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <PanelCarousel
              slideAreasPackages={areas}
              type={panelTabs[0].type}
              itemsPerView={3}
              href={STORE_LINK}
              isLoading={isLoading}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PanelCarousel
              slideEditorialCurriculum={editorialCurriculum}
              type={panelTabs[1].type}
              itemsPerView={3}
              href={STORE_LINK}
              isLoading={isLoading}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <PanelCarousel
              slideEditorialCurriculum={editorialCurriculum}
              type={panelTabs[2].type}
              itemsPerView={3}
              href={STORE_LINK}
              isLoading={isLoading}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PanelCarousel
              slideAreasPackages={packages}
              type={panelTabs[3].type}
              itemsPerView={3}
              href={STORE_LINK}
              isLoading={isLoading}
            />
          </TabPanel>
        </Box>
      </div>

      <style jsx>{ProductsCarouselStyles}</style>
    </>
  )
}
