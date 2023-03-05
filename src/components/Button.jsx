import React from 'react'

const Button = ({classname, btnText}) => {
    return (
        <>
            <button className={classname}>
                {btnText}
            </button>
        </>
    )
}

export default Button