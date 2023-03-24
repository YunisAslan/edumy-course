import React from 'react'
import PopularInstructors from '../CoursesPage/PopularInstructors'
import OnlineLearning from '../Home/OnlineLearning'
import Testimonials from '../Home/Testimonials'
import AboutUsIntro from './AboutUsIntro'
import OurStory from './OurStory'

const AboutUsContainer = () => {
    return (
        <>
            <div className="aboutus-wrapper pb-[7rem] px-10">
                <AboutUsIntro />
                <OurStory />
            </div>

            <div>
                <OnlineLearning />

                <h2 className='text-center text-[1.7rem] text-myBlack font-[500] pt-12'>Məşhur Təlimçilər</h2>
                <PopularInstructors />
                <Testimonials />
            </div>


        </>
    )
}

export default AboutUsContainer