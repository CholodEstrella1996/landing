import { AboutUsCardsProps } from './aboutus.model'
import { AboutUsStyles } from './aboutus.styles'
import Hero from './components/Hero'
import OurAchievements from './components/OurAchievements'
import OurHistory from './components/OurHistory'
import VirtualMode from './components/VirtualMode'
import VirtualStem from './components/VirtualStem'

const AboutUsComponent = ({ cards }: AboutUsCardsProps) => (
  <>
    <div className="main">
      <Hero />
      <VirtualMode />
      <VirtualStem />
      <OurHistory />
      <OurAchievements cards={cards} />
    </div>
    <style jsx>{AboutUsStyles}</style>
  </>
)

export default AboutUsComponent
