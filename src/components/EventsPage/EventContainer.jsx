import React from 'react'
import ShareLinks from '../main/ShareLinks'

import İnstructorsİnfo from '../../JSONs/InstructorsInfo.json'

import EventsDetails from './EventsDetails'

const EventContainer = () => {

    return (
        <>
            <div className="event-single-container grid grid-cols-12 px-6 py-[4.5rem]">

                <div className="event-left mm:col-span-12 xl:col-span-9 text-myBlack">
                    <h2 className=' text-[1.8rem] pb-6'>UX/UI Dizayn Konfransı</h2>

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

                    <div className="event-desc pt-9 pr-4">
                        <h2 className='pb-3 font-[500] text-[1.7rem]'>Tədbir</h2>
                        <p className='text-justify text-lg sm:text-left mm:text-center'>Biz onlayn təhsil üçün qüsursuz və xoş bir istifadəçi təcrübəsini necə tərtib edəcəyimizi araşdıracağıq. İntuitiv naviqasiya və vizual cəlbedici interfeyslərin dizaynından tutmuş cəlbedici məzmun və interaktiv funksiyaların yaradılmasına qədər  tələbələr üçün ləzzətli öyrənmə təcrübəsi yaratmaq məsləhətləri və tövsiyələri paylaşacağıq.
                        </p>
                        <p className='pt-3 text-justify text-lg sm:text-left mm:text-center'>Biz eyni zamanda tələbələrin və pedaqoqların inkişaf edən ehtiyacları üçün əyridən necə qabaqda qalmağı və dizaynı müzakirə edəcəyik.</p>
                    </div>

                    <div className="event-content pt-6">
                        <h2 className='font-[500] pb-3 text-[1.7rem]'>Tədbir məzmunu</h2>

                        <ul className='list-titles pl-4 mm:text-base md:text-lg'>
                            <li>Zövq üçün dizayn: Problemsiz Öyrənmə Təcrübəsi üçün UX/UI Məsləhətləri</li>
                            <li>Empatiyaya əsaslanan dizayn: Özünüzü istifadəçinin yerinə qoymaq</li>
                            <li>Vizual Hekayə Sənəti: Onlayn Təhsildə İştirak üçün Dizayn</li>
                        </ul>

                    </div>

                    <div className='share-links flex items-center pt-6'>
                        <span className='text-[1.3rem]'>Paylaş: </span>

                        <ShareLinks className="event-share text-myBlack flex items-center space-x-3 text-[1.3rem] pl-3" />
                    </div>


                    <h2 className='pt-5 pb-7 font-[500] text-[1.7rem]'>Tədbir iştirakçıları:</h2>

                    <div className="event-participants px-8 pb-8 pt-4 mm:mr-0 md:mr-4 rounded-2xl">

                        <div className='md:flex mm:block mm:space-y-5 md:space-y-0 text-center mm:gap-0 md:gap-20 md:pl-10'>
                            {
                                İnstructorsİnfo.map((oneInstructor) => (
                                    oneInstructor.participant &&
                                    <div key={oneInstructor.instructor_id} className="flex flex-col items-center">
                                        <div>
                                            <img src={oneInstructor.instructor_img} alt="" className='w-[120px] 
                                            h-[120px] rounded-full' />
                                        </div>

                                        <div className='pt-1'>
                                            <h2 className='font-[500] text-lg'>{oneInstructor.instructor_name}</h2>
                                            <span>{oneInstructor.instructor_detail}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>



                <div className="event-right mm:col-span-12 xl:col-span-3 ml-4">
                    <EventsDetails />
                </div>

            </div>
        </>
    )
}

export default EventContainer