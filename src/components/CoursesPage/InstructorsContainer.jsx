import React, { useState, useEffect } from 'react'

import InstructorsInfo from '../../JSONs/InstructorsInfo.json'
import InstructorsCard from './InstructorsCard'

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import RatingContainer from './RatingContainer';
import PopularInstructors from './PopularInstructors';
import Pagination from './Pagination';
import InputBox from '../main/InputBox';
import SelectedFilter from '../main/SelectedFilter';

const InstructorsContainer = () => {

    const [loading, setLoading] = useState(true)

    ///////////// for PAGINATIONS START ///////////////////

    const [posts, setPosts] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    //get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = InstructorsInfo.slice(indexOfFirstPost, indexOfLastPost)


    //change page from pagination component
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    ///////////// for PAGINATIONS END ///////////////////

    useEffect(() => {

        setLoading(true);
        window.scroll({
            top: 1100,
            left:0,
            behaviour: 'smooth'
        })

        setTimeout(() => {
            setPosts(currentPosts);
            setLoading(false);
        }, 2000);
    }, [currentPage]);

    // useEffect(() => {
        
    // },[currentPage])

    return (
        <>
            <section className="instructors-section pt-[3.8rem]">

                <div className="instructors-head">
                    <h2 className='text-[1.7rem] font-[500] pb-1 capitalize text-center text-myBlack'>
                        Məşhur təlimçilər
                    </h2>

                    <PopularInstructors />
                </div>

                <div className='instructors-main px-6 grid grid-cols-12'>

                    <div className='instructors-main-left xl:col-span-9 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12'>

                        <div className="instructors-main-left-head flex justify-between items-center pb-6">
                            <span className='mm:text-sm sm:text-base text-myBlack'>{InstructorsInfo.length} Təlimçi</span>

                            <InputBox inputBoxHolder="Təlimçiləri axtar" />
                        </div>

                        <div className='instructors-cards grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                            {loading ? (
                                <div className='col-span-12 grid place-content-center'>
                                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                        <CircularProgress sx={{ color: 'blue' }} />
                                    </Stack>
                                </div>
                            ) : (
                                posts.map((oneInstructor) => (
                                    <InstructorsCard key={oneInstructor.instructor_id} {...oneInstructor} />
                                ))
                            )

                            }
                        </div>

                        <div className='col-span-12' style={{opacity: loading ? 0 : 1}}>
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={InstructorsInfo.length}
                                paginate={paginate}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>

                    <div className='instructors-main-right mm:pl-0 xl:pl-10 xl:col-span-3 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12 h-full'>

                        <SelectedFilter />

                        <RatingContainer rating_head="Reytinq" child_radio_title1="1 ulduz və daha yüksək" child_radio_title2="2 ulduz və daha yüksək" child_radio_title3="3 ulduz və daha yüksək" child_radio_title4="4 ulduz və daha yüksək" child_radio_title5="5 ulduz və daha yüksək" />

                    </div>

                </div>
            </section>
        </>
    )
}

export default InstructorsContainer