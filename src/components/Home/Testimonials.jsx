import React from 'react'

import testimonialInfo from '../../JSONs/testimonialInfo.json'
import TestimonialContainer from './TestimonialContainer';

import Marquee from 'react-fast-marquee';


const Testimonials = () => {

    return (
        <>
            <section className="testimonials-section mb-[10rem]">

                <div className="testimonial-head text-myBlack text-center pb-10 px-6">
                    <h2 className='font-[600]  text-[1.7rem] pb-1'>İnsanlar Nə Deyir</h2>
                    <h6 className='font-[500]'>Saytın ekspert müəllimləri dünya səviyyəli təhsil təqdim edir</h6>
                </div>

                <Marquee play direction='left' speed={140} pauseOnClick gradientColor={false}>
                    {testimonialInfo.map((oneSlide) => (
                        <div key={oneSlide.testimonial_id} className='pr-16 py-10'>
                            <TestimonialContainer {...oneSlide} />
                        </div>
                    ))}
                </Marquee>
                
            </section>
        </>
    )
}

export default Testimonials