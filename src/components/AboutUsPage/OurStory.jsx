import { useState } from 'react';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import OnlineLearning from '../Home/OnlineLearning';


const OurStory = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <div className="our-story pt-16">

                <div className="story-head">

                    <h2 className="text-[1.7rem] pb-5 font-[500] text-center">Hekayəmiz</h2>

                    <ScrollTrigger onEnter={() => setCounterOn(true)}>
                        <div className="countup-rating pt-5 font-[500] mm:block lg:flex justify-center lg:space-x-16 lg:space-y-0 mm:space-y-10 text-[1.2rem] uppercase">

                            <div className="first-rating">
                                <h6 className='text-premiumColor/100 pb-1 '>
                                    Xarİcİ İzləyİcİlər
                                </h6>
                                {counterOn && <CountUp start={0} end={88000} duration={4} />}
                            </div>

                            <div className="second-rating">
                                <h6 className='text-premiumColor/100 pb-1 '>
                                    Sertİfİkatlı Təlİmçİlər
                                </h6>
                                {counterOn && <CountUp start={0} end={96} duration={4} />}
                            </div>

                            <div className="thirth-rating">
                                <h6 className='text-premiumColor/100 pb-1 '>
                                    Qeydİyyatdan keçmİş şagİrdlər
                                </h6>
                                {counterOn && <CountUp start={0} end={4313} duration={4} />}
                            </div>

                            <div className="fourth-rating">
                                <h6 className='text-premiumColor/100 pb-1 '>
                                    Tamamlanmış Kurslar
                                </h6>
                                {counterOn && <CountUp start={0} end={442} duration={4} />}
                            </div>

                        </div>
                    </ScrollTrigger>

                </div>



                <div className="story-intro pt-[5.5rem] grid grid-cols-12 text-justify mm:text-center sm:text-left">

                    <div className="story-intro-left mm:pr-0 sm:pr-10 lg:col-span-6 mm:col-span-12 pb-5 ">
                        <h2 className='text-[1.5rem] pb-5 text-premiumColor/100'>Biz Kimik</h2>
                        <p>Onlayn Təhsil veb-saytımızda biz dünyanın hər yerindən tələbələrə yüksək keyfiyyətli təhsil verməkdə həvəsliyik. <br /> <br /> Komandamız öyrənməni hər kəs üçün əlçatan və zövqlü etməyə sadiq olan təcrübəli pedaqoqlardan və peşəkarlardan ibarətdir. Biz inanırıq ki, təhsil daha parlaq gələcəyin kilidini açmaq üçün açardır və biz dünyada müsbət təsir göstərməyə sadiqik. Onlayn təhsil veb-saytımızda biz hər yaşdan və mənşədən olan tələbələri gücləndirməyə çalışırıq. <br /> <br /> Beləliklə, bu kəşf səyahətində bizə qoşulun və gəlin birlikdə öyrənək və inkişaf edək.
                        </p>
                    </div>

                    <div className="story-intro-right mm:pr-0 mm:pt-4 sm:pr-10 sm:pt-0 lg:col-span-6 mm:col-span-12 ">
                        <h2 className='text-[1.5rem] pb-5 text-premiumColor/100'>Biz Nə Edirik</h2>
                        <p>Biz təcrübəsindən asılı olmayaraq hər bir tələbənin ehtiyaclarına cavab verən müxtəlif kurslar və proqramlar təqdim etməyə çalışırıq. Onlayn təhsil platformamız akademik fənlərdən tutmuş praktik bacarıqlara qədər geniş kurslar təklif edir.<br /> <br /> Komandamız bilik, bacarıq və karyera imkanlarını artırmaq üçün nəzərdə tutulmuş cəlbedici və interaktiv öyrənmə təcrübələrini təqdim etməyə sadiqdir. <br /><br /> Bu gün bizə qoşulun və proqramlarımızın potensialınızı açmaq və arzularınıza çatmaqda sizə necə kömək edə biləcəyini kəşf edin.</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OurStory