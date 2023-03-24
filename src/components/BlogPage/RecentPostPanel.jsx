import React from 'react'
import RecentPost from './RecentPost'


// props
const recentPostData1 = {
    postImg: "https://res.cloudinary.com/drx9zihrg/image/upload/v1679114993/s1_jsajsv.jpg",
    postTitle: "Qəhvə haqqında bilmədiklərimiz",
    postDate: "Mart 21, 2023"
}

const recentPostData2 = {
    postImg: "https://res.cloudinary.com/drx9zihrg/image/upload/v1679115010/s2_sls9cq.jpg",
    postTitle: "Dostlarla kommunikasiya",
    postDate: "Mart 11, 2023"
}


const recentPostData3 = {
    postImg: "https://res.cloudinary.com/drx9zihrg/image/upload/v1679115027/s3_jhaad5.jpg",
    postTitle: "Səyahətə başlamaq üçün ən yaxşı yerlər",
    postDate: "Mart 4, 2023"
}


const RecentPostPanel = () => {
    return (
        <>
            <div className='bg-softBlue shadow-customShadow rounded-lg p-4 mt-6 text-myBlack'>

                <h2 className='font-[500] text-xl'>Son Postlar</h2>

                <RecentPost {...recentPostData1} />
                <RecentPost {...recentPostData2}/>
                <RecentPost {...recentPostData3}/>

            </div>
        </>
    )
}

export default RecentPostPanel