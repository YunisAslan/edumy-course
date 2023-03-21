import React from 'react'

import { GoCalendar, GoLocation } from "react-icons/go";
import { MdHistoryToggleOff } from "react-icons/md";
import { BsTelephonePlus } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { motion } from 'framer-motion';
import TagPanel from '../BlogPage/TagPanel';

const EventsDetails = () => {
    return (
        <>
            <div className="event-details">

                <div className="event-details-panel bg-gray-300 p-4 rounded-lg">
                    <h2 className='font-[600] text-[1.2rem]'>Tədbir Haqqında</h2>

                    <div className='space-y-5 flex flex-col text-center pl-2 pt-5'>

                        <span className='flex items-center'> <GoCalendar className='text-[1.3rem] mr-3' />
                            Tarix: 06.10.2023 - 08.10.2023
                        </span>
                        <span className='flex items-center'><MdHistoryToggleOff className='text-[1.3rem] mr-3' />
                            Vaxt: 15:00 - 18:00
                        </span>
                        <span className='flex items-center'><GoLocation className='text-[1.3rem] mr-3' />
                            Ünvan: Elmlər Akademiyası
                        </span>

                    </div>
                </div>

                <div className="event-contact-panel bg-gray-300 p-4 rounded-lg mt-6">
                    <h2 className='font-[600] text-[1.2rem] pb-4'>Tədbirlə əlaqəli</h2>

                    <div className='flex justify-center'>
                        <iframe title='1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97273.35956342399!2d49.702538262500006!3d40.3691254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db655dcdb35%3A0x1d2e1174874a3b8!2sLIBRAFF!5e0!3m2!1saz!2saz!4v1678824677842!5m2!1saz!2saz" width="200" height="150" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="contact-bottom pt-8 space-y-4 pl-2">

                        <span className='flex items-center'>
                            <BsTelephonePlus className='mr-3 text-[1.4rem]' />
                            <a href="tel:+1-896-567-23497">1-896-567-23497</a>
                        </span>

                        <span className='flex items-center'>
                            <HiOutlineMail className='mr-3 text-[1.4rem]' />
                            <a href="mailto:yunisaslanov527@gmail.com">event@edumy.com</a>
                        </span>

                        <span className='flex items-center'>
                            <TbWorld className='mr-3 text-[1.4rem]' />
                            <a href="https://elmirsultan.com">https://www.edumy.com</a>
                        </span>

                    </div>
                </div>

                <TagPanel tag1="UX/UI" tag2="Sketch" tag3="Photoshop" />

            </div>

        </>
    )
}

export default EventsDetails