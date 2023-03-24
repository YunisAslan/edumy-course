import React, { useRef, useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion'
import CustomRadioBox from '../main/CustomRadioBox';

const RatingContainer = ({rating_head,child_radio_title1,child_radio_title2,child_radio_title3,child_radio_title4,child_radio_title5}) => {

    const ratingAreaRef = useRef();
    const [filterOption, setfilterOption] = useState(false);

    const handleFilterbox = (e) => {
        setfilterOption(!filterOption)

        if (e.target.classList.contains('arrow-btn')) {
            ratingAreaRef.current.classList.toggle('rating-container-close')
        }
    }

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className='rating-container shadow-barShadow rounded-md w-[100%] h-[220px] py-2 pl-3 border-[0px]  transition-[height] duration-[.6s] mb-8 bg-softBlue'
                ref={ratingAreaRef}>

                <button
                    className='arrow-btn flex items-center pb-2'
                    onClick={handleFilterbox}>
                    <span className='pointer-events-none font-[500] text-myBlack'>{rating_head}</span>

                    {!filterOption ?
                        <IoIosArrowDown
                            className='pointer-events-none ml-1 transition-all duration-500' />
                        :
                        <IoIosArrowDown
                            className='pointer-events-none ml-1 ransition-all duration-[.4s] rotate-180' />
                    }
                </button>

                {!filterOption &&
                    <motion.div
                        animate={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: .6 }}
                        layout
                    >
                        <div className="radio-boxes text-myBlack font-[500]">

                            <CustomRadioBox radio_title={child_radio_title1} selectedOption={selectedOption} setSelectedOption={setSelectedOption} handleOptionChange={handleOptionChange} />

                            <CustomRadioBox radio_title={child_radio_title2} selectedOption={selectedOption} setSelectedOption={setSelectedOption} handleOptionChange={handleOptionChange} />

                            <CustomRadioBox radio_title={child_radio_title3} selectedOption={selectedOption} setSelectedOption={setSelectedOption} handleOptionChange={handleOptionChange} />

                            <CustomRadioBox radio_title={child_radio_title4} selectedOption={selectedOption} setSelectedOption={setSelectedOption} handleOptionChange={handleOptionChange} />

                            <CustomRadioBox radio_title={child_radio_title5} selectedOption={selectedOption} setSelectedOption={setSelectedOption} handleOptionChange={handleOptionChange} />

                        </div>
                    </motion.div>
                }


            </div>
        </>
    )
}

export default RatingContainer