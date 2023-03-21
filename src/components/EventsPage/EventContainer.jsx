import React from 'react'
import CountDown from '../main/CountDown'
import ShareLinks from '../main/ShareLinks'

import İnstructorsİnfo from '../../JSONs/InstructorsInfo.json'

import { motion } from 'framer-motion'
import EventsDetails from './EventsDetails'

const EventContainer = () => {

    return (
        <>
            <div className="event-single-container grid grid-cols-12 px-6 py-[4.5rem]">

                <div className="event-left col-span-9 ">
                    <h2 className=' text-[1.6rem] pb-6'>UX/UI Dizayn Konfransı</h2>

                    <div className='event-left-img rounded-[.9rem] relative' style={{
                        backgroundImage: "url(https://res.cloudinary.com/drx9zihrg/image/upload/v1678804285/Course%20bg%20images%20for%20Edumy/12_kijcrf.jpg)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '70vh'
                    }}>
                        <div className="event-card-left-text absolute bottom-5 right-6 text-white text-center">
                            <span className='text-[3.4rem] font-[700]'>28</span>
                            <h2 className='text-[1.6rem] -mt-2'>Dekabr</h2>
                        </div>
                    </div>

                    <CountDown />

                    <div className="event-desc pt-9 pr-4">
                        <h2 className='pb-3 font-[500] text-[1.4rem]'>EVENT</h2>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio doloremque cupiditate adipisci veniam. Incidunt placeat natus nihil quo, ex, itaque possimus, sunt doloremque perferendis repellendus quod commodi accusantium vitae quos.</p>
                        <p className='pt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam aliquam nulla eligendi minus quisquam cumque quos ratione, error rerum?</p>
                    </div>

                    <div className="event-content pt-6">
                        <h2 className='font-[500] pb-3 text-[1.4rem]'>Event Content</h2>

                        <ul className='list-titles pl-4'>
                            <li>You will need a copy of Adobe XD 2019 or above. A free trial can b</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, blanditiis.</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi </li>
                        </ul>

                    </div>

                    <div className='share-links flex items-center pt-6'>
                        <span className='text-[1.3rem]'>Share: </span>

                        <ShareLinks className="event-share text-black flex items-center space-x-3 text-[1.3rem] pl-3" />
                    </div>


                    <h2 className='pt-5 pb-7 font-[700] text-[1.4rem]'>Tədbir İştirakçıları</h2>
                    <div className="event-participants px-8 pb-8 pt-4 mr-4 rounded-2xl">

                        <div className='flex text-center space-x-16 pl-10'>
                            {
                                İnstructorsİnfo.map((oneInstructor) => (
                                    oneInstructor.participant &&
                                    <div className=''>

                                        <div>
                                            <img src={oneInstructor.instructor_img} alt="" className='w-[120px] h-[120px] rounded-full' />
                                        </div>

                                        <div className='pt-1'>
                                            <h2 className='font-[700]'>{oneInstructor.instructor_name}</h2>
                                            <span>{oneInstructor.instructor_detail}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>



                <div className="event-right col-span-3 ml-4">
                    <EventsDetails />
                </div>

            </div>
        </>
    )
}

export default EventContainer