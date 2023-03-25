import React from 'react'
import EventContainer from '../components/EventsPage/EventContainer'
import EventsCard from '../components/EventsPage/EventsCard'
import PagesTop from '../components/main/PagesTop'

const Event = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Tədbirlər"/>

            <EventContainer />
        </>
    )
}

export default Event