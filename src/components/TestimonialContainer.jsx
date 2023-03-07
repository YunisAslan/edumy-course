import React from 'react'

const TestimonialContainer = ({  testimonial_img, testimonial_client, testimonial_name, testimonial_detail }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center pt-5 testimonial-container'>

                <div className='testimonial-image'>
                    <img src={testimonial_img} alt="" />
                </div>

                <div className='text-center space-y-1'>
                    <h3 className='font-[700] pt-1'>{testimonial_name}</h3>
                    <span className='text-premiumColor font-[700]'>{testimonial_client}</span>
                    <p className='max-w-[330px]'>{testimonial_detail}</p>
                </div>
            </div>
        </>
    )
}

export default TestimonialContainer