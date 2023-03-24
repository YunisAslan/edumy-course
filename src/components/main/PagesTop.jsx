import React from 'react'

import Typed from 'react-typed';


const PagesTop = ({ main_page, current_page }) => {
    return (
        <>
            <header
                className='relative before:bg-premiumColor before:absolute before:w-full before:h-full'
                style={{
                    backgroundImage: 'url(https://res.cloudinary.com/drx9zihrg/image/upload/v1678443392/Course%20bg%20images%20for%20Edumy/inner-pagebg_xfvqxc.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "65vh"
                }}
            >


                <div className="pages-top-titles absolute flex-col text-white  flex justify-center items-center w-[100%] h-[100%] pt-[2rem]">
                    {/* <span className='text-[1.4rem]'>{main_page} / {current_page}</span> */}
                    <Typed className='mm:text-3xl mm:px-6 sm:text-4xl md:text-6xl font-zillaFont font-[600] -tracking-tighter'
                        strings={[`${main_page} / ${current_page}`]}
                        typeSpeed={70}
                        loop
                    />
                </div>



            </header>
        </>
    )
}

export default PagesTop
