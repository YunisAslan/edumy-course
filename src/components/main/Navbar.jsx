import React, { useRef, useState, useEffect } from 'react'

// LOGO
import headerLogo from '../../assets/images/header-logo.png'

//ICONS
import { RxPerson, RxCross1 } from "react-icons/rx";
import { FaOpencart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiBars2 } from "react-icons/hi2";

import { Link } from 'react-router-dom';
import { useNavigate, useMatch } from "react-router-dom";


const Navbar = () => {


    const navigate = useNavigate();

    const overlayRef = useRef()
    const searchInputRef = useRef();
    const [open, setOpen] = useState(false)
    const [openTwo, setOpenTwo] = useState(false)
    const [openThird, setOpenThird] = useState(false)
    const [openFourth, setOpenFourth] = useState(false)

    const handleOverlay = e => {
        if (e.target.classList.contains('cross-overlay')) {
            overlayRef.current.classList.remove('overlay-active')
        }
        if (e.target.classList.contains('bars-overlay')) {
            overlayRef.current.classList.add('overlay-active')
        }
    }

    const handleSearch = e => {
        if (e.target.classList.contains('search-btn')) {
            searchInputRef.current.classList.add('visibl')
        }
        if (e.target.classList.contains('search-cross-icon')) {
            searchInputRef.current.classList.remove('visibl')
        }
    }

    const handleSign = (e) => {
        if (e.target.classList.contains('overlay-sign-btn')) {
            overlayRef.current.classList.remove('overlay-active')
        }
    }

    //hide navbar Login page

    const match = useMatch('/login');

    if (match) {
        return null; // hide navbar on LoginPage
    }

    return (
        <>
            {/* Overlay navbar */}
            {/* <div ref={overlayRef} className="overlay fixed top-0 bg-gray-800 left-0 w-[100%] h-0  z-[99] overflow-hidden">

                <button className='cross-overlay text-gray-100 text-[2rem] absolute right-10 top-10' onClick={handleOverlay}>
                    <RxCross1 className='pointer-events-none' />
                </button>

                <nav className='nav-links font-navbarFont font-[200] flex flex-col pl-10 pt-28 text-2xl text-white justify-center'>

                    <a href="" className='flex items-center tracking-wide py-3 max-w-[40%] uppercase'>Ana Səhifə</a>

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpen(!open)}
                    >
                        Kurslar <RiArrowDropDownLine />
                    </button>

                    {
                        open && (
                            <div className="dropdown relative flex flex-col" >
                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Kurslar
                                </a>

                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Təlimçilər
                                </a>
                            </div>
                        )
                    }

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpenTwo(!openTwo)}
                    >
                        Tədbirlər <RiArrowDropDownLine />
                    </button>

                    {
                        openTwo && (
                            <div className="dropdown-second relative flex flex-col">
                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Tədbirlər siyahısı
                                </a>

                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Tədbirlər
                                </a>
                            </div>)
                    }

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpenThird(!openThird)}
                    >
                        Səhifələr <RiArrowDropDownLine />
                    </button>

                    {
                        openThird && (
                            <div className="dropdown-third relative">
                                <a href=""
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Mağaza
                                </a>
                                <a href=""
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Giriş et
                                </a>
                            </div>
                        )
                    }

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpenFourth(!openFourth)}
                    >
                        Blog <RiArrowDropDownLine />
                    </button>

                    {
                        openFourth && (
                            <div className="dropdown-fourth relative flex flex-col">
                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Bloglar Siyahısı
                                </a>

                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Blog yarat
                                </a>

                            </div>
                        )
                    }

                    <a href="" className='flex items-center tracking-wide py-3 max-w-[30%] uppercase'>Əlaqə</a>
                </nav>

                <button
                    className='absolute justify-center w-full mt-3 flex items-center text-white'
                    onClick={() => navigate('/login')}>
                    <span className='overlay-sign-btn flex items-center' onClick={handleSign}>
                        <RxPerson className='pointer-events-none text-2xl mr-2' />
                        Daxil ol
                    </span>
                </button>
            </div> */}

            <div className="navbar absolute top-0 z-50 text-gray-50 flex justify-between w-[100%] items-center mm:pl-9  mm:pr-14 lg:px-14 pt-8">

                {/* overlay bars */}
                <button className='bars-overlay text-[2.5rem] absolute pt-8 right-7 top-1 mm:flex lg:hidden' onClick={handleOverlay}>
                    <HiBars2 className='pointer-events-none' />
                </button>

                <div className="navbar-logo flex items-center pr-9">
                    <img src={headerLogo} alt="" />
                    <span className='pl-4 text-[1.5rem]'>EDUMY</span>
                </div>

                <nav className='nav-links uppercase font-navbarFont font-[200] flex-1 text-[1.375rem] space-x-6 flex xl:flex mm:hidden'>

                    <Link to='/' className='flex items-center tracking-wide'>Ana Səhİfə</Link>

                    <div className="dropdown relative" onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>

                        <button className='dropdown-trigger flex items-center py-3 tracking-wide'>
                            Kurslar <RiArrowDropDownLine />
                        </button>

                        <div className={`dropping-menu ${open ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <Link to="/courses"
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Kurslar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/instructors"
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Təlimçilər
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="dropdown-second relative" onMouseEnter={() => setOpenTwo(!openTwo)} onMouseLeave={() => setOpenTwo(!openTwo)}>
                        <button className='dropdown-trigger flex items-center tracking-wide py-3'>Tədbirlər<RiArrowDropDownLine /></button>


                        <div className={`dropping-menu ${openTwo ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <Link to="/eventslist"
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Tədbirlər Siyahısı
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/event'
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Tədbir
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="dropdown-third relative" onMouseEnter={() => setOpenThird(!openThird)} onMouseLeave={() => setOpenThird(!openThird)}>
                        <button className='dropdown-trigger flex items-center py-3 tracking-wide'>Səhifələr <RiArrowDropDownLine /></button>


                        <div className={`dropping-menu ${openThird ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <Link to="/shop"
                                        className='block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Mağaza
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/aboutus"
                                        className='block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Haqqımızda
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq"
                                        className='block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Faq
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login"
                                        className='block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Daxil ol
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="dropdown-fourth relative" onMouseEnter={() => setOpenFourth(!openFourth)} onMouseLeave={() => setOpenFourth(!openFourth)}>
                        <button className='dropdown-trigger flex items-center py-3 tracking-wide'>Blog <RiArrowDropDownLine /></button>

                        <div className={`dropping-menu ${openFourth ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <Link to="/bloglist"
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Bloglar Siyahısı
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog"
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <Link to="/contact" className='flex items-center tracking-wide'>Əlaqə</Link>
                </nav>

                <div className="navbar-right flex items-center">

                    <button className='sign-btn flex items-center px-3 py-2 mr-[2rem] rounded-md  mm:hidden lg:flex'
                        onClick={() => navigate('/login')}>
                        <RxPerson className='pointer-events-none text-[1.4rem]' />
                        <small className='text-[.9rem] pl-2'>Daxil ol</small>
                    </button>


                    <div className="cart mm:hidden lg:block">
                        <button className='text-[1.8rem] pl-4'>
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

                        <button className='search-btn text-[1.8rem] pl-5 lg:pr-0 mm:pr-6' onClick={handleSearch}>
                            <BsSearch className='pointer-events-none' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar