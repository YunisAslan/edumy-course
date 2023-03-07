import React from 'react'


import testimonialInfo from '../testimonialInfo.json'
import TestimonialContainer from './TestimonialContainer';
//SWIPERJS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";


const Testimonials = () => {

    return (
        <>
            <section className="testimonials-section mb-[10rem]">

                <div className="testimonial-head text-center pb-10">
                    <h2 className='font-[700] text-[1.6rem] pb-1'>İnsanlar Nə Deyir</h2>
                    <h6>Saytın ekspert müəllimləri dünya səviyyəli təhsil təqdim edir.</h6>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    grabCursor
                    breakpoints={{
                        350: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        },
                    }}
                    className="mySwiper testimonial-swiper"
                >

                    <div>
                        {testimonialInfo.map((oneSlide) => (
                            <SwiperSlide key={oneSlide.testimonial_id}>
                                <TestimonialContainer {...oneSlide} />
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
            </section>
        </>
    )
}

export default Testimonials