import React from 'react'

const CustomCheckBox = ({ checkValue, handleFilterChange, checkMark }) => {
    return (
        <>
            <div className='items-center flex'>
                <input className='input-checkbox' type="checkbox" id={checkValue} value={checkValue} onChange={handleFilterChange} />
                <label className='checkmark text-myBlack font-[500]' htmlFor={checkValue}>{checkMark}</label>
            </div>
        </>
    )
}

export default CustomCheckBox