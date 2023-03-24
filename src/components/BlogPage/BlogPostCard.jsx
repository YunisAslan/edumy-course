import React from 'react'

import { RxPerson } from "react-icons/rx";
import { BiCommentDetail } from "react-icons/bi";

const BlogPostCard = ({...oneBlog}) => {
    return (
        <>

            <div className='blog-post-card pb-12'>

                <div className='blog-post-background relative inset-0 rounded-lg before:rounded-lg before:bg-beautyGray before:absolute before:h-full before:w-full'
                    style={{
                        backgroundImage: `url(${oneBlog.post_img})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: "80vh"
                    }}
                >

                    <span className='category absolute bottom-5 left-6 text-[#FAFAFA]'>{oneBlog.post_category}</span>

                    <div className='text-white absolute text-center right-6 bottom-5 line'>
                        <h2 className='text-[3.4rem] font-[700] -mb-3'>{oneBlog.post_day}</h2>
                        <span className='text-[1.6rem]'>{oneBlog.post_month}</span>
                    </div>

                </div>

                <div className="blog-post-detail pt-5 text-myBlack">
                    <h2 className='font-[500] text-[1.5rem] mm:text-center sm:text-justify'>{oneBlog.post_title}</h2>

                    <div className='flex pt-4 mm:justify-center sm:justify-start'>
                        <span className='flex'>
                            <RxPerson className='mr-2 text-[1.5rem] text-slate-600' />{oneBlog.post_author}</span>
                        <span className='flex pl-5'>
                            <BiCommentDetail className='mr-2 text-[1.5rem] text-blue-800' />
                            {oneBlog.post_comments}
                        </span>
                    </div>

                    <p className='pt-6 pr-6 text-lg mm:text-center sm:text-justify'>{oneBlog.post_detail}</p>
                </div>

            </div>
        </>
    )
}

export default BlogPostCard