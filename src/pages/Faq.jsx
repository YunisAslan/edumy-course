import React from 'react'
import FaqContainer from '../components/FaqPage/FaqContainer'
import PagesTop from '../components/main/PagesTop'


const Faq = () => {
    return (
        <>
            <PagesTop main_page="Səhifələr"  current_page="Faq"/>

            <FaqContainer />
        </>
    )
}

export default Faq