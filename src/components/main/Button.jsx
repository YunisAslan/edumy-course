import React from 'react'

const Button = ({classname, btnText, btnSubmit}) => {
    return (
        <>
            <button className={classname} type={btnSubmit && "submit"}>
                {btnText}
            </button>
        </>
    )
}

export default Button