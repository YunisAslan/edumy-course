import React from 'react'

import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadButtons = ({ appleIcon, playIcon, storeName, className }) => {
    return (
        <div className='download-btns flex'>
            
            <button className={className}>

                <span>
                    {
                        appleIcon && <FaApple className='text-[3rem]' />
                        ||
                        playIcon && <FaGooglePlay className='text-[3rem]' />
                    }
                </span>

                <span className='flex flex-col pl-3'>
                    <span className='font-[700] text-white'>{storeName}</span>
                    <span className='flex text-[.9rem]'>Daxil ol</span>
                </span>

            </button>

        </div>
    )
}

export default DownloadButtons