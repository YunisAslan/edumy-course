import React, { useState } from 'react'

import { RxPerson } from "react-icons/rx";
import { BiCommentDetail } from "react-icons/bi";

import { motion, AnimatePresence } from 'framer-motion'


const TopCoursesBox = ({ ...post }) => {


    const [showOverlay, setShowOverlay] = useState(false)

    const handleMouseEnter = () => {
        return setShowOverlay(true)
    }

    const handleMouseLeave = () => {
        return setShowOverlay(false)
    }

    return (
        <>

            <div className='flex justify-center'>
                
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    layout
                    className='browse-course-box text-black w-[300px] h-[430px] border-gray-300 border-[1px] rounded-[4px] cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                    <div className='relative' >

                        <img src={post.post_img} alt="" className='rounded-[4px]' />
                        <AnimatePresence>
                            {showOverlay && (
                                <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>
                                    {post.post_seller && //post_seller===true
                                        <button className='text-white z-[3] bg-red-800 rounded-[6px] px-3 py-1 top-3 left-2 absolute'>
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

                    <div className="post-head px-4 pt-5">
                        <h2 className='text-[1.3rem] pb-2'>{post.post_head}</h2>
                        <p>{post.post_detail}</p>
                    </div>

                    <div className="post-rating flex px-4 pt-4 pb-8 space-x-1 items-center">
                        <span>
                            <img src={post.post_star1} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={post.post_star2} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={post.post_star3} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={post.post_star4} alt="" className='w-5' />
                        </span>
                        <span>
                            <img src={post.post_star5} alt="" className='w-5' />
                        </span>
                        <span className='pl-3'>
                            ({post.post_rating})
                        </span>
                    </div>

                    <div className="comment-price flex items-center pt-2 px-3 justify-between border-t-[1px] border-gray-300">

                        <span className='flex items-center'>
                            <RxPerson className='mr-1 text-[1.5rem] text-slate-600' /> <span className='text-[1.1rem] text-slate-600'>{post.post_participant}</span>
                            <BiCommentDetail className='ml-3 mr-1 text-[1.5rem] text-blue-800' /> <span className='text-[1.1rem] text-blue-800'>{post.post_comment}</span>
                        </span>

                        <span className='text-[1.3rem] text-red-800'>&#x24;{post.post_price}</span>

                    </div>

                </motion.div>
            </div>
        </>
    )
}

export default TopCoursesBox