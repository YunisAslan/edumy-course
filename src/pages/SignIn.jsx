import React from 'react';

import headerLogo from '../assets/images/header-logo.png'
import { FaGraduationCap } from "react-icons/fa";
import { motion } from 'framer-motion'
import SignSVG from '../components/main/SignSVG';
import SignInForm from '../components/SignPage/SignInForm';

import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='login-box mt-[10rem] flex items-center justify-center inset-0'>

                <SignSVG className="sign-wave"/>

                <button
                    onClick={() => navigate('/')}
                    className='return-home-btn fixed z-10 mm:left-3 sm:left-5 top-5 p-3 rounded-full bg-gray-100'
                    title='Return Home'
                >
                    <FaGraduationCap className='pointer-events-none text-premiumColor/100 mm:text-[1.7rem] sm:text-[2.3rem]' />
                </button>

                <div className='z-10 fixed right-5 top-5 mm:w-[35px] sm:w-[50px]'>
                    <img src={headerLogo} alt="" />
                </div>

                <motion.div
                    className='account-box-login flex'
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .4 }}
                    layout
                >
                    <div className="account-box bg-gray-100 px-10 pt-8 rounded-md">

                        <div className="box-head text-center">
                            <h2 className='font-[700] sm:text-2xl mm:text-[1rem] mb-2 text-premiumColor/100'>Hesabınıza daxil olun</h2>
                            <span className='mm:text-[.9rem] sm:text-[1rem] text-gray-500'>
                                Hesabınız yoxdur ?
                            </span>

                            <button
                                onClick={() => navigate('/signup')}
                                className='register-btn text-blue-700 pl-2 mm:text-[.9rem] sm:text-[1rem] hover:brightness-125'>
                                Qeydiyyatdan keçin
                            </button>
                        </div>

                        <div className="box-form mt-6 text-black" style={{ height: '25rem' }}>
                            <SignInForm />
                        </div>
                    </div>

                </motion.div>
            </div>
        </>
    )
}

export default SignIn