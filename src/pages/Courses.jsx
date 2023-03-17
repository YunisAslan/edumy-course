import React from 'react'
import CoursesContainer from '../components/CoursesPage/CoursesContainer'
import PagesTop from '../components/main/PagesTop'

const Courses = () => {
    return (
        <>
            <PagesTop main_page="Kurslar" current_page="Kurslar"/>
            <CoursesContainer />
        </>

    )
}

export default Courses