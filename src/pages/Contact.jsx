import React from 'react'
import ContactContainer from '../components/ContactPage/ContactContainer'
import PagesTop from '../components/main/PagesTop'

const Contact = () => {
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Əlaqə" />
            
            <ContactContainer />
        </>
    )
}

export default Contact