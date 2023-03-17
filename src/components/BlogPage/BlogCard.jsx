import React from 'react'

const BlogCard = () => {
    return (
        <>
            <div className="parent-for-scale mm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
                <div className="child-for-scale right-news">

                    <span className="absolute left-7 top-6 text-gray-200 text-[.9rem]">
                        May 27, &nbsp; 2023
                    </span>

                    <div className="right-news-bottom absolute bottom-6 left-7">
                        <h6 className='text-gray-200 text-[.9rem] pb-2'>Biznes</h6>
                        <p className='text-white'>Arzular gerçəkləşdi: Tələbələr üçün təqaüd Fondu</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard