import React, { useState,useEffect } from 'react'
import PagesTop from '../components/main/PagesTop'
import EventsCard from '../components/EventsPage/EventsCard'
import Pagination from '../components/CoursesPage/Pagination'

import EventsInfo from '../JSONs/EventsInfo.json'


const EventList = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [events, setEvents] = useState(EventsInfo)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Tədbirlər Siyahısı" />

            {
                currentPosts.map((oneEvent) => (
                    <EventsCard key={oneEvent.event_id} {...oneEvent} />
                ))
            }

            <Pagination paginate={paginate} totalPosts={EventsInfo.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default EventList