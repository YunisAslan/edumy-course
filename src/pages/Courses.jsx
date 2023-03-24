import React from 'react'
import CoursesContainer from '../components/CoursesPage/CoursesContainer'
import PagesTop from '../components/main/PagesTop'

const Courses = () => {
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Kurslar"/>
            <CoursesContainer />
        </>

    )
}

export default Courses