import React from 'react'
import Hero from './components/hero'
import ProcessSection from './components/process'
import WeWork from './components/we-work'
import Reviews from './components/reviews'
import FAQ from './components/faq'
import PricingSection from './components/pricing'
import Platforms from './components/platforms'
import RecentWorks from './components/recent-work'
import Footer from './components/footer'
import StickySections from './components/sticky-section'
import Content from './components/content'

const page = () => {
  return (
    <div>
      <Hero/>
      <ProcessSection/>
      <WeWork/>
      <Reviews/>
      <FAQ/>
      <PricingSection/>
      <Platforms/>
      <RecentWorks/>
      <Content/>
      <StickySections/>
      <Footer/>
    </div>
  )
}

export default page
