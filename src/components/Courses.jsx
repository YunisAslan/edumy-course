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
                    <h6>Güclü təməl üçün bizim kursları seçməlisiniz</h6>
                </div>

                <div className='courses-box grid grid-cols-4 gap-6 place-items-center mx-10'>
                    {
                        coursesInfo.map((oneCourse) => (
                            <div key={oneCourse.course_id}>
                                <CoursesBox courseHead={oneCourse.course_head} courseDetail={oneCourse.course_detail} courseImg={oneCourse.course_img} />
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-center'>
                    <Button btnText="Bütün Kurslara Baxın" classname="my-custom-btn view-course-btn" />
                </div>


                <div className="online-learning">
                    <h6>LOREM</h6>
                    <h2>LOREM</h2>
                </div>



            </section>
        </>
    )
}

export default Courses