import React from 'react'

import PagesTop from '../main/PagesTop'
import BlogCard from './BlogCard'

import BlogInfo from '../../JSONs/blogInfo.json'
import PostBlogInfo from '../../JSONs/blogPost.json'
import BlogPostCard from './BlogPostCard'
import InputBox from '../main/InputBox'
import CategoryPanel from '../main/CategoryPanel'
import RecentPost from './RecentPost'
import RecentPostPanel from './RecentPostPanel'
import TagPanel from './TagPanel'

const BlogListContainer = () => {
    return (
        <>
            <div className='blog-list-container'>

                <div className='blog-list-featured pt-16'>

                    <h2 className='text-center font-[500] text-[1.7rem]'>Yeni Bloqlar</h2>

                    <div className='grid grid-cols-12 pt-16'>
                        {
                            BlogInfo.map((oneBlog) => (
                                <div key={oneBlog.blog_id} className='pb-10 xl:col-span-3 lg:col-span-6 mm:col-span-12 px-4'>
                                    <BlogCard  {...oneBlog} />
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="blog-post-container pt-24 px-6 grid grid-cols-12">

                    <div className='blog-post-left mm:pr-0 xl:pr-6 xl:col-span-9 lg:col-span-12 mm:col-span-12'>
                        {PostBlogInfo.map((onePost) => (
                            <BlogPostCard {...onePost} key={onePost.id} />
                        ))}
                    </div>

                    <div className="blog-post-right mm:col-span-12 xl:col-span-3">

                        <InputBox inputBoxHolder="Burada axtar" />
                        <CategoryPanel />
                        <RecentPostPanel />
                        <TagPanel tag1="Yeni" tag2="Biznes" tag3="Marketinq" />
                    </div>



                </div>

            </div>
        </>
    )
}

export default BlogListContainer