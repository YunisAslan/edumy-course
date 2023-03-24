import React, { useRef, useState, useEffect } from 'react'

//ICONS
import { RxPerson, RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaOpencart } from "react-icons/fa";

import { Link, useLocation } from 'react-router-dom';
import { useNavigate, useMatch } from "react-router-dom";
import NavbarContainer from './NavbarContainer';



const Navbar = () => {

    const overlayRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    // const matchSignIn = useMatch('/signin');
    // const match = useRouteMatch(['/signin', '/signup']);

    const [openDropdown, setOpenDropdown] = useState(null);

    //for overlay
    const handleDropdownClick = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    //for navbar
    const handleOverlay = e => {
        if (e.target.classList.contains('bars-overlay')) {
            overlayRef.current.classList.add('!h-full')
        }
        if (e.target.classList.contains('cross-overlay')) {
            overlayRef.current.classList.remove('!h-full')
        }

    }

    // linkler deyisdikde overlayin baglanmasi ucun
    // if i ona gore verdim ki signin ve sign upa gedilmeyende location calissin.Gederken Calissa sign sehifelerini gore bilmerik
    useEffect(() => {
        if (location.pathname !== '/signin' && location.pathname !== '/signup') {
            overlayRef.current.classList.remove('!h-full')
        }
    }, [location])

    //location bize pathame(object) donderir. ve burada sehifeimizin linki olur. ona catmaq ucun --> location.pathname <--
    if (location.pathname === '/signin' || location.pathname === '/signup') {
        return null;
    }

    return (
        <>

            <button className='bars-overlay text-myBlack absolute text-[2.5rem] z-[9]  pt-7 right-7 top-0 mm:block xl:hidden'
                onClick={handleOverlay}>
                <HiBars3BottomRight className='pointer-events-none' />
            </button>

            <div ref={overlayRef} className="overlay font-navbarFont !h-0 !fixed bg-gradient-to-b from-navbarGradientFrom to-[#49607a] top-0 overflow-hidden z-[52] mm:block lg:hidden">

                <div className='flex items-center justify-start space-x-4 pl-10 pt-10'>
                    <button
                        className='justify-center font-poppinsFont flex items-center text-white pr-4 border-r-2 border-gray-300'
                        onClick={() => navigate('/signin')}>
                        <span className='overlay-sign-btn'>
                            <RxPerson className='pointer-events-none text-3xl mr-2' />
                        </span>
                        <span> Daxil ol </span>
                    </button>

                    <button
                        className="flex items-center justify-center text-white">
                        <FaOpencart className='text-3xl' />
                    </button>

                </div>

                <button className='cross-overlay text-gray-100 text-[2rem] absolute right-10 top-10'
                    onClick={handleOverlay}>
                    <RxCross1 className='pointer-events-none' />
                </button>

                <nav className='nav-links font-[300] flex flex-col pl-10 pt-14 text-2xl text-[#fffcf2] justify-center'>

                    <Link to="/" className='flex items-center tracking-wide py-3 max-w-[40%] relative before:absolute before:h-[2px] before:bg-white left-0 before:bottom-1 before:w-0 before:hover:w-full before:transition-all before:duration-700'>
                        Ana Səhifə
                    </Link>

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%] relative before:absolute before:h-[2px] before:bg-white left-0 before:bottom-1 before:w-0 before:hover:w-full before:transition-all before:duration-700'
                        onClick={() => handleDropdownClick(1)}
                    >
                        Kurslar <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 1 && (
                            <div className="dropdown relative flex flex-col text-xl" >
                                <Link to="/courses"
                                    className='inline-block pl-3 text-text-gray-50 hover:translate-x-3 transition-transform duration-700'>
                                    Kurslar
                                </Link>

                                <Link to="/instructors"
                                    className='inline-block pl-3 text-text-gray-50 hover:translate-x-3 transition-transform duration-700'>
                                    Təlimçilər
                                </Link>
                            </div>
                        )
                    }

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%] relative before:absolute before:h-[2px] before:bg-white left-0 before:bottom-1 before:w-0 before:hover:w-full before:transition-all before:duration-700'
                        onClick={() => handleDropdownClick(2)}
                    >
                        Tədbirlər <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 2 && (
                            <div className="dropdown-second relative flex flex-col text-xl">
                                <Link to="/eventslist"
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Tədbirlər siyahısı
                                </Link>

                                <Link to="/event"
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Tədbir
                                </Link>
                            </div>)
                    }

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%] relative before:absolute before:h-[2px] before:bg-white left-0 before:bottom-1 before:w-0 before:hover:w-full before:transition-all before:duration-700'
                        onClick={() => handleDropdownClick(3)}
                    >
                        Səhifələr <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 3 && (
                            <div className="dropdown-third relative text-xl">
                                <Link to="/shop"
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Mağaza
                                </Link>
                                <Link to="/aboutus"
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Haqqımızda
                                </Link>
                                <Link to="/signin"
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Daxil ol
                                </Link>
                                <Link to="/signup"
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Qeydiyyatdan keç
                                </Link>
                                <Link to="/faq"
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Faq
                                </Link>
                            </div>
                        )
                    }

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%] relative before:absolute before:h-[2px] before:bg-white left-0 before:bottom-1 before:w-0 before:hover:w-full before:transition-all before:duration-700'
                        onClick={() => handleDropdownClick(4)}
                    >
                        Blog <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 4 && (
                            <div className="dropdown-fourth relative flex flex-col text-xl">
                                <Link to="/bloglist"
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Bloqlar
                                </Link>

                                <Link to="/blog"
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Bloq
                                </Link>

                            </div>
                        )
                    }

                    <Link to='/contact' className='flex items-center tracking-wide py-3 max-w-[30%] relative before:absolute before:h-[2px] before:bg-white left-0 before:bottom-1 before:w-0 before:hover:w-full before:transition-all before:duration-700'>Əlaqə</Link>
                </nav>

            </div>

            <NavbarContainer />

        </>
    )
}

export default Navbar