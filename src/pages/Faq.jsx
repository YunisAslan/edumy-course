import React from 'react'
import FaqContainer from '../components/FaqPage/FaqContainer'
import PagesTop from '../components/main/PagesTop'


const Faq = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <PagesTop main_page="Ana Səhifə"  current_page="Faq"/>

            <FaqContainer />
        </>
    )
}

export default Faq