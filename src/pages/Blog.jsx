import React from 'react'
import SingleBlogContainer from '../components/BlogPage/SingleBlogContainer'
import PagesTop from '../components/main/PagesTop'

const Blog = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Blog" />
            <SingleBlogContainer />
        </>
    )
}

export default Blog