import React from 'react'

const InstructorsCard = ({ ...oneInstructor }) => {
    return (
        <>
            <div className='flex justify-center'> {/*this div for a centered da*n swiper slide */}

                <div className='w-[300px] h-[350px] rounded-[.6rem] border-gray-300 border-[1px] flex flex-col items-center text-center pt-6 shadow-customShadow hover:shadow-customShadowHover transition-shadow duration-[.4s] cursor-pointer'>

                    <div>
                        <div className='flex justify-center pb-4'>
                            <img src={oneInstructor.instructor_img} alt="" className='rounded-full w-[120px] h-[120px]' />
                        </div>

                        <h2 className='pb-2 text-[1.3rem]'>{oneInstructor.instructor_name}</h2>
                        <span>{oneInstructor.instructor_detail}</span>
                    </div>

                    <div className="instructor-rating flex pt-3 space-x-1 items-center">
                        <span>
                            <img src={oneInstructor.instructor_star1} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneInstructor.instructor_star2} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneInstructor.instructor_star3} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneInstructor.instructor_star4} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneInstructor.instructor_star5} alt="" className='w-5' />
                        </span>
                        <span className='pl-2'>
                            ({oneInstructor.instructor_rating})
                        </span>
                    </div>

                    <div className='border-t-[1px] border-gray-200 w-full mt-10'></div>

                    <div className="instructor-infos px-6 h-full w-full flex justify-between items-center">
                        <span>{oneInstructor.instructor_students} şagird</span>
                        <span>{oneInstructor.instructor_courses} kurs</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InstructorsCard