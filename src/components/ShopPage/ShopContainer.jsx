import React, { useEffect, useState } from 'react'
import InputBox from '../main/InputBox'
import ShopCard from './ShopCard'

import ShopCardInfo from '../../JSONs/ShopInfos.json'
import SelectedFilter from '../main/SelectedFilter';

//slider input (range ) for products price
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ShopContainer = () => {

    const [value, setValue] = useState([20, 37]);
    const [shopData, setShopData] = useState(ShopCardInfo)
    // const [currentShopData, setCurrentShopData] = useState([])

    // input slider
    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChangeSlider = (e, newValue) => {
        setValue(newValue);
    };

    const sliderStyle = {
        width: 220,
        opacity: 0.9,
        color: 'rgba(25, 38, 117, 0.7)',
        marginLeft: '2rem'
    };

    // select box && sort
    const [sortValue, setSortValue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setShopData(ShopCardInfo)

            if (sortValue === 'ascending') {
                setAscending()
            } else if (sortValue === 'descending') {
                setDescending()
            }
        }, 1500);

    }, [sortValue])

    const setAscending = () => {
        const sortedPost = [...shopData].sort((a, b) => a.shop_price - b.shop_price)
        setShopData(sortedPost)
    }
    const setDescending = () => {
        const sortedPost = [...shopData].sort((a, b) => b.shop_price - a.shop_price)
        setShopData(sortedPost)
    }

    const handleChange = (e) => {
        setSortValue(e.target.value);
    };

    return (
        <>
            <div className="shop-main-container py-[6rem] px-6 grid grid-cols-12">

                <div className="shop-main-left xl:col-span-9 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12">

                    <div className="shop-main-left-head flex sm:flex-row mm:flex-col sm:justify-between mm:justify-center items-center pb-6">

                      

                        <div className='flex items-center space-x-10'>

                            <span>{shopData.length} nəticə</span>

                            <span>Qiymətə görə sırala:</span>
                            <FormControl sx={{ m: 1, width: '100px', '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: '1px solid blue' } }}>
                                <InputLabel id="demo-simple-select-helper-label">Sırala</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={sortValue}
                                    label="Sırala"
                                    onChange={handleChange}
                                >

                                    <MenuItem value="">
                                        <em>Heç biri</em>
                                    </MenuItem>

                                    <MenuItem value="ascending">Ucuzdan bahaya</MenuItem>

                                    <MenuItem value="descending">Bahadan ucuza</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <InputBox inputBoxHolder="Məhsulları axtar" />
                    </div>

                    <div className="shop-cards grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8">
                        {loading ? (
                            <div className='col-span-12 grid place-content-center'>
                            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                <CircularProgress sx={{ color: 'blue' }} />
                            </Stack>
                        </div>
                        ) : (
                            shopData.map((oneCard) => (
                                <ShopCard key={oneCard.id}  {...oneCard}/>
                            ))
                        )}
                    </div>
                </div>

                <div className="shop-main-right mm:pt-[5.6rem] xl:pt-0 pl-0 xl:pl-10 xl:col-span-3 lg:cols-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12">

                    <SelectedFilter />

                    <div className='bg-softBlue text-myBlack shadow-customShadow rounded-md w-[100%] h-[130px] pt-3'>
                        <h2 className='font-[500] pl-3 pb-4'>Qiymət</h2>

                        <div className='flex justify-center'>
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    getAriaLabel={() => 'Price range'}
                                    value={value}
                                    onChange={handleChangeSlider}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    style={sliderStyle}
                                    className="slider"
                                />
                            </Box>
                        </div>

                        <span className='flex justify-center text-premiumColor/100 font-[700] text-[1.2rem]'>
                            &#x24;{value[0]} &nbsp; <span>-</span> &nbsp; &#x24;{value[1]}
                        </span>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ShopContainer