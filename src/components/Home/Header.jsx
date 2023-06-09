import React, { useEffect, useState, useRef } from 'react'

import Button from '../main/Button';

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Parallax, Navigation, Autoplay } from "swiper";

// images or logos
import headerImg1 from '../../assets/images/header-img-1.jpg'
import headerImg2 from '../../assets/images/header-img-2.jpg'
import headerImg3 from '../../assets/images/header-img-3.jpg'
import hicon1 from '../../assets/images/hicon1.png'
import hicon2 from '../../assets/images/hicon2.png'
import hicon3 from '../../assets/images/hicon3.png'
import hicon4 from '../../assets/images/hicon4.png'
import Aos from 'aos';


const Header = () => {

    const [clicked, setClicked] = useState(false);

    useEffect(() => {

        window.scrollTo({
            top: 1800,
            behavior: 'smooth'
        });

    }, [clicked]);

    Aos.init({
        disable: 'scroll',
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    return (
        <>
            <header className='relative inset-0'>

                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff"
                    }}
                    speed={1000}
                    parallax={{
                        effect: true
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    observeSlideChildren={true}
                    modules={[Parallax, Navigation, Autoplay]}
                    className="mySwiper header-swiper"
                >
                    <SwiperSlide className='slide' style={{ backgroundImage: `url(${headerImg1})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: 'cover', height: "90vh", width: "100vw" }}>
                        <div className='header-content'>
                            <h2 className='slide-title lg:text-[2.6rem] sm:text-[2.2rem] mm:text-[1.5rem] pb-1 font-[700] uppercase mm:px-3 lg:px-0'
                                data-aos="fade"
                                data-aos-easing="linear"
                                data-aos-duration="600">
                                Özünü təhsİl resursları və məlumatları
                            </h2>

                            <h6 className='slide-title z-[44] sm:text-[1.2rem] mm:text-[1rem]  lg:w-full sm:w-[400px] mm:w-[300px] pb-5'
                                data-aos="fade"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                Texnologiya böyük bir təkamül dalğası gətirir
                            </h6>

                            <Button onClick={() => setClicked(!clicked)} btnText="Başlamağa Hazırsız ?" classname="my-custom-btn header-btn" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide' style={{ backgroundImage: `url(${headerImg2})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: 'cover', height: "90vh", width: "100vw" }}>
                        <div className='header-content'>
                            <h2 className='slide-title z-[44] lg:text-[2.6rem] sm:text-[2.2rem] mm:text-[1.5rem] pb-1 font-[700] uppercase'>Ən yaxşı kursları tapın</h2>
                            <h6 className='slide-title z-[44] sm:text-[1.2rem] mm:text-[1rem]  lg:w-full sm:w-[400px] mm:w-[300px] pb-5'>
                                Bu kurslar sizə real keyfiyyət təqdim edəcək
                            </h6>
                            <Button onClick={() => setClicked(!clicked)} btnText="Başlamağa hazırsız ?" classname="my-custom-btn header-btn" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide' style={{ backgroundImage: `url(${headerImg3})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: 'cover', height: "90vh", width: "100vw" }}>
                        <div className='header-content'>
                            <h2 className='slide-title z-[44] lg:text-[2.6rem] sm:text-[2.2rem] mm:text-[1.5rem] pb-1 font-[700] uppercase'>Potensİalınızı Kəşf edİn</h2>
                            <h6 className='slide-title z-[44] sm:text-[1.2rem] mm:text-[1rem]  lg:w-full sm:w-[400px] mm:w-[300px] pb-5'>
                                Ən yaxşı onlayn öyrənmə təcrübəsi
                            </h6>
                            <Button onClick={() => setClicked(!clicked)} btnText="Başlamağa hazırsız ?" classname="my-custom-btn header-btn" />
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className='z-[2] absolute left-10 bottom-11 mm:hidden lg:flex space-x-20 items-center text-white'>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75'
                        data-aos="fade"
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="300"
                        data-aos-duration="400"
                    >
                        <img src={hicon1} alt="" className='mb-2' />
                        <span>Mütəxəssislərdən öyrənin</span>
                    </div>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75 mt-1'
                        data-aos="fade-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="300"
                        data-aos-duration="600">
                        <img src={hicon2} alt="" className='mb-4' />
                        <span>Kitabxana & Mağaza</span>
                    </div>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75'
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="800">
                        <img src={hicon3} alt="" className='mb-2' />
                        <span>Dünya səviyyəsində tanınır</span>
                    </div>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75'
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000">
                        <img src={hicon4} alt="" className='mb-2' />
                        <span>Ən yaxşı sənaye liderləri</span>
                    </div>
                </div>
            </header>
            {/* <button onClick={() => setClicked(!clicked)} className="bg-red-600">Scroll Down</button> */}
        </>
    )
}

export default Header