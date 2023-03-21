import React, { useRef, useState, useEffect } from 'react'


//ICONS
import { RxPerson, RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiBars2 } from "react-icons/hi2";

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
    // if i ona gore verdim ki signin ve sign upa gedilmeyende location calissin. Calissa sign sehifelerini gore bilmerik

    useEffect(() => {
        if (location.pathname !== '/signin' && location.pathname !== '/signup') {
            overlayRef.current.classList.remove('!h-full')
        }
    }, [location])

    //location bize pathame(object) donderir. ve burada sehifeimizin linki olur. ona catmaq ucun --> location.pathname <--
    if(location.pathname === '/signin' || location.pathname === '/signup') {
        return null;
    }

    return (
        <>
            <button className='bars-overlay text-black absolute z-[9] text-[2.5rem]  pt-8 right-7 top-1 mm:block xl:hidden'
                onClick={handleOverlay}>
                <HiBars2 className='pointer-events-none' />
            </button>

            <div ref={overlayRef} className="overlay !h-0 !fixed bg-[#0C4C6A] top-0 overflow-hidden z-[52]">

                <button className='cross-overlay text-gray-100 text-[2rem] absolute right-10 top-10'
                    onClick={handleOverlay}>
                    <RxCross1 className='pointer-events-none' />
                </button>

                <nav className='nav-links font-navbarFont font-[200] flex flex-col pl-10 pt-24 text-2xl text-white justify-center'>

                    <Link to="/" className='flex font-[300] text-text-gray-50 items-center tracking-wide py-3 max-w-[40%]'>Ana Səhifə</Link>

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => handleDropdownClick(1)}
                    >
                        Kurslar <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 1 && (
                            <div className="dropdown relative flex flex-col" >
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

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => handleDropdownClick(2)}
                    >
                        Tədbirlər <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 2 && (
                            <div className="dropdown-second relative flex flex-col">
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

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => handleDropdownClick(3)}
                    >
                        Səhifələr <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 3 && (
                            <div className="dropdown-third relative">
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

                    <button className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => handleDropdownClick(4)}
                    >
                        Blog <RiArrowDropDownLine />
                    </button>

                    {
                        openDropdown === 4 && (
                            <div className="dropdown-fourth relative flex flex-col">
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

                    <Link to='/contact' className='flex items-center tracking-wide py-3 max-w-[30%]'>Əlaqə</Link>
                </nav>

                <button
                    className='absolute justify-center w-full mt-3 flex items-center text-white'
                    onClick={() => { navigate('/signin'); }}>
                    <span className='overlay-sign-btn flex items-center'>
                        <RxPerson className='pointer-events-none text-2xl mr-2' />
                        Daxil ol
                    </span>
                </button>
            </div>

            <NavbarContainer />

        </>
    )
}

export default Navbar