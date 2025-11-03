import React from 'react'
import Hero from './components/hero'
import ProcessSection from './components/process'
import WeWork from './components/we-work'
import Reviews from './components/reviews'
import FAQ from './components/faq'
import PricingSection from './components/pricing'

const page = () => {
  return (
    <div>
      <Hero/>
      <ProcessSection/>
      <WeWork/>
      <Reviews/>
      <FAQ/>
      <PricingSection/>
    </div>
  )
}

export default page
