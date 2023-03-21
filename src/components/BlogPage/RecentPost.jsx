import React from 'react'

const RecentPost = ({ postImg, postTitle, postDate }) => {
    return (
        <>
            <div className='recent-post flex items-center mt-4'>

                <img src={postImg} alt="" className='w-[70px] mr-4' />

                <div>
                    <h2>{postTitle}</h2>
                    <span className='text-[.8rem]'>{postDate}</span>
                </div>

            </div>
        </>
    )
}

export default RecentPost