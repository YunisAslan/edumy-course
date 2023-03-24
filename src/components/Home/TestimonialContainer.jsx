import React from 'react'
import CardWave from '../../assets/images/card-wave.svg'


const TestimonialContainer = ({ testimonial_img, testimonial_client, testimonial_name, testimonial_detail }) => {
    return (
        <>
            <div className="relative testimonial-container flex flex-col items-center pt-12  mm:pb-10 z-[1] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl sm:w-[400px] sm:h-[365px] mm:w-[350px] mm:h-[330px] hover:scale-110 transition-all duration-500 cursor-pointer" >

                <img src={CardWave} alt="" className='absolute top-0 rounded-lg -z-[1]' />

                <div className='testimonial-image w-28 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-full'>
                    <img src={testimonial_img} alt="" className='rounded-full w-full border-premiumColor border-[2px]' />
                </div>

                <div className='text-center space-y-1'>
                    <h3 className='font-[500] text-myBlack text-lg pt-2'>{testimonial_name}</h3>
                    <span className='text-premiumColor/100 font-[500]'>{testimonial_client}</span>
                    <p className='max-w-[330px] text-myBlack font-[500]'>{testimonial_detail}</p>
                </div>
            </div>
        </>
    )
}

export default TestimonialContainer