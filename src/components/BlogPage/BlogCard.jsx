import React from 'react'

const BlogCard = ({...oneBlog}) => {
    return (
        <>
            <div className="parent-for-scale col-span-2">
                <div className="child-for-scale blog-news"
                style={{
                    backgroundImage: `url(${oneBlog.blog_img})`
                }}
                >

                    <span className="absolute left-7 top-6 text-gray-200 text-[.9rem]">
                       {oneBlog.blog_date}
                    </span>

                    <div className="blog-news-bottom absolute bottom-6 left-7">
                        <h6 className='text-gray-200 text-[.9rem] pb-2'>{oneBlog.blog_title}</h6>
                        <p className='text-white pr-5'>{oneBlog.blog_detail}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard