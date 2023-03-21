import React from 'react'


const CoursesBox = ({ courseHead, courseDetail, courseImg }) => {
    return (
        <>
            <div className="course-box cursor-pointer w-[300px] h-[166px] rounded-md text-white flex justify-center flex-col items-center" style={{
                backgroundImage: `url(${courseImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <h2 className='text-lg font-[500]'>{courseHead}</h2>
                <h3>{courseDetail}</h3>
            </div>
        </>
    )
}

export default CoursesBox