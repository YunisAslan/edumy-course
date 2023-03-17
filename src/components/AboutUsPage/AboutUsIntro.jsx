import React from 'react'

const AboutUsIntro = () => {
    return (
        <>
            <div className="aboutus-intro grid grid-cols-12 pt-16">

                <div className="aboutus-intro-left lg:col-span-6 mm:col-span-12 pr-10">

                    <div className='intro-left-detail text-justify'>
                        <h2 className='font-[500] text-[1.7rem] pb-5'>Dəyərlərimiz</h2>
                        <p className='pb-6'>Bizim dəyərlərimiz onlayn təhsil platformamızı formalaşdıran rəhbər prinsiplərdir. Biz hamı üçün yüksək keyfiyyətli, əlçatan və münasib qiymətə təhsil təmin etməyə sadiqik. <br /> <br /> Biz tələbələrimizə məqsədlərinə çatmaq üçün güc verən dəstəkləyici və inklüziv öyrənmə mühitinin yaradılmasına inanırıq. Biz yeniliyi qiymətləndiririk və rəqəmsal dövrün dəyişən ehtiyaclarına cavab vermək üçün platformamızı daim təkmilləşdirməyə çalışırıq. <br /> <br /> Dəyərlərimizin əsası mükəmməlliyə, dürüstlüyə və ömür boyu öyrənməyə həsr edilib.
                        </p>
                    </div>
                </div>

                <div className="aboutus-intro-right lg:col-span-6 mm:col-span-12 grid place-content-center justify-items-center">
                    <img
                        src="https://res.cloudinary.com/drx9zihrg/image/upload/v1679030524/8_agthc1.jpg"
                        alt="" />
                </div>
            </div>
        </>
    )
}

export default AboutUsIntro