import React, { useState } from 'react'

import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const [activePage, setActivePage] = useState(1);

    const handleNextClick = (e) => {
        if (e.target.classList.contains('prev-btn') && currentPage >= 1) {
            setCurrentPage(currentPage - 1)
            setActivePage(activePage - 1)
        }
        if (e.target.classList.contains('next-btn') && currentPage <= 1) {
            setCurrentPage(currentPage + 1)
            setActivePage(activePage + 1)
        }
    }

    return (
        <>

            <nav className='py-5'>

                <ul className="pagination flex justify-center items-center space-x-2">
                    <button onClick={handleNextClick} className='prev-btn' disabled={currentPage === 1}>
                        <BsChevronDoubleLeft className='text-premiumColor pointer-events-none' />
                    </button>

                    {pageNumbers.map((number) => (
                        <li key={number} className='page-item'>
                            <button onClick={() => {
                                paginate(number);
                                setActivePage(number)
                            }}
                                className={activePage === number ? "active" : ""}>
                                {number}
                            </button>
                        </li>
                    ))}

                    <button className='next-btn'
                        onClick={handleNextClick}
                        disabled={totalPosts / postsPerPage === currentPage}>
                        <BsChevronDoubleRight className=' text-premiumColor pointer-events-none' />
                    </button>
                </ul>

            </nav>


        </>
    )
}

export default Pagination