import React from 'react'
import Partner from '../Home/Partner'


import Marquee from "react-fast-marquee";

/////partner links (similar .env (ortam degiskenleri))/////
const partner1 = "https://res.cloudinary.com/drx9zihrg/image/upload/v1679053229/facebook_l0oc34.png"
const partner2 = "https://res.cloudinary.com/drx9zihrg/image/upload/v1679053263/google_cf7unq.png"
const partner3 = "https://res.cloudinary.com/drx9zihrg/image/upload/v1679053484/instagram_fabkuu.png"
const partner4 = "https://res.cloudinary.com/drx9zihrg/image/upload/v1679053635/twitter_qcmil0.png"
const partner5 = "https://res.cloudinary.com/drx9zihrg/image/upload/v1679053695/uber_xfaduj.png"
// ////


const OurPartners = () => {

    return (
        <>
            <section className='our-partners pb-28'>

                <h2 className='font-[600] text-[1.7rem] text-myBlack pb-8 text-center'
                    data-aos="fade"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="800">Əməkdaşlıqlar</h2>

                <Marquee direction='right' speed={140} pauseOnClick gradientColor={false}>
                    <div className='flex items-center'>
                        <Partner imageUrl={partner1} />
                        <Partner imageUrl={partner2} />
                        <Partner imageUrl={partner3} />
                        <Partner imageUrl={partner4} />
                        <Partner imageUrl={partner5} />
                    </div>
                </Marquee>


            </section>
        </>
    )
}

export default OurPartners