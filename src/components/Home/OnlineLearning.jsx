import React from 'react'
import Button from '../main/Button'

const OnlineLearning = () => {
    return (
        <>

            <div className="online-learning uppercase text-white text-center flex flex-col justify-center z-[50]">
                <h6
                    data-aos="fade"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="700">Onlayn öyrənməyə başla</h6>
                <h2 className='px-2 pt-2 sm:text-[2.5rem] mm:text-[2rem] font-[700]'
                    data-aos="fade"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1800">Ən yaxşı onlayn kurslarla <br /> bacarıqlarınızı artırın</h2>

                <div className='z-[1]'>
                    <Button btnText="İndi başla" classname="my-custom-btn start-now-btn" />
                </div>
            </div>

        </>
    )
}

export default OnlineLearning