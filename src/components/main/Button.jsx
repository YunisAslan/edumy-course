import React from 'react'

const Button = ({ classname, btnText, btnSubmit, onClick }) => {
    return (
        <>
            <button className={classname} type={btnSubmit && "submit"} onClick={onClick}>
                {btnText}
            </button>
        </>
    )
}

export default Button