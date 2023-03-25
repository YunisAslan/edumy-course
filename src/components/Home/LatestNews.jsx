import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation, Autoplay } from "swiper";
import { GoCalendar, GoLocation } from "react-icons/go";

import BlogInfo from '../../JSONs/blogInfo.json'
import BlogCard from '../BlogPage/BlogCard';

const LatestNews = () => {

    return (
        <>
            <section className="latest-news pb-32">

                <div className="news-head text-myBlack text-center px-6 pb-10">
                    <h2 className='text-[1.7rem] font-[600] pb-1 capitalize'
                        data-aos="fade-in"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1200">Ən son xəbərlər</h2>
                    <h6 className='font-[500]'
                        data-aos="fade-in"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1400">Ən son baş vermiş hadisələrdən xəbərdar olun</h6>
                </div>

                <div className="latest-news-containers px-10 grid mm:grid-cols-1 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-12 gap-4">

                    <div className='mm:col-span-1 md:col-span-4 lg:col-span-3 xl:col-span-6'>
                        <Swiper
                            spaceBetween={30}
                            effect={"fade"}
                            navigation={true}
                            speed={600}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectFade, Navigation, Autoplay]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="parent-for-scale">
                                    <div className="child-for-scale left-news-first">
                                        <span className="flex text-center bg-white text-black px-5 py-3 rounded-md font-[500] text-[1.1rem] absolute right-6 top-6">
                                            2 <br /> Aprel
                                        </span>

                                        <div className="time-location-events absolute bottom-6 left-7 text-white justify-center">
                                            <div className='flex items-center mm:space-x-1 sm:space-x-2 text-gray-200'>
                                                <span><GoCalendar className='text-[1.1rem]' /></span>
                                                <h3 className='sm:pr-7 mm:pr-0 mm:text-[.7rem] sm:text-[.9rem] mm:w-[70px] sm:w-[120px]'>14:00 - 16:00</h3>
                                                <span><GoLocation className='text-[1.1rem]' /></span>
                                                <h3 className='mm:text-[.7rem] w-[140px] sm:text-[.9rem]'>Azərbaycan, Bakı</h3>
                                            </div>

                                            <p className='pt-1 '>Onlayn təhsilin sərhədsiz potensialının araşdırılması: Birgə öyrənmə və innovativ ideyaları təşviq edən konfrans</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="parent-for-scale">
                                    <div className="child-for-scale left-news-second">
                                        <span className="flex text-center bg-white text-black px-5 py-3 rounded-md font-[500] text-[1.1rem] absolute right-6 top-6">
                                            13 <br /> Aprel
                                        </span>

                                        <div className="time-location-events absolute bottom-6 left-7 text-white justify-center">
                                            <div className='flex items-center mm:space-x-1 sm:space-x-2 text-gray-200'>
                                                <span><GoCalendar className='text-[1.1rem]' /></span>
                                                <h3 className='mm:pr-0 sm:pr-7 mm:text-[.7rem] sm:text-[.9rem] mm:w-[70px]sm:w-[120px]'>19:00 - 20:00</h3>
                                                <span><GoLocation className='text-[1.1rem]' /></span>
                                                <h3 className='mm:text-[.7rem]  sm:text-[.9rem]'>Azərbaycan, Bakı</h3>
                                            </div>

                                            <p className='pt-1 pr-5 mm:leading-normal xl:leading-[40px]'>Birgə öyrənmə ilə məşğul olmaq: həmyaşıdlar arasında müzakirə
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="parent-for-scale">
                                    <div className="child-for-scale left-news-thirty">
                                        <span className="flex text-center bg-white text-black px-5 py-3 rounded-md font-[500] text-[1.1rem] absolute right-6 top-6">
                                            24 <br /> Aprel
                                        </span>

                                        <div className="time-location-events absolute bottom-6 left-7 text-white justify-center">
                                            <div className='flex items-center mm:space-x-1 sm:space-x-2 text-gray-200'>
                                                <span><GoCalendar className='text-[1.1rem]' /></span>
                                                <h3 className='mm:pr-0 sm:pr-7 mm:text-[.7rem] sm:text-[.9rem] sm:w-[120px]mm:w-[70px]'>10:30 - 12:00</h3>
                                                <span><GoLocation className='text-[1.1rem]' /></span>
                                                <h3 className=' text-[.9rem]'>Azərbaycan, Bakı</h3>
                                            </div>

                                            <p className='pt-1 pr-2 mm:leading-normal xl:leading-[40px]'>Təhsilin gələcəyi: Gənc şagirdin rəqəmsal dünyaya səyahəti</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>

                    {/*//////////////// mid and right blogs/////////////// */}
                    {BlogInfo.map((oneBlog) => (
                        oneBlog.home_available &&
                        <div key={oneBlog.blog_id} className='xl:col-span-3 lg:col-span-2 sm:col-span-1 md:col-span-4 mm:col-span-1'>
                            <BlogCard {...oneBlog} />
                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}

export default LatestNews