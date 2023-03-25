import React from 'react'
import ContactContainer from '../components/ContactPage/ContactContainer'
import PagesTop from '../components/main/PagesTop'

const Contact = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Əlaqə" />
            
            <ContactContainer />
        </>
    )
}

export default Contact