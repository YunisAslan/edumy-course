import React from 'react'
import SingleBlogContainer from '../components/BlogPage/SingleBlogContainer'
import PagesTop from '../components/main/PagesTop'

const Blog = () => {
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Blog" />
            <SingleBlogContainer />
        </>
    )
}

export default Blog