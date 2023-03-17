import React from 'react'

import PagesTop from '../main/PagesTop'
import BlogCard from './BlogCard'

const BlogListContainer = () => {
    return (
        <>
            <div className='blog-list-container'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>
    )
}

export default BlogListContainer