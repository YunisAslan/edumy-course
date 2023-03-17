import React, { useState, useEffect } from 'react'

import InstructorsInfo from '../../JSONs/InstructorsInfo.json'
import InstructorsCard from './InstructorsCard'


import RatingContainer from './RatingContainer';
import PopularInstructors from './PopularInstructors';
import Pagination from './Pagination';
import InputBox from '../main/InputBox';
import SelectedFilter from '../main/SelectedFilter';

const InstructorsContainer = () => {


    ///////////// for PAGINATIONS START ///////////////////

    const [posts, setPosts] = useState(InstructorsInfo)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    //get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //change page from pagination component
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    ///////////// for PAGINATIONS END ///////////////////

    useEffect(() => {
        window.scroll({
            top: 500,
            left: 0,
            behavior:'smooth'
        })
    }, [currentPage])

    return (
        <>
            <section className="instructors-section pt-[3.8rem]">

                <div className="instructors-head">
                    <h2 className='text-[1.7rem] font-[500] pb-1 capitalize text-center'>
                        Məşhur təlimçilər
                    </h2>

                    <PopularInstructors />
                </div>

                <div className='instructors-main px-6 grid grid-cols-12'>

                    <div className='instructors-main-left xl:col-span-9 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12'>

                        <div className="instructors-main-left-head flex justify-between items-center pb-6">
                            <span>85 Instructors</span>

                            <InputBox />
                        </div>

                        <div className='instructors-cards grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                            {
                                currentPosts.map((oneInstructor) => (
                                    <InstructorsCard key={oneInstructor.instructor_id} {...oneInstructor} />
                                ))
                            }
                        </div>

                        <div className='col-span-12'>
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={InstructorsInfo.length}
                                paginate={paginate}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>

                    <div className='instructors-main-right pl-10 xl:col-span-3 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12 h-full overflow-auto'>

                       <SelectedFilter />

                        <RatingContainer rating_head="Reytinq" child_radio_title1="1 ulduz və daha yüksək" child_radio_title2="2 ulduz və daha yüksək" child_radio_title3="3 ulduz və daha yüksək" child_radio_title4="4 ulduz və daha yüksək" child_radio_title5="5 ulduz və daha yüksək" />

                    </div>

                </div>
            </section>
        </>
    )
}

export default InstructorsContainer