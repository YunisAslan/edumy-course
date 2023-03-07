import React from 'react'

const Button = ({classname, btnText, onClick}) => {
    return (
        <>
            <button className={classname} onClick={onClick}>
                {btnText}
            </button>
        </>
    )
}

export default Button