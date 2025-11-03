import React from 'react'
import Hero from './components/hero'
import ProcessSection from './components/process'
import WeWork from './components/we-work'
import Reviews from './components/reviews'

const page = () => {
  return (
    <div>
      <Hero/>
      <ProcessSection/>
      <WeWork/>
      <Reviews/>
    </div>
  )
}

export default page
