import React, { useState, useEffect } from 'react'

// components
import TopCoursesBox from '../Home/TopCoursesBox'
import RatingContainer from './RatingContainer';
import Pagination from './Pagination';
import AllCourse from '../../JSONs/browseTopCourses.json'

import CustomRadioBox from '../main/CustomRadioBox';
import InputBox from '../main/InputBox';
import SelectedFilter from '../main/SelectedFilter';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    const [isLoading, setIsLoading] = useState(true);

    //change page from pagination component
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = AllCourse.slice(indexOfFirstPost, indexOfLastPost)

    const [sortValue, setSortValue] = useState('');

    const handleChange = (e) => {
        setSortValue(e.target.value);
    };

    useEffect(() => {

        setIsLoading(true);

        setTimeout(() => {
            setPosts(currentPosts);
            setIsLoading(false);
            if (sortValue === "ascending") {
                setAscending();
            } else if (sortValue === "descending") {
                setDescending();
            }
        }, 2000);
    }, [currentPage, sortValue]);

    const setAscending = () => {
        const sortedPosts = currentPosts.sort((a, b) => a.post_price - b.post_price);
        setPosts(sortedPosts);
    };

    const setDescending = () => {
        const sortedPosts = currentPosts.sort((a, b) => b.post_price - a.post_price);
        setPosts(sortedPosts);
    };

    useEffect(() => {
        if (currentPage) {
            window.scroll({
                top: 500,
                left: 0,
                behavior: 'smooth'
            })
        }
    }, [currentPage])

    return (
        <>

            <div className='pt-[6rem] courses-main px-6 grid grid-cols-12'>

                <div className='courses-main-left xl:col-span-9 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12'>

                    <div className="courses-main-left-head flex sm:flex-row mm:flex-col sm:justify-between mm:justify-center items-center pb-6">

                        <div className='flex items-center space-x-10'>
                            <span className='text-myBlack' style={{ opacity: isLoading ? 0 : 1 }}>
                                {AllCourse.length} nəticə
                            </span>

                            <span>Qiymətə görə sırala:</span>
                            {/* MATERIAL DESIGN SELECT  BOX */}
                            <FormControl sx={{ m: 1, width: '100px' }}>
                                <InputLabel id="demo-simple-select-helper-label">Sırala</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={sortValue}
                                    label="Sırala"
                                    onChange={handleChange}
                                >

                                    <MenuItem value="">
                                        <em>Heç biri</em>
                                    </MenuItem>

                                    <MenuItem value="ascending">Artan sıra</MenuItem>

                                    <MenuItem value="descending">Azalan sıra</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        {/* MATERIAL DESIGN SELECT  BOX  END*/}

                        <InputBox inputBoxHolder="Kursları axtar" />
                    </div>

                    <div className='course-cards grid lg:grid-cols-3 md:grid-cols-2 gap-4 relative'>

                        {isLoading ? (
                            <div className='col-span-12 grid place-content-center'>
                                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                    <CircularProgress sx={{ color: 'blue' }} />
                                </Stack>
                            </div>
                        ) : (
                            posts.map((oneCourse, index) => (
                                <TopCoursesBox key={index} {...oneCourse} />
                            )))
                        }
                    </div>

                    <div className='col-span-12' style={{ opacity: isLoading ? 0 : 1 }}>
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={AllCourse.length}
                            paginate={paginate}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>

                <div className='courses-main-right mm:pl-0 xl:px-6 xl:col-span-3 lg:col-span-12 md:col-span-12 sm:col-span-12 mm:col-span-12 mm:overscroll-contain xl:h-[800px] xl:overflow-auto font-[500] text-myBlack'>

                    <SelectedFilter />

                    <div className="authors">
                        <RatingContainer rating_head="Təlimçilər" child_radio_title1="Araz Rəhimov" child_radio_title2="Samir Əliyev" child_radio_title3="Aytəkin Əlizadə" child_radio_title4="Tural Qasım" child_radio_title5="Kamran Quliyev" />
                    </div>

                    <RatingContainer rating_head="Reytinq" child_radio_title1="1 ulduz və daha yüksək" child_radio_title2="2 ulduz və daha yüksək" child_radio_title3="3 ulduz və daha yüksək" child_radio_title4="4 ulduz və daha yüksək" child_radio_title5="5 ulduz və daha yüksək" />

                    <div className='flex flex-col justify-center bg-softBlue shadow-barShadow rounded-md pl-3 pt-3 pb-1'>
                        <CustomRadioBox radio_title="Ödənişli" handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
                        <CustomRadioBox radio_title="Ödənişsiz" handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesContainer