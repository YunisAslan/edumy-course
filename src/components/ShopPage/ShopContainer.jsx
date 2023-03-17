import React, { useState } from 'react'
import InputBox from '../main/InputBox'
import ShopCard from './ShopCard'

import ShopCardInfo from '../../JSONs/ShopInfos.json'
import SelectedFilter from '../main/SelectedFilter';

//slider for products price

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const ShopContainer = () => {

    function valuetext(value) {
        return `${value}°C`;
    }

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const sliderStyle = {
        width: 220, // set the desired width here,
        opacity: 0.9,
        color: 'rgba(25, 38, 117, 0.7)',
        marginLeft: '1.6rem',
    };

    return (
        <>
            <div className="shop-main-container py-[6rem] px-6 grid grid-cols-12">

                <div className="shop-main-left xl:col-span-9 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12">

                    <div className="shop-main-left-head flex justify-between items-center pb-6">
                        <span>17 nəticə</span>

                        <InputBox inputBoxHolder="Məhsulları axtar"/>
                    </div>

                    <div className="shop-cards grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-6">
                        {
                            ShopCardInfo.map((oneCard) => (
                                <ShopCard  {...oneCard} />
                            ))
                        }
                    </div>

                </div>

                <div className="shop-main-right mm:pt-[5.6rem] xl:pt-0 pl-0 xl:pl-10 xl:col-span-3 lg:cols-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12">

                    <SelectedFilter />

                    <div className='shadow-customShadow rounded-md w-[100%] h-[130px] pt-3'>
                        <h2 className='font-[700] pl-3 pb-4'>Qiymət</h2>

                        <Box sx={{ width: 300 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                style={sliderStyle}
                                className="slider"
                            />
                        </Box>

                        <span className='flex justify-center text-premiumColor font-[700] text-[1.2rem]'>
                            &#x24;{value[0]} &nbsp; <span>-</span> &nbsp; &#x24;{value[1]}
                        </span>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ShopContainer