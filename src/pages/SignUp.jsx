import React from 'react'

import { motion } from 'framer-motion'
import { FaGraduationCap } from "react-icons/fa";
import SignSVG from '../components/main/SignSVG';
import headerLogo from '../assets/images/header-logo.png'

import { useNavigate } from 'react-router-dom'
import SignUpForm from '../components/SignPage/SignUpForm';

const SignUp = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className="account-box-register flex mm:mt-[13rem] sm:mt-[3rem] justify-center" >

                <SignSVG className="sign-wave" />

                <button
                    onClick={() => navigate('/')}
                    className='return-home-btn mm:hidden sm:block sm:fixed z-10 left-5 top-5 p-3 rounded-full bg-gray-100'
                    title='Return Home'
                >
                    <FaGraduationCap className='pointer-events-none text-premiumColor/100 text-[2.3rem]' />
                </button>

                <div className='z-10 mm:hidden sm:block sm:fixed right-5 top-5 w-[50px]'>
                    <img src={headerLogo} alt="" />
                </div>

                <motion.div className="account-box bg-gray-50 px-10 pt-8 mt-10 rounded-md"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .4 }}
                    layout
                >

                    <div className="box-head text-center text-black">
                        <h2 className='font-[700] sm:text-2xl mm:text-[1rem] pb-2 text-premiumColor/100'>Yeni hesab yarat</h2>
                        <span className='mm:text-[.9rem] sm:text-[1rem] text-gray-500'>Hesabınız var ?</span>

                        <button
                            onClick={() => navigate('/signin')}
                            className='login-btn mm:text-[.9rem] sm:text-[1rem] m-0 text-blue-700 bg-transparent ml-2'>
                            Daxil olun
                        </button>
                    </div>

                    <div className="box-form" style={{ height: '570px' }}>
                        <SignUpForm />
                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default SignUp