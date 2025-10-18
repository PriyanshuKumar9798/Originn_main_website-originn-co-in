import { Hero } from '../components/Hero'
import { TrustedBySection } from '../components/TrustedBySection'
import { FeaturedOpportunitiesSection } from '../components/FeaturedOpportunitiesSection'
import { MarketingSliderSection } from '../components/MarketingSliderSection'
import { TopFoundersSection } from '../components/TopFoundersSection'
import { Footer } from '../components/Footer'

export const HomePage = () => {

  return (
    <>
      <Hero />
      <TrustedBySection />
      <FeaturedOpportunitiesSection />
      <MarketingSliderSection />
      <TopFoundersSection />
      <Footer />
    </>
  )
}
