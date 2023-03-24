import React, { useEffect, useState } from 'react'

import InstructorsInfo from '../../JSONs/InstructorsInfo.json'
import InstructorsCard from './InstructorsCard'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const PopularInstructors = () => {

    const [allInstructors] = useState(InstructorsInfo)
    const [popInstructors, setPopInstructors] = useState([])

    useEffect(() => {
        const filteredInstructors = allInstructors.filter((card) => card.popular)
        setPopInstructors(filteredInstructors)
    }, [])


    return (
        <>
            <div className='popular-instructors-section pt-6 px-8 pb-32'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >

                    {popInstructors.map((oneInstructor) => (
                        <SwiperSlide key={oneInstructor.instructor_id}>
                            <div className='py-10'>
                                <InstructorsCard {...oneInstructor} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

export default PopularInstructors