import React, { useRef } from 'react'

import { BsSearch } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

const InputBox = ({inputBoxHolder}) => {
    const inputBoxRef = useRef()

    const getSearchBox = (e) => {
        if (e.target.classList.contains('search-icon')) {
            inputBoxRef.current.classList.add('open')
        } else {
            inputBoxRef.current.classList.remove('open')
        }
    }
    return (
        <>
            <div className='input-box' ref={inputBoxRef}>
                <input
                    type="text" name="" id=""
                    placeholder={inputBoxHolder} />

                <button className='search-icon' onClick={getSearchBox}>
                    <BsSearch className='search-icon-in pointer-events-none' />
                </button>

                <button className='close-icon' onClick={getSearchBox}>
                    <VscChromeClose />
                </button>
            </div>
        </>
    )
}

export default InputBox