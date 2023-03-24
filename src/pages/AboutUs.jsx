import React from 'react'
import AboutUsContainer from '../components/AboutUsPage/AboutUsContainer'
import PagesTop from '../components/main/PagesTop'

const AboutUs = () => {
  return (
    <>
      <PagesTop current_page="Haqqımızda" main_page="Ana Səhifə" />

      <AboutUsContainer />
    </>
  )
}

export default AboutUs