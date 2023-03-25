import React from 'react'
import BlogListContainer from '../components/BlogPage/BlogListContainer'
import PagesTop from '../components/main/PagesTop'

const BlogList = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Bloglar" />
            <BlogListContainer />
        </>
    )
}

export default BlogList