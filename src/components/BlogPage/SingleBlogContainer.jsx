import React from 'react'

import BlogPostInfo from '../../JSONs/blogPost.json'
import CategoryPanel from '../main/CategoryPanel'
import InputBox from '../main/InputBox'
import BlogPostCard from './BlogPostCard'
import RecentPostPanel from './RecentPostPanel'
import TagPanel from './TagPanel'
import ShareLinks from '../main/ShareLinks'

const SingleBlogContainer = () => {
    return (
        <>
            <div className="single-blog-container grid grid-cols-12 pt-24 px-6">

                <div className="single-blog-container-left xl:col-span-9 mm:col-span-12 xl:pr-6 mm:pr-0">
                    {BlogPostInfo.map(onePost => (
                        onePost.available_post_page &&
                        <BlogPostCard key={onePost.id} {...onePost} />
                    ))}

                    <div className="event-desc pt-0 pr-4">
                        <h2 className='pb-3 font-[500] text-[1.4rem]'>EVENT</h2>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio doloremque cupiditate adipisci veniam. Incidunt placeat natus nihil quo, ex, itaque possimus, sunt doloremque perferendis repellendus quod commodi accusantium vitae quos.</p>
                        <p className='pt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam aliquam nulla eligendi minus quisquam cumque quos ratione, error rerum?</p>
                    </div>

                    <div className="event-content pt-6">
                        <h2 className='font-[500] pb-3 text-[1.4rem]'>Event Content</h2>

                        <ul className='list-titles pl-4'>
                            <li>You will need a copy of Adobe XD 2019 or above. A free trial can b</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, blanditiis.</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi </li>
                        </ul>
                    </div>

                    <blockquote className='ml-10'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </blockquote>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga consectetur adipisci voluptate pariatur laboriosam iure amet atque esse magni. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque aperiam porro. Quod adipisci itaque ex odio eos saepe harum.
                    </p>

                    <div className='share-links flex items-center pt-6'>
                        <span className='text-[1.3rem]'>Share: </span>

                        <ShareLinks className="event-share text-black flex items-center space-x-3 text-[1.3rem] pl-3" />
                    </div>
                </div>




                <div className="single-blog-container-right mm:col-span-12 xl:col-span-3 xl:pt-0 mm:pt-10">
                    <InputBox inputBoxHolder="Burada axtar" />
                    <CategoryPanel />
                    <RecentPostPanel />
                    <TagPanel tag1="Yeni" tag2="Sketch" tag3="Biznes" />
                </div>

            </div>
        </>
    )
}

export default SingleBlogContainer