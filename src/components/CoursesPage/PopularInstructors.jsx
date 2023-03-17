import React, { useEffect, useState } from 'react'

import InstructorsInfo from '../../JSONs/InstructorsInfo.json'
import InstructorsCard from './InstructorsCard'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const PopularInstructors = () => {
    const [allInstructors] = useState(InstructorsInfo)
    const [popInstructors, setPopInstructors] = useState([])

    useEffect(() => {

        const filteredInstructors = allInstructors.filter((card) => card.popular)
        setPopInstructors(filteredInstructors)

    }, [])


    return (
        <>
            <div className='popular-instructors-section pt-8 px-8 pb-32'>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 0.001,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >

                    {popInstructors.map((oneInstructor) => (
                        <SwiperSlide key={oneInstructor.instructor_id}>
                            <InstructorsCard {...oneInstructor} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

export default PopularInstructors