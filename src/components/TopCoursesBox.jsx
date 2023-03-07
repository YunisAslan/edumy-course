import React, { useState } from 'react'

import { RxPerson } from "react-icons/rx";
import { BiCommentDetail } from "react-icons/bi";

import { motion, AnimatePresence } from 'framer-motion'

const TopCoursesBox = ({ post_img, post_head, post_detail, post_star1, post_star2, post_star3, post_star4, post_star5, post_rating, post_comment, post_participant, post_price, post_seller }) => {

    //
    const [showOverlay, setShowOverlay] = useState(false)

    const handleMouseEnter = () => {
        return setShowOverlay(true)
    }

    const handleMouseLeave = () => {
        return setShowOverlay(false)
    }

    return (
        <>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                className='browse-course-box text-black w-[300px] h-[410px] border-gray-300 border-[1px] rounded-lg cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                <div className='relative' >
                    <img src={post_img} alt="" className='rounded-lg' />
                    <AnimatePresence>
                        {showOverlay && (
                            <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>
                                {post_seller && //post_seller===true
                                    <button className='text-white z-[3] bg-red-800 rounded-xl px-3 py-1 top-3 left-2 absolute'>
                                        {"Best Seller"}
                                    </button>
                                }

                                <span
                                    className='absolute h-full w-full items-center flex justify-center top-0 text-white font-[700] bg-gray-900/30 transition-colors rounded-lg'>
                                    Kursa Baxış
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="post-head px-4">
                    <h2 className='text-[1.3rem] pt-7 pb-1'>{post_head}</h2>
                    <p>{post_detail}</p>
                </div>

                <div className="post-rating flex px-4 pt-4 pb-8">
                    <span>
                        <img src={post_star1} alt="" className='w-6' />
                    </span>
                    <span>
                        <img src={post_star2} alt="" className='w-6' />
                    </span>
                    <span>
                        <img src={post_star3} alt="" className='w-6' />
                    </span>
                    <span>
                        <img src={post_star4} alt="" className='w-6' />
                    </span>
                    <span>
                        <img src={post_star5} alt="" className='w-6' />
                    </span>
                    <span className='pl-3'>
                        ({post_rating})
                    </span>
                </div>

                <div className="comment-price flex items-center pt-1 px-2 justify-between border-t-[1px] border-gray-300">

                    <span className='flex items-center'>
                        <RxPerson className='mr-1' /> <span>{post_participant}</span>
                        <BiCommentDetail className='ml-3 mr-1' /> <span>{post_comment}</span>
                    </span>

                    <span>&#x24;{post_price}</span>

                </div>

            </motion.div>
        </>
    )
}

export default TopCoursesBox