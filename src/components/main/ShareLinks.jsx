import React from 'react'

import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsDribbble, BsGoogle } from "react-icons/bs";

const ShareLinks = ({className}) => {
    return (
        <>
            <div className={className}>
                <a href="" className="transition-all duration-300"><BsFacebook /></a>
                <a href="" className="transition-all duration-300"><BsTwitter /></a>
                <a href="" className="transition-all duration-300"><BsInstagram /></a>
                <a href="" className="transition-all duration-300"><BsPinterest /></a>
                <a href="" className="transition-all duration-300"><BsDribbble /></a>
                <a href="" className="transition-all duration-300"><BsGoogle /></a>
            </div>
        </>
    )
}

export default ShareLinks