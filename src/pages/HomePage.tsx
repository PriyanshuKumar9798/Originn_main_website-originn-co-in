import { Hero } from '../components/Hero'
// import { TrustedBySection } from '../components/TrustedBySection'
import { FeaturedOpportunitiesSection } from '../components/FeaturedOpportunitiesSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { StartupCategoriesSection } from '../components/StartupCategoriesSection'

import { MarketingSliderSection } from '../components/MarketingSliderSection'
// import { TopFoundersSection } from '../components/TopFoundersSection'
import { Footer } from '../components/Footer'

export const HomePage = () => {

  return (
    <>
      <Hero />
    
      <FeaturedOpportunitiesSection />
      {/* <TrustedBySection /> */}
      <MarketingSliderSection />
      <StartupCategoriesSection />
      <HowItWorksSection />
      {/* <TopFoundersSection /> */}
      <Footer />
    </>
  )
}
