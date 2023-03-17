import React from 'react'
import InstructorsCard from '../components/CoursesPage/InstructorsCard'
import InstructorsContainer from '../components/CoursesPage/InstructorsContainer'
import PopularInstructors from '../components/CoursesPage/PopularInstructors'

// components
import PagesTop from '../components/main/PagesTop'

const Instructors = () => {
    return (
        <>
            <PagesTop current_page="Təlimçilər" main_page="Kurslar" />

            <InstructorsContainer />
        </>
    )
}

export default Instructors