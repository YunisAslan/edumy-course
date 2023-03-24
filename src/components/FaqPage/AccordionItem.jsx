import React, { useState } from 'react'

import { BsChevronDown } from "react-icons/bs";
import { AnimatePresence, motion } from 'framer-motion';

const AccordionItem = ({ faq_answer, faq_question }) => {

    const [isActive, setIsActive] = useState(false);


    return (
        <>
            <div className='accordion-item pb-4'>

                <div
                    className="accordion-head cursor-pointer text-premiumColor/100 font-[700] flex justify-between relative"
                    onClick={() => setIsActive(!isActive)}>

                    <h2 className="accordion-question mm:text-[1.2rem] lg:text-[1.5rem]">{faq_question}</h2>
                    <span>
                        {isActive
                            ? <BsChevronDown className='rotate-[360deg] transition-all duration-[.8s] text-[1.2rem]' />
                            : <BsChevronDown className='rotate-[180deg] transition-all duration-[.8s] text-[1.2rem]' />}
                    </span>
                </div>

                {isActive &&
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            exit={{opacity: 0}}
                            animate={{
                                opacity: 1
                            }}
                            transition={{ duration: .4 }}


                            className="accordion-detail pt-4 pl-5 text-premiumColor/100">
                            <p>{faq_answer}</p>
                        </motion.div>
                    </AnimatePresence>
                }
            </div>
        </>


    )
}

export default AccordionItem