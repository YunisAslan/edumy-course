import React from 'react'

import Lottie from 'react-lottie-player'
import LotiiMessage from '../../assets/images/LottieMessage.json'
import LotiiCall from '../../assets/images/LottieCall.json'
import LotiiLocation from '../../assets/images/LocaLottie.json'

const ContactIcons = () => {

    return (
        <>

            <div className="contact-lotties mm:block lg:flex items-center justify-between px-32">

                <div className='flex flex-col items-center text-center justify-center '>
                    <Lottie
                        loop
                        animationData={LotiiLocation}
                        play
                        style={{ width: 200, height: 200 }}
                    />

                    <h2 className='sm:text-[1.5rem] mm:text-lg font-[500] text-myBlack pb-2'>Ünvan</h2>
                    <span className='mm:text-sm sm:text-base text-myBlack'>Elmlər akademiyası, <br /> Bəxtiyar Vahabzadə küçəsi</span>
                </div>

                <div className='flex flex-col items-center text-center justify-center'>
                    <Lottie
                        loop
                        animationData={LotiiMessage}
                        play
                        style={{ width: 200, height: 200 }}
                    />

                    <h2 className='sm:text-[1.5rem] mm:text-lg font-[500] text-myBlack pb-2'>Bizə yazın</h2>
                    <span className='mm:text-sm sm:text-base text-myBlack'>Info@edumy.com</span>
                </div>

                <div className='flex flex-col items-center text-center justify-center'>
                    <Lottie
                        loop
                        animationData={LotiiCall}
                        play
                        style={{ width: 200, height: 200 }}
                    />

                    <h2 className='sm:text-[1.5rem] mm:text-lg font-[500] text-myBlack pb-2'>Telefon</h2>
                    <a href="tel:+994509758292" className='mm:text-sm sm:text-base text-myBlack'>+994-50-975-8292</a>
                </div>

            </div>

        </>
    )
}

export default ContactIcons