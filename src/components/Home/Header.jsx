import React, {useState, useEffect} from 'react'

import Button from '../main/Button';

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Parallax, Navigation, EffectCreative } from "swiper";

// images or logos
import headerImg1 from '../../assets/images/header-img-1.jpg'
import headerImg2 from '../../assets/images/header-img-2.jpg'
import headerImg3 from '../../assets/images/header-img-3.jpg'
import hicon1 from '../../assets/images/hicon1.png'
import hicon2 from '../../assets/images/hicon2.png'
import hicon3 from '../../assets/images/hicon3.png'
import hicon4 from '../../assets/images/hicon4.png'


const Header = () => {

    // const [clicked, setClicked] = useState(false);

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 900, // change this value to adjust the scrolling distance
    //         behavior: 'smooth', // this makes the scrolling animation smooth
    //     });

    // }, [clicked]);


    return (
        <>
            <header>

                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff"
                    }}
                    speed={2000}
                    // parallax={true}
                    navigation={true}
                    loop={true}
                    modules={[Parallax, Navigation, EffectCreative]}
                    // effect={"creative"}
                    // creativeEffect={{
                    //     prev: {
                    //         shadow: true,
                    //         translate: ["-120%", 0, -500],
                    //     },
                    //     next: {
                    //         shadow: true,
                    //         translate: ["120%", 0, -500],
                    //     },
                    // }}

                    className="mySwiper"
                >

                    <SwiperSlide className='slide' style={{ backgroundImage: `url(${headerImg1})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: 'cover', height: "90vh", width: "100vw" }}>
                        <div className='header-content'>
                            <h2 className='lg:text-[2.6rem] sm:text-[2.2rem] mm:text-[1.5rem] pb-1 font-[700] uppercase mm:px-3 lg:px-0'>Özünü təhsil resursları və məlumatları</h2>
                            <h6 className='z-50 sm:text-[1.2rem] mm:text-[1rem]  lg:w-full sm:w-[400px] mm:w-[300px] pb-5'>
                                Texnologiya böyük bir təkamül dalğası gətirir
                            </h6>
                            <Button btnText="Başlamağa Hazırsız ?" classname="my-custom-btn header-btn" />
                        </div>
                    </SwiperSlide>



                    <SwiperSlide className='slide' style={{ backgroundImage: `url(${headerImg2})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: 'cover', height: "90vh", width: "100vw" }}>
                        <div className='header-content'>
                            <h2 className='z-50 lg:text-[2.6rem] sm:text-[2.2rem] mm:text-[1.5rem] pb-1 font-[700] uppercase'>Ən yaxşı kursları tapın</h2>
                            <h6 className='z-50 sm:text-[1.2rem] mm:text-[1rem]  lg:w-full sm:w-[400px] mm:w-[300px] pb-5'>
                                Bu kurslar sizə real keyfiyyət təqdim edəcək
                            </h6>
                            <Button btnText="Başlamağa hazırsız ?" classname="my-custom-btn header-btn" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide' style={{ backgroundImage: `url(${headerImg3})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: 'cover', height: "90vh", width: "100vw" }}>
                        <div className='header-content'>
                            <h2 className='z-50 lg:text-[2.6rem] sm:text-[2.2rem] mm:text-[1.5rem] pb-1 font-[700] uppercase'>Lorem ipsum</h2>
                            <h6 className='z-50 sm:text-[1.2rem] mm:text-[1rem]  lg:w-full sm:w-[400px] mm:w-[300px] pb-5'>
                                lorem
                            </h6>
                            <Button btnText="Başlamağa hazırsız ?" classname="my-custom-btn header-btn" />
                        </div>
                    </SwiperSlide>

                </Swiper>

                

                <div className='z-[2] absolute left-10 bottom-28 mm:hidden lg:flex space-x-20 items-center text-white'>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75'>
                        <img src={hicon1} alt="" className='mb-2' />
                        <span>Mütəxəssislərdən öyrənin</span>
                    </div>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75 mt-1'>
                        <img src={hicon2} alt="" className='mb-4' />
                        <span>Kitabxana & Mağaza</span>
                    </div>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75'>
                        <img src={hicon3} alt="" className='mb-2' />
                        <span>Dünya səviyyəsində tanınır</span>
                    </div>
                    <div className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer hover:brightness-75'>
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