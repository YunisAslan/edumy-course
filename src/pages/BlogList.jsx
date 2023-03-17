import React from 'react'
import BlogListContainer from '../components/BlogPage/BlogListContainer'
import PagesTop from '../components/main/PagesTop'

const BlogList = () => {
    return (
        <>
            <PagesTop main_page="Bloqlar" current_page="Bloqlar" />
            <BlogListContainer />
        </>
    )
}

export default BlogList