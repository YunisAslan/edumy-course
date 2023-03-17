import React, { useState, useEffect } from 'react'

import { BsFillArrowUpCircleFill } from "react-icons/bs";


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
                <button className="scroll-to-top-btn text-[2rem] right-4 bottom-4  fixed text-white bg-black/90 rounded-full z-50" 
                onClick={scrollToTop}>
                    <BsFillArrowUpCircleFill />
                </button>
            )}

        </>
    )
}

export default UpArrow