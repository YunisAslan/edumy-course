import React from 'react'
import EventContainer from '../components/EventsPage/EventContainer'
import EventsCard from '../components/EventsPage/EventsCard'
import PagesTop from '../components/main/PagesTop'

const Event = () => {
    return (
        <>
            <PagesTop main_page="Tədbirlər" current_page="Tədbir"/>

            <EventContainer />
        </>
    )
}

export default Event