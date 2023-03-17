import React, { useState, useRef } from 'react'


import CustomCheckBox from './CustomCheckBox';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';

const SelectedFilter = () => {

    const selectedFilterAreaRef = useRef();
    const [filterOption, setFilterOption] = useState(false);

    const [selectedFilters, setSelectedFilters] = useState([])

    const handleFilterChange = (e) => {
        const value = e.target.value

        if (e.target.checked) {
            setSelectedFilters([...selectedFilters, value])
        } else {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== value))
        }
    }

    const handleFilterbox = (e) => {

        setFilterOption(!filterOption)

        if (e.target.classList.contains('arrow-btn')) {
            selectedFilterAreaRef.current.classList.toggle('filter-container-close')
        }
    }

    return (
        <>
            <div
                className='selected-filters-container shadow-customShadow rounded-md w-[100%] h-[220px] py-2 xl:pl-3 mm:pl-0 border-[1px] border-gray-200 transition-[height] duration-[.3s]'
                ref={selectedFilterAreaRef}>

                <button
                    className='arrow-btn flex items-center pb-2'
                    onClick={handleFilterbox}>
                    <span className='pointer-events-none font-[700] mm:pl-3 xl:pl-0'>Seçilmiş filtrlər</span>

                    {!filterOption ?
                        <IoIosArrowDown
                            className='pointer-events-none ml-1 transition-all duration-500' />
                        :
                        <IoIosArrowDown
                            className='pointer-events-none ml-1 ransition-all duration-[.4s] rotate-180' />
                    }
                </button>

                {filterOption === false &&
                    <ul>
                        {
                            selectedFilters.map((filter) => (
                                <motion.div
                                    key={filter}
                                    animate={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: .4 }}
                                    layout
                                    className='bg-premiumColor text-center mr-2 ml-3 text-white rounded-md text-[.8rem] mb-1 py-1 px-2 inline-block w-[100px]'>
                                    <li>{filter}</li>
                                </motion.div>
                            ))
                        }
                    </ul>}
            </div>

            <div className='checkboxes-container py-6 shadow-customShadow rounded-md w-[100%] h-[280px] pl-3 border-[1px] border-gray-200 transition-[height] duration-[.3s] mt-7 mb-7'>

                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Photoshop" checkMark="Photoshop" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="A.  Illustrator" checkMark="Adobe Illustrator" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Q. Dizayn" checkMark="Qrafik Dizayn" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Eskiz" checkMark="Eskiz" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Developer" checkMark="Developer" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Musiqi" checkMark="Musiqi" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Biznes" checkMark="Biznes" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Məntiq" checkMark="Məntiq" />
                <CustomCheckBox handleFilterChange={handleFilterChange} checkValue="Marketinq" checkMark="Marketinq" />
            </div>
        </>
    )
}

export default SelectedFilter