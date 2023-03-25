import React from 'react'

import Button from '../main/Button'
import CoursesBox from '../CoursesPage/CoursesBox'
import coursesInfo from '../../JSONs/coursesInfo.json'
import OnlineLearning from './OnlineLearning'


const Courses = () => {
    return (
        <>
            <section className='courses-section mt-[5rem] mb-[10rem]'>
                <div className="courses-head text-center pb-10 text-myBlack">
                    <h2 className='text-[1.7rem] font-[600] pb-1 capitalize'
                        data-aos="fade"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="800">Kurs kateqoriyaları</h2>
                    <h6 className='px-5 font-[500]'
                        data-aos="fade"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1200">Güclü təməl üçün bizim kursları seçməlisiniz</h6>
                </div>

                <div className='courses-box grid mm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 place-items-center mx-10'>
                    {
                        coursesInfo.map((oneCourse) => (
                            <div key={oneCourse.course_id}
                                data-aos-once="true"
                                data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-delay={`${oneCourse.course_id * 200}`}
                                data-aos-duration="900">

                                <CoursesBox courseHead={oneCourse.course_head} courseDetail={oneCourse.course_detail} courseImg={oneCourse.course_img} />
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-center font-[500]'>
                    <Button btnText="Bütün Kurslara Baxın" classname="my-custom-btn view-course-btn" />
                </div>


                <OnlineLearning /> {/*HAVE pARALLAX IMAGE */}

            </section>
        </>
    )
}

export default Courses