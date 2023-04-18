import React, { useState, useRef, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { RxPerson, RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from 'framer-motion';

import { BsSearch } from "react-icons/bs";
import headerLogoNew from '../../assets/images/header-logo-blue.png'
import { FaOpencart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalItems } from '../../redux/productSlice';

const NavbarContainer = () => {

    const dispatch = useDispatch() //redux
    const navigate = useNavigate()
    const [stickyNav, setStickyNav] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setStickyNav(true)
            } else {
                setStickyNav(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { products, totalQuantity } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(calculateTotalItems())
    }, [products])

    return (
        <>
            <motion.div className={`${stickyNav ? "navbar sticky-nav" : "navbar"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .4 }}
            >
                <div className="navbar-logo flex items-center pr-9">
                    <img src={headerLogoNew} alt="" />
                </div>

                <nav className='flex justify-center items-center gap-8 flex-1 text-[20px] pr-8 font-[500] xl:flex mm:hidden'>

                    <Link to='/' className='nav-link py-4 relative before:absolute before:h-[2px] before:bg-myBlack left-0 before:bottom-3 before:w-0 before:hover:w-full before:transition-all before:duration-[.4s] after:bg-gradient-to-t after:from-premiumColor/80 after:shadow-barShadow after:to-[#e0e2e6] after:rounded-full after:w-4 after:h-4 after:absolute after:-left-4 after:top-3 jump-ball'>
                        Ana Səhifə
                    </Link>

                    <div className='relative' onMouseEnter={() => setDropLink(1)} onMouseLeave={() => setDropLink(null)}>

                        <button className='nav-link py-4 flex relative before:absolute before:h-[2px] before:bg-myBlack left-0  before:bottom-3 before:w-0 before:hover:w-full before:transition-all before:duration-[.4s'>
                            <span className='flex items-center'> Kurslar <RiArrowDropDownLine /> </span>
                        </button>


                        {dropLink === 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute z-10 font-[500] bg-gray-50 text-[#07122B] rounded-lg capitalize p-3  w-44 shadow-dropdownShadow'>
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

                    <div className='relative' onMouseEnter={() => setDropLink(2)} onMouseLeave={() => setDropLink(null)}>

                        <button className='nav-link py-4 flex relative before:absolute before:h-[2px] before:bg-myBlack left-0 before:bottom-3 before:w-0 before:hover:w-full before:transition-all before:duration-[.4s'>
                            <span className='flex items-center'> Tədbirlər <RiArrowDropDownLine /></span>
                        </button>

                        {dropLink === 2 && (
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute z-10 font-[500] bg-gray-50 text-[#07122B] rounded-lg capitalize p-3  w-52 shadow-dropdownShadow'>
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

                    <div className='relative' onMouseEnter={() => setDropLink(3)} onMouseLeave={() => setDropLink(null)}>

                        <button className='nav-link py-4 flex relative before:absolute before:h-[2px] before:bg-myBlack left-0 before:bottom-3 before:w-0 before:hover:w-full before:transition-all before:duration-[.4s]'>
                            <span className='flex items-center'> Səhifələr <RiArrowDropDownLine /> </span>
                        </button>

                        {dropLink === 3 && (
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute z-10 font-[500] bg-gray-50 text-[#07122B] rounded-lg capitalize p-3 w-56 shadow-dropdownShadow'>
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

                    <div className='relative' onMouseEnter={() => setDropLink(4)} onMouseLeave={() => setDropLink(null)}>

                        <button className='nav-link py-4 flex relative before:absolute before:h-[2px] before:bg-myBlack left-0 before:bottom-3 before:w-0 before:hover:w-full before:transition-all before:duration-[.4s]'>
                            <span className='flex items-center'> Bloq <RiArrowDropDownLine /> </span>
                        </button>

                        {dropLink === 4 && (
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='absolute z-10 font-[500] bg-gray-50 text-myBlack  rounded-lg capitalize p-3 w-44 shadow-dropdownShadow'>
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

                    <Link to='/contact' className='nav-link py-4 relative before:absolute before:h-[2px] before:bg-myBlack left-0 before:bottom-3 before:w-0 before:hover:w-full before:transition-all before:duration-[.4s]'>Əlaqə</Link>
                </nav>

                <div className="navbar-right flex items-center">

                    <button className='home-sign-btn bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-3000 flex items-center px-3 py-2 mr-[2rem] rounded-md  mm:hidden xl:flex'
                        onClick={() => navigate('/signin')}>
                        <RxPerson className='pointer-events-none text-[1.4rem]' />
                        <span className='pl-2'>Daxil ol</span>
                    </button>

                    <button className="cart pr-2 relative" onClick={() => navigate('/addbasket')}>
                        <FaOpencart className='text-3xl' />
                        {products.length > 0 && (
                            <span className='text-sm font-[600] w-6 h-6 p-1 absolute left-5 -top-3 bg-blue-300 rounded-full flex items-center justify-center'>
                                {totalQuantity}
                            </span>
                        )}
                    </button>

                    <div className="search">

                        <div className='search-area' ref={searchInputRef}>
                            <button
                                className='search-cross-icon absolute mm:right-4 sm:right-16 text-3xl text-premiumColor'
                                onClick={handleSearch}>
                                <RxCross1 className='pointer-events-none' />
                            </button>
                            <input type="text" className='search-input'
                                placeholder='Nə axtarırsınız ?' />
                        </div>

                        <button className='search-btn text-[1.8rem] pl-5 xl:pr-0 mm:pr-6' onClick={handleSearch}   >
                            <BsSearch className='pointer-events-none' />
                        </button>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default NavbarContainer