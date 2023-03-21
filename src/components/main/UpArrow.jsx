import React, { useState, useEffect } from 'react'

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";
import { BsArrowUp } from 'react-icons/bs';




const UpArrow = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (
        <>

            {isVisible && (
                <button className="scroll-to-top-btn text-[1.5rem] right-4 bottom-4 p-2 font-[700] fixed rounded-full z-50 bg-white text-black" 
                onClick={scrollToTop}>
                    <BsArrowUp />
                </button>
            )}

        </>
    )
}

export default UpArrow