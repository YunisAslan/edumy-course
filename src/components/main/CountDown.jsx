import React from 'react'

const CountDown = () => {

    return (
        <>
            <section className="timer-container">
                <div className="timer">

                    <div className="clock space-x-4 flex bg-white font-extrabold text-blue-600 drop-shadow-md shadow-blue-600/50 border-[2px] border-gray-400 rounded-lg shadow-lg justify-center">
                        <section className='text-center text-[2.5rem]'>
                            <p className='text-[4rem]'>23</p>
                            <small className='text-[2.5rem]'>Days</small>
                        </section>
                        <span className='flex items-center text-[2.5rem]'>:</span>
                        <section className='text-center'>
                            <p className='text-[4rem]'>12</p>
                            <small className='text-[2.5rem]'>Hours</small>
                        </section>
                        <span className='flex items-center text-[2.5rem]'>:</span>
                        <section className='text-center'>
                            <p className='text-[4rem]'>34</p>
                            <small className='text-[2.5rem]'>Minutes</small>
                        </section>
                        <span className='flex items-center text-[2.5rem]'>:</span>
                        <section className='text-center'>
                            <p className='text-[4rem]'>13</p>
                            <small className='text-[2.5rem]'>Seconds</small>
                        </section>
                    </div>

                </div>
            </section>
        </>
    )
}




export default CountDown