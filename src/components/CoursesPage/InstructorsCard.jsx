import React from 'react'
import educaIcon from '../../assets/images/educaIcon.svg'

const InstructorsCard = ({ ...oneInstructor }) => {
    return (
        <>
            <div className='flip-card flex justify-center'> {/*this div for a centered da*n swiper slide */}

                <div className='w-[300px] h-[370px] rounded-[.6rem] flex flex-col items-center text-center pt-6 shadow-barShadow hover:shadow-barShadow border-[1px] border-softBlue  cursor-pointer instructor-card flip-card-inner bg-[#fff]'>

                    <div className="flip-card__front flex flex-col items-center relative">
                        <div>
                            <div className='flex justify-center pb-4'>
                                <img src={oneInstructor.instructor_img} alt=""
                                    className='rounded-full w-[140px] p-1 h-[140px] border-premiumColor border-2' />
                            </div>

                            <h2 className='pb-1 text-[1.3rem] text-myBlack font-[500]'>{oneInstructor.instructor_name}</h2>
                            <span className='text-myBlack'>{oneInstructor.instructor_detail}</span>
                        </div>

                        <div className="instructor-rating flex pt-4 space-x-1 items-center">
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
                            {/* <span className='pl-2 text-myBlack'>
                                ({oneInstructor.instructor_rating})
                            </span> */}
                        </div>

                        <div className='border-t-[2px] border-premiumColor w-full mt-8'></div>

                        <div className="instructor-infos text-myBlack font-[500] pb-1 h-full w-full flex justify-between items-center space-x-5">
                            <span>{oneInstructor.instructor_students} şagird</span>
                            <span>{oneInstructor.instructor_courses} kurs</span>
                        </div>
                    </div>

                    <div className="flip-card__back flex flex-col items-center justify-end pb-16 px-4 text-myBlack absolute bottom-0 bg-softBlue h-full rounded-[.6rem] border-0 py-10">
                        <img src={educaIcon} alt="" className='w-24 flex items-cetner' />
                        <h2 className='text-lg pb-2'>{oneInstructor.instructor_name}</h2>
                        <p className='text-sm'>{oneInstructor.back_detail}</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default InstructorsCard