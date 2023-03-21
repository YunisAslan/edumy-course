import React, { useState, useRef } from 'react'


import { RiArrowDropDownLine } from "react-icons/ri";

import { Link, useNavigate } from 'react-router-dom'
import { RxPerson, RxCross1 } from "react-icons/rx";
import { motion } from 'framer-motion';

import { FaOpencart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import headerLogo from '../../assets/images/header-logo.png'


const NavbarContainer = () => {

    const navigate = useNavigate()

    const [dropLink, setDropLink] = useState(null);

    const searchInputRef = useRef();

    const handleSearch = e => {
        if (e.target.classList.contains('search-btn')) {
            searchInputRef.current.classList.add('visibl')
        }
        if (e.target.classList.contains('search-cross-icon')) {
            searchInputRef.current.classList.remove('visibl')
        }
    }

    return (
        <>
            <div className='navbar absolute top-0 z-[8] text-gray-50 flex justify-between w-[100%] items-center mm:pl-9  mm:pr-14 lg:px-14 pt-8'>

                <div className="navbar-logo flex items-center pr-9">
                    <img src={headerLogo} alt="" />
                    <span className='pl-4 text-[1.5rem]'>EDUMY</span>
                </div>

                <nav className='flex uppercase items-center gap-8 flex-1 text-[22px] font-navbarFont font-[200] xl:flex mm:hidden'>

                    <Link to='/'>Ana Səhİfə</Link>

                    <div className='relative' onMouseEnter={() => setDropLink(1)} onMouseLeave={() => setDropLink(null)}>

                        <button className='py-4 flex items-center uppercase' >
                            Kurslar <RiArrowDropDownLine />
                        </button>


                        {dropLink === 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute font-[300] bg-gray-50 text-[#07122B] rounded-lg capitalize p-3 w-36'>
                                <div>
                                    <ul>
                                        <li className='hover:translate-x-3 transition-all duration-700'>
                                            <Link to='/courses'>Kurslar</Link>
                                        </li>
                                        <li className='hover:translate-x-3 transition-all duration-700'>
                                            <Link to='/instructors'>Təlimçilər</Link>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}

                    </div>

                    <div className='relative group' onMouseEnter={() => setDropLink(2)} onMouseLeave={() => setDropLink(null)}>

                        <button className='py-4 flex items-center uppercase'>
                            Tədbİrlər <RiArrowDropDownLine />
                        </button>

                        {dropLink === 2 && (
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute font-[300] bg-gray-50 text-[#07122B] rounded-lg capitalize p-3 w-44'>
                                <ul>
                                    <li className='hover:translate-x-3 transition-all duration-700'>
                                        <Link to='/event'>Tədbirlər</Link>
                                    </li>

                                    <li className='hover:translate-x-3 transition-all duration-700'>
                                        <Link to='/eventslist'>Tədbirlər Siyahısı</Link>
                                    </li>
                                </ul>
                            </motion.div>
                        )}

                    </div>

                    <div className='relative group' onMouseEnter={() => setDropLink(3)} onMouseLeave={() => setDropLink(null)}>

                        <button className='py-4 flex items-center uppercase'>
                            Səhİfələr <RiArrowDropDownLine />
                        </button>

                        {dropLink === 3 && (
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute font-[300] bg-gray-50 text-[#07122B] rounded-lg capitalize p-3 w-48'>
                                <ul>
                                    <li className='hover:translate-x-3 transition-transform duration-700'>
                                        <Link to='/shop'>Mağaza</Link>
                                    </li>
                                    <li className='hover:translate-x-3 transition-transform duration-700'>
                                        <Link to='/aboutus'>Haqqımızda</Link>
                                    </li>
                                    <li className='hover:translate-x-3 transition-transform duration-700'>
                                        <Link to='/signin'>Daxil ol</Link>
                                    </li>
                                    <li className='hover:translate-x-3 transition-transform duration-700'>
                                        <Link to='/signup'>Qeydiyyatdan keç</Link>
                                    </li>
                                    <li className='hover:translate-x-3 transition-transform duration-700'>
                                        <Link to='/faq'>Faq</Link>
                                    </li>
                                </ul>
                            </motion.div>
                        )}

                    </div>

                    <div className='relative group' onMouseEnter={() => setDropLink(4)} onMouseLeave={() => setDropLink(null)}>

                        <button className='py-4 flex items-center uppercase'>
                            Bloq <RiArrowDropDownLine />
                        </button>


                        {dropLink === 4 && (
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute font-[300] bg-gray-50 text-myBlack  rounded-lg capitalize p-3 w-36'>
                                <ul>
                                    <li className='hover:translate-x-3 transition-all duration-700'>
                                        <Link to='/bloglist'>Bloqlar</Link>
                                    </li>
                                    <li className='hover:translate-x-3 transition-all duration-700'>
                                        <Link to='/blog'>Bloq</Link>
                                    </li>
                                </ul>
                            </motion.div>
                        )}

                    </div>

                    <Link to='/contact' className='uppercase'>Əlaqə</Link>
                </nav>

                <div className="navbar-right flex items-center">

                    <button className='home-sign-btn bg-blue-600 hover:bg-blue-700 transition-colors duration-500 flex items-center px-3 py-2 mr-[2rem] rounded-md  mm:hidden xl:flex'
                        onClick={() => navigate('/signin')}>
                        <RxPerson className='pointer-events-none text-[1.4rem]' />
                        <small className='text-[.9rem] pl-2'>Daxil ol</small>
                    </button>


                    <div className="cart mm:hidden xl:block">
                        <button className='text-[1.8rem] pl-4 pr-2'>
                            <FaOpencart />
                        </button>
                    </div>

                    <div className="search">

                        <div className='search-area' ref={searchInputRef}>
                            <button
                                className='search-cross-icon absolute mm:right-4 sm:right-16 text-3xl text-premiumColor'
                                onClick={handleSearch}>
                                <RxCross1 className='pointer-events-none' />
                            </button>
                            <input type="text" className='search-input'
                                placeholder='Can you love me again ?' />
                        </div>

                        <button className='search-btn text-[1.8rem] pl-5 xl:pr-0 mm:pr-6' onClick={handleSearch}>
                            <BsSearch className='pointer-events-none' />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavbarContainer