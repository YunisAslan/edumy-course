import React from 'react'
import InstructorsContainer from '../components/CoursesPage/InstructorsContainer'
// components
import PagesTop from '../components/main/PagesTop'

const Instructors = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <PagesTop current_page="Təlimçilər" main_page="Ana Səhifə" />

            <InstructorsContainer />
        </>
    )
}

export default Instructors