import React from 'react'

const Partner = ({ imageUrl }) => {
    return (
        <>
            <div className='w-[150px] flex justify-center mr-32'>
                <img src={imageUrl} alt="" />
            </div>
        </>
    )
}

export default Partner