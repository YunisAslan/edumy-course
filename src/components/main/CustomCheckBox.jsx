import React from 'react'

const CustomCheckBox = ({ checkValue, handleFilterChange, checkMark }) => {
    return (
        <>
            <div className='items-center flex'>
                <input className='input-checkbox' type="checkbox" id={checkValue} value={checkValue} onChange={handleFilterChange} />
                <label className='checkmark' htmlFor={checkValue}>{checkMark}</label>
            </div>
        </>
    )
}

export default CustomCheckBox