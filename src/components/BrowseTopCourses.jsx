import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import topCoursesData from '../browseTopCourses.json'
import TopCoursesBox from './TopCoursesBox'

const BrowseTopCourses = () => {

    const [posts, setPosts] = useState(topCoursesData);
    const [filtered, setFiltered] = useState(topCoursesData);
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        // if (activeCategory === '') {
        //     setFiltered(posts)
        // }

        const filtered = posts.filter((card) => card.category.includes(activeCategory))

        setFiltered(filtered)
    }, [activeCategory])

    return (
        <>
            <section className='browse-courses mb-32'>

                <div className="browse-courses-head text-center">
                    <h2 className='text-[1.6rem] font-[700] pb-1'>Ən yaxşı kurslarımızı nəzərdən keçirin</h2>
                    <h6>Kurslarımız qabaqcıl texnologiya və ekspert təlimatçıların birləşməsi ilə həyatınızı dəyişəcək.</h6>
                </div>

                <div className="filter-container mm:space-x-3 sm:space-x-9 flex justify-center my-10 mm:text-[.9rem] sm:text-[1rem]">

                    <button className={activeCategory === '' ? "btn active" : ""} onClick={() => setActiveCategory('')}>
                        Hamısı
                    </button>
                    <button className={activeCategory === 'Developer' ? "btn active" : ""} onClick={() => setActiveCategory('Developer')}>
                        Developer
                    </button>
                    <button className={activeCategory === 'Web' ? "btn active" : ""} onClick={() => setActiveCategory('Web')}>
                        Web
                    </button>
                    <button className={activeCategory === 'Dizayn' ? "btn active" : ""} onClick={() => setActiveCategory('Dizayn')}>
                        Dizayn
                    </button>
                    <button className={activeCategory === 'Musiqi' ? "btn active" : ""} onClick={() => setActiveCategory('Musiqi')}>
                        Musiqi
                    </button>
                </div>

                <motion.div
                    layout
                    className="course-cards place-items-center grid mm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-10">
                    <AnimatePresence>
                        {
                            filtered.map((post) => (
                                <div key={post.post_id}>
                                    <TopCoursesBox {...post} />
                                </div>
                            ))
                        }
                    </AnimatePresence>
                </motion.div>

            </section>
        </>
    )
}

export default BrowseTopCourses