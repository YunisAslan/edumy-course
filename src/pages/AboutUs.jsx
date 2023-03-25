import React from 'react'
import AboutUsContainer from '../components/AboutUsPage/AboutUsContainer'
import PagesTop from '../components/main/PagesTop'

const AboutUs = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PagesTop current_page="Haqqımızda" main_page="Ana Səhifə" />

      <AboutUsContainer />
    </>
  )
}

export default AboutUs