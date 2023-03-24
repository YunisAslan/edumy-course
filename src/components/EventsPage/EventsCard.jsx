import React from 'react'
import { useState } from 'react';

import { GoCalendar, GoLocation } from "react-icons/go";
import { MdHistoryToggleOff } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


const EventsCard = ({ ...oneEvent }) => {

    const [showReach, setShowReach] = useState(false)

    return (
        <>
            <div className='event-card grid grid-cols-12 bg-blue-300 m-6 px-5 py-7 cursor-pointer hover:scale-[.94] transition-all duration-700 group' onMouseEnter={() => setShowReach(true)} onMouseLeave={() => setShowReach(false)}>

                <div className='event-card-left relative mm:col-span-12 md:col-span-12 lg:col-span-5 rounded-[.9rem]
                group-hover:scale-105 group-hover:translate-x-6 ease-in-out object-cover object-center transition duration-1000 group-hover:opacity-70'
                    style={{
                        backgroundImage: `url(${oneEvent.event_img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: "100%"
                    }}>
                    <div className="event-card-left-text absolute bottom-5 right-6 text-white text-center">
                        <span className='text-[3.4rem] font-[700]'>{oneEvent.event_img_date}</span>
                        <h2 className='text-[1.6rem] -mt-2'>{oneEvent.event_img_month}</h2>
                    </div>
                </div>

                <div className="event-card-right mm:col-span-12 md:col-span-12 lg:col-span-7  flex flex-col justify-center sm:pl-10 mm:px-3 text-myBlack mm:group-hover:translate-x-4 sm:group-hover:translate-x-10 ease-in-out object-cover object-center transition duration-1000">

                    <h2 className='font-[700] text-[1.7rem] mm:pt-4 pb-3 mm:text-center sm:text-left'>{oneEvent.event_title}</h2>

                    <p className='pb-8 max-w-[600px] text-lg mm:text-center sm:text-left'>{oneEvent.event_detail}</p>

                    <div className='space-y-5 flex flex-col text-center'>

                        <span className='flex items-center mm:text-sm sm:text-lg'> <GoCalendar className='text-[1.5rem] mr-3' />
                            Tarix: {oneEvent.event_date}
                        </span>
                        <span className='flex items-center mm:text-sm sm:text-lg'><MdHistoryToggleOff className='text-[1.5rem] mr-3' />
                            Vaxt: {oneEvent.event_time}
                        </span>
                        <span className='flex items-center mm:text-sm sm:text-lg'><GoLocation className='text-[1.5rem] mr-3' />
                            Ünvan: {oneEvent.event_address}
                        </span>

                    </div>

                    {showReach &&
                        <Link to="/event" className='p-3 absolute mm:right-10 sm:right-20 bottom-7 bg-white shadow-dropdownShadow rounded-full'>
                            <BsArrowRight className='sm:text-3xl mm:text-xl'/>
                        </Link>
                    }

                </div>

            </div>
        </>
    )
}

export default EventsCard