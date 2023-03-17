import React from 'react'

import { GoCalendar, GoLocation } from "react-icons/go";
import { MdHistoryToggleOff } from "react-icons/md";


const EventsCard = ({...oneEvent}) => {
    return (
        <>
            <div className='event-card grid grid-cols-12 bg-blue-100 rounded-[.9rem] m-6 px-5 py-7'>

                <div className='event-card-left relative mm:col-span-12 md:col-span-12 lg:col-span-5  rounded-[.9rem]'
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

                <div className="event-card-right mm:col-span-12 md:col-span-12 lg:col-span-7  flex flex-col justify-center sm:pl-10 mm:px-3">

                    <h2 className='font-[700] text-[1.5rem] pt-2 pb-3'>{oneEvent.event_title}</h2>

                    <p className='pb-8 max-w-[600px]'>{oneEvent.event_detail}</p>

                    <div className='space-y-5 flex flex-col text-center'>

                        <span className='flex items-center bab'> <GoCalendar className='text-[1.3rem] mr-3' />
                            Tarix: {oneEvent.event_date}
                        </span>
                        <span className='flex items-center'><MdHistoryToggleOff className='text-[1.3rem] mr-3' />
                            Vaxt: {oneEvent.event_time}
                        </span>
                        <span className='flex items-center'><GoLocation className='text-[1.3rem] mr-3' />
                            Ünvan: {oneEvent.event_address}
                        </span>

                    </div>
                </div>

            </div>
        </>
    )
}

export default EventsCard