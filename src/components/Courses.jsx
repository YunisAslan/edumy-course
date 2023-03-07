import React from 'react'

import Button from './Button'
import CoursesBox from './CoursesBox'
import coursesInfo from '../coursesInfo.json'


const Courses = () => {
    return (
        <>
            <section className='courses-section mt-[5rem] mb-[10rem]'>
                <div className="courses-head text-center pb-10">
                    <h2 className='text-[1.6rem] font-[700] pb-1'>Kurs kateqoriyaları</h2>
                    <h6 className='px-5'>Güclü təməl üçün bizim kursları seçməlisiniz</h6>
                </div>

                <div className='courses-box grid mm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 place-items-center mx-10'>
                    {
                        coursesInfo.map((oneCourse) => (
                            <div key={oneCourse.course_id}>
                                <CoursesBox courseHead={oneCourse.course_head} courseDetail={oneCourse.course_detail} courseImg={oneCourse.course_img} />
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-center font-[700]'>
                    <Button btnText="Bütün Kurslara Baxın" classname="my-custom-btn view-course-btn" />
                </div>


                <div className="online-learning mt-10 uppercase text-white text-center flex flex-col justify-center z-[999]">
                    <h6>Onlayn öyrənməyə başla</h6>
                    <h2 className='px-2 pt-2 sm:text-[2.5rem] mm:text-[2rem] font-[700]'>Ən yaxşı onlayn kurslarla <br /> bacarıqlarınızı artırın</h2>

                    <div className='z-[1]'>
                        <Button btnText="İndi başla" classname="my-custom-btn start-now-btn" />
                    </div>
                </div>



            </section>
        </>
    )
}

export default Courses