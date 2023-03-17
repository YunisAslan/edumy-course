import React from 'react'

import DownloadButtons from '../main/DownloadButtons';


const DownloadEnjoy = () => {
    return (
        <>
            <section className="download-enjoy mb-24 relative before:absolute inset-0 before:bg-premiumColor/50 before:w-full before:h-full" style={{
                backgroundImage: "url(https://res.cloudinary.com/drx9zihrg/image/upload/v1678340093/Course%20bg%20images%20for%20Edumy/3_dj6tfq.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: "70vh", backgroundAttachment: 'fixed'
            }}>

                <div className="download-container flex flex-col justify-center h-full px-10 text-white absolute">
                    <h2 className='capitalize font-[500] text-[2rem] pb-1'>Yükləyin & həzz alın</h2>
                    <p className='pb-9'>
                        İstənilən yerdə, istədiyiniz zaman kurslarınıza daxil olun <br /> və təcrübə testlərindən keçərək, hazır olun.
                    </p>

                    <div className='flex md:flex-row mm:flex-col mm:space-x-0 mm:space-y-4 md:space-y-0 md:space-x-5'>
                        <DownloadButtons className="store-btn store-btn-enjoy" storeName="App Store" appleIcon=" " />
                        <DownloadButtons className="store-btn store-btn-enjoy" storeName="Google Play" playIcon=" " />
                    </div>

                </div>

            </section>
        </>
    )
}

export default DownloadEnjoy