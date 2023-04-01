import React, { useState, useEffect } from 'react';

import comingSoonLottie from '../../assets/images/coming-soon.json'
import Lottie from 'react-lottie-player'

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const releaseDate = new Date("2023-08-30"); // Replace this with your release date
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const differenceInTime = releaseDate.getTime() - currentDate.getTime();
            const weeks = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 7));
            const days = Math.floor(
                (differenceInTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
            );
            const hours = Math.floor(
                (differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (differenceInTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);
            setTimeLeft({ weeks, days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='mt-20 px-10'>
            <h2 className='text-4xl font-[500] text-center text-myBlack'>Tezliklə..</h2>
            <div className='flex justify-center'>
                <Lottie
                    loop
                    animationData={comingSoonLottie}
                    play
                    style={{ width: 350, height: 350 }}
                />
            </div>
            <p className='flex justify-center text-center pt-3 mm:text-xl sm:text-2xl gap-5 text-myBlack'>

                <span>{timeLeft.weeks} həftə</span>
                <span>{timeLeft.days} gün </span>
                <span>{timeLeft.hours} saat</span>
                <span>{timeLeft.minutes} dəqiqə</span>
                <span>{timeLeft.seconds} saniyə</span>
                

            </p>
        </div>
    )
}

export default ComingSoon