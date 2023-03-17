import React, { useRef, useState, useEffect } from 'react'

// components
import TopCoursesBox from '../Home/TopCoursesBox'
import RatingContainer from './RatingContainer';
import Pagination from './Pagination';
import AllCourse from '../../JSONs/browseTopCourses.json'
//animation
import CustomRadioBox from '../main/CustomRadioBox';
import { Spin } from 'antd';
import InputBox from '../main/InputBox';
import SelectedFilter from '../main/SelectedFilter';

const CoursesContainer = () => {

    // for RADIO BOX START ////
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    // for RADIO BOX END ////


    ///////////// for PAGINATIONS ///////////////////
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    //change page from pagination component
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = AllCourse.slice(indexOfFirstPost, indexOfLastPost)
        setIsLoading(true);

        setTimeout(() => {
            setPosts(currentPosts);
            setIsLoading(false);
        }, 1000);
    }, [currentPage]);

    useEffect(() => {
        window.scroll({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }, [currentPage])

    return (
        <>

            <div className='pt-[6rem] courses-main px-6 grid grid-cols-12'>

                <div className='courses-main-left xl:col-span-9 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12'>

                    <div className="courses-main-left-head flex justify-between items-center pb-6">

                        <span>45 nəticə</span>

                        <InputBox />
                    </div>

                    <div className='course-cards grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>

                        {isLoading ? (
                            <div className='example col-span-12 place-content-center justify-items-center h-full text-center'>
                                <Spin />
                            </div>
                        ) : (
                            posts.map((oneCourse) => (
                                <TopCoursesBox {...oneCourse} />
                            )))
                        }
                    </div>

                    <div className='col-span-12'>
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={AllCourse.length}
                            paginate={paginate}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>

                <div className='courses-main-right pl-10 xl:col-span-3 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12 h-[700px] overflow-auto'>

                    <SelectedFilter />

                    <div className="authors">
                        <RatingContainer rating_head="Təlimçilər" child_radio_title1="Araz Rəhimov" child_radio_title2="Samir Əliyev" child_radio_title3="Aytəkin Əlizadə" child_radio_title4="Tural Qasım" child_radio_title5="Kamran Quliyev" />
                    </div>

                    <RatingContainer rating_head="Reytinq" child_radio_title1="1 ulduz və daha yüksək" child_radio_title2="2 ulduz və daha yüksək" child_radio_title3="3 ulduz və daha yüksək" child_radio_title4="4 ulduz və daha yüksək" child_radio_title5="5 ulduz və daha yüksək" />

                    <CustomRadioBox radio_title="Ödənişli" handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
                    <CustomRadioBox radio_title="Ödənişsiz" handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
                </div>
            </div>
        </>
    )
}

export default CoursesContainer