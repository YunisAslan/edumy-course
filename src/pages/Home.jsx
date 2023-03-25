import { useEffect } from 'react'

// HOME COMPONENTS
import Header from '../components/Home/Header'
import Courses from '../components/Home/Courses'
import BrowseTopCourses from '../components/Home/BrowseTopCourses'
import Testimonials from '../components/Home/Testimonials'
import LatestNews from '../components/Home/LatestNews'
import DownloadEnjoy from '../components/Home/DownloadEnjoy'
import OurPartners from '../components/Home/OurPartners'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Courses />
            <BrowseTopCourses />
            <Testimonials />
            <LatestNews />
            <DownloadEnjoy />
            <OurPartners />
        </>
    )
}

export default Home