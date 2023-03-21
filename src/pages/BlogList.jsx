import React from 'react'
import BlogListContainer from '../components/BlogPage/BlogListContainer'
import PagesTop from '../components/main/PagesTop'

const BlogList = () => {
    return (
        <>
            <PagesTop main_page="Blog" current_page="Bloglar" />
            <BlogListContainer />
        </>
    )
}

export default BlogList