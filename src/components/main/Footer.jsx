import React from 'react'
import { useMatch } from 'react-router-dom';

import headerLogo from '../../assets/images/header-logo.png'
import DownloadButtons from './DownloadButtons';
import ShareLinks from './ShareLinks';

const Footer = () => {

    const matchSignIn = useMatch('/signin');
    const matchSignUp = useMatch('/signup');

    if (matchSignIn || matchSignUp) {
        return null;
    }

    return (
        <>
            <footer className='footer mt-10 pt-20 bg-[rgba(11,20,75,0.767)]'>

                <div className="footer-header px-10 grid mm:grid-cols-1 sm:grid-cols-4 lg:grid-cols-12">

                    <div className="col pb-10 mm:col-span-12 sm:col-span-2 lg:col-span-2">
                        {/* COLUMN 1 */}
                        <h2>Əlaqə</h2>

                        <ul>
                            <li>28 May küçəsi </li>
                            <li>Bakı, Azərbaycan</li>
                            <li>+994 50 975 8292</li>
                            <li>support@edumy.com</li>
                        </ul>
                    </div>

                    <div className="col pb-10 mm:col-span-12 sm:col-span-2 lg:col-span-2">
                        {/* COLUMN 2 */}
                        <h2>Şİrkət</h2>

                        <ul>
                            <li><a href="">Haqqımızda</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Əlaqə</a></li>
                            <li><a href="">Təlimatçı olmaq</a></li>
                        </ul>
                    </div>

                    <div className="col pb-10 mm:col-span-12 sm:col-span-2 lg:col-span-2">
                        {/* COLUMN 3 */}
                        <h2>Proqramlar</h2>

                        <ul>
                            <li><a href="">Nano dərəcə üstü</a></li>
                            <li><a href="">Onlayn təhsil</a></li>
                            <li><a href="">Veteranlar</a></li>
                            <li><a href="">Sürücüsüz maşın</a></li>
                        </ul>
                    </div>

                    <div className="col pb-10 mm:col-span-12 sm:col-span-2 lg:col-span-2">
                        {/* COLUMN 4 */}
                        <h2>Dəstək</h2>

                        <ul>
                            <li><a href="">Dokumentasiya</a></li>
                            <li><a href="">Forumlar</a></li>
                            <li><a href="">Dil paketləri</a></li>
                            <li><a href="">Buraxılış statusu</a></li>
                        </ul>
                    </div>

                    <div className="col mm:col-span-2 lg:col-span-4 mm:pl-0 lg:pl-12">
                        {/* COLUMN 5 */}
                        <h2>Mobİl</h2>

                        <div className='flex flex-col space-y-3'>
                            <DownloadButtons
                                className="store-btn store-btn-footer"
                                storeName="App Store"
                                appleIcon=" "
                            />

                            <DownloadButtons
                                className="store-btn store-btn-footer"
                                storeName="Google Play"
                                playIcon=" "
                            />

                        </div>
                    </div>

                </div>

                <span className='border-top border-t-[1px] mt-[4rem] border-gray-400 w-full absolute left-0'></span>

                <div className="footer-mid pt-20 pb-6 lg:flex lg:flex-row mm:flex-col items-center mm:justify-center lg:justify-between  mm:px-0 lg:px-10">

                    <div className="footer-mid-left lg:flex items-center mm:block">

                        <div className="navbar-logo-footer flex items-center lg:pr-9 mm:pr-0 mm:border-0 lg:border-r-[1px] border-gray-400 lg:mr-10 mm:mr-0 mm:justify-center">
                            <img src={headerLogo} alt="" />
                            <span className='pl-4 text-[1.5rem] text-white'>EDUMY</span>
                        </div>

                        <ul className='flex lg:pl-0 mm:pl-8 mm:justify-center text-[#bdbdbd] mm:text-[.6rem] lg:text-[.8rem]  lg:pt-0 mm:pt-12'>
                            <li><a href="" className='hover:text-white transition-colors duration-500 lg:pr-6 mm:pr-4'>Ana Səhifə</a></li>
                            <li><a href="" className='hover:text-white transition-colors duration-500 lg:pr-6 mm:pr-4'>Məxfilik</a></li>
                            <li><a href="" className='hover:text-white transition-colors duration-500 lg:pr-6 mm:pr-4'>Şərtlər</a></li>
                            <li><a href="" className='hover:text-white transition-colors duration-500 lg:pr-6 mm:pr-4'>Sayt Xəritəsi</a></li>
                            <li><a href="" className='hover:text-white transition-colors duration-500 lg:pr-6 mm:pr-4'>Alış</a></li>
                        </ul>
                    </div>

                    <ShareLinks className="footer-share text-[#bdbdbd] text-[1.2rem] flex space-x-7 mm:justify-center lg:pt-0 mm:pt-12 lg:pl-0 mm:pl-6" />

                </div>

                <div className="footer-bottom text-center py-[1.5rem] text-gray-50 bg-[rgb(3,8,43)]">
                    <span className='mm:text-[.7rem] sm:text-[.8rem]'>
                        Copyright Edumy © 2023. Bütün hüquqlar qorunur.
                    </span>
                </div>

            </footer>
        </>
    )
}

export default Footer