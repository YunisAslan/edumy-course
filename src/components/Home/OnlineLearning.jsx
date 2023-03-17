import React from 'react'
import Button from '../main/Button'

const OnlineLearning = () => {
    return (
        <>

            <div className="online-learning uppercase text-white text-center flex flex-col justify-center z-[999]">
                <h6>Onlayn öyrənməyə başla</h6>
                <h2 className='px-2 pt-2 sm:text-[2.5rem] mm:text-[2rem] font-[700]'>Ən yaxşı onlayn kurslarla <br /> bacarıqlarınızı artırın</h2>

                <div className='z-[1]'>
                    <Button btnText="İndi başla" classname="my-custom-btn start-now-btn" />
                </div>
            </div>

        </>
    )
}

export default OnlineLearning