import React from 'react'
import InstructorsContainer from '../components/CoursesPage/InstructorsContainer'
// components
import PagesTop from '../components/main/PagesTop'

const Instructors = () => {
    return (
        <>
            <PagesTop current_page="Təlimçilər" main_page="Ana Səhifə" />

            <InstructorsContainer />
        </>
    )
}

export default Instructors