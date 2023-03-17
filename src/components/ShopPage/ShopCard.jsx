import React, { useState } from 'react'

import { FaOpencart } from "react-icons/fa";



const ShopCard = ({...oneCard}) => {

    const [showHover, setShowHover] = useState(false)

    return (
        <>
            <div className="shop-card bg-blue-200 rounded-lg w-[300px] h-[380px] cursor-pointer"
                onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)}
            >

                <div className="shop-image pt-3 flex justify-center items-center">
                    <img src={oneCard.shop_img} alt="" />
                </div>

                <div className="shop-card-details pt-5 pl-6 justify-between">

                    <h6 className='text-[1.3rem] text-red-800'>&#x24;{oneCard.shop_price}</h6>
                    <h2 className='text-[1.1rem]'>{oneCard.shop_title}</h2>

                    <div className="shop-rating flex pt-2 space-x-1 items-center">
                        <span>
                            <img src={oneCard.shop_star1} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneCard.shop_star2} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneCard.shop_star3} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneCard.shop_star4} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={oneCard.shop_star5} alt="" className='w-5' />
                        </span>
                        <span className='pl-2 text-[1.1rem]'>
                            ({oneCard.shop_rating})
                        </span>
                    </div>

                    <div className='flex pb-8 relative'>
                        {showHover &&

                            <span className='bg-blue-600 text-white rounded-full p-3 absolute right-3 bottom-3'>
                                <FaOpencart className='text-[1.8rem]'/>
                            </span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard