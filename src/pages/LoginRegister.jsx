import React, { useRef } from 'react';

import Button from '../components/main/Button';
import { motion } from 'framer-motion'
import CustomCheckBox from '../components/main/CustomCheckBox';
import { FaGraduationCap } from "react-icons/fa";

import SignSVG from '../components/main/SignSVG';
import { useNavigate } from 'react-router-dom';
import headerLogo from '../assets/images/header-logo.png'

const LoginRegister = () => {

    const navigate = useNavigate()
    const accountBoxRef = useRef();
    const registerBoxRef = useRef();

    const handleChange = (e) => {
        if (e.target.classList.contains('register-btn')) {
            accountBoxRef.current.classList.add('hidden')
            registerBoxRef.current.classList.add('account-box-register-visible')
        }

        if (e.target.classList.contains('login-btn')) {
            accountBoxRef.current.classList.remove('hidden')
            registerBoxRef.current.classList.remove('account-box-register-visible')
        }
    }

    return (
        <>
            <button
                onClick={() => navigate('/')}
                className='return-home-btn fixed z-10 mm:top-3 mm:left-3 sm:left-5 sm:top-5 p-3 rounded-full bg-gray-100'
                title='Return Home'>
                <FaGraduationCap className='pointer-events-none text-premiumColor/100 sm:text-[2.3rem] 
                mm:text-[1.1rem]' />
            </button>

            <SignSVG />

            <div className='z-10 fixed sm:right-8 sm:top-8 mm:top-3 mm:right-5 sm:w-[50px] mm:w-[35px]'>
                <img src={headerLogo} alt="" />
            </div>

            <div className='login-box fixed font-poppinsFont'>

                <motion.div
                    className='account-box-login flex flex-col mt-20'
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .3 }}
                    layout
                    ref={accountBoxRef}
                >
                    <div className="account-box bg-gray-100 px-10 pt-8 rounded-md">

                        <div className="box-head text-center">
                            <h2 className='font-[700] sm:text-2xl mm:text-[1rem] mb-2 text-premiumColor/100'>Hesabınıza daxil olun</h2>
                            <span className='mm:text-[.9rem] sm:text-[1rem] text-gray-500'>
                                Hesabınız yoxdur ?
                            </span>

                            <button
                                onClick={handleChange}
                                className='register-btn text-blue-700 pl-2 mm:text-[.9rem] sm:text-[1rem] hover:brightness-125'>
                                Qeydiyyatdan keçin
                            </button>
                        </div>

                        <div className="box-form mt-6 text-black">
                            <form action="" className='flex flex-col lg:w-[500px] md:w-[400px]'>

                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='h-[3rem] mb-6 outline-none focus:border-blue-600 transition-all border-[1px] rounded-lg pl-3 border-gray-400' />

                                <input
                                    type="password"
                                    placeholder='Şifrə'
                                    className=' h-[3rem] outline-none focus:border-blue-600 border-[1px] rounded-lg px-3 border-gray-400' />

                                <div className='flex justify-between items-center pt-3'>

                                    <CustomCheckBox checkMark="Məni xatırla" checkValue="save" />

                                    <button
                                        className='mm:text-[.9rem] sm:!text-[1rem] text-red-700 relative before:absolute before:h-[1px] before:w-full left-0 before:bottom-0 before:bg-red-700'>
                                        Şifrəni unutdum
                                    </button>
                                </div>

                                <Button btnText="Giriş et" classname="my-custom-btn login-btn" />
                            </form>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    className="account-box-register fixed flex mt-[2rem]"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .6 }}
                    layout
                    ref={registerBoxRef}
                >

                    <div className="account-box bg-gray-50 lg:px-10 mm:px-14 pt-8 rounded-md">

                        <div className="box-head text-center text-black">
                            <h2 className='font-[700] sm:text-2xl mm:text-[1rem] pb-2 text-premiumColor/100'>Yeni hesab yarat</h2>
                            <span className='mm:text-[.9rem] sm:text-[1rem] text-gray-500'>Hesabınız var ?</span>

                            <button
                                onClick={handleChange}
                                className='login-btn mm:text-[.9rem] sm:text-[1rem] m-0 text-blue-700 bg-transparent ml-2'>
                                Daxil olun
                            </button>
                        </div>

                        <div className="box-form mt-6 text-black">

                            <form action="" className='flex flex-col lg:w-[500px] md:w-[400px]'>

                                <input type="text" placeholder='Ad' className='h-[3rem] mb-6 outline-none focus:border-blue-600 border-[1px] rounded-lg pl-3 border-gray-400' />

                                <input type="email" placeholder='Email' className='h-[3rem] mb-6 outline-none focus:border-blue-600 border-[1px] rounded-lg pl-3 border-gray-400' />

                                <input type="password" placeholder='Şifrə' className='h-[3rem] outline-none focus:border-blue-600 border-[1px] rounded-lg px-3 border-gray-400' />

                                <input type="password" placeholder='Şifrəni doğrula' className='h-[3rem] outline-none focus:border-blue-600 border-[1px] rounded-lg px-3 border-gray-400 mt-6' />

                                <div className='flex justify-between pt-4 mm:text-[.9rem] sm:text-[1rem]'>
                                    <CustomCheckBox checkMark="Təlimçi olmaq istəyirsiniz ?" checkValue="instructor"/>
                                </div>

                                <Button btnText="Qeydiyyatdan keç" classname="my-custom-btn login-btn" />
                            </form>
                        </div>
                    </div>

                </motion.div>

            </div>
        </>
    )
}

export default LoginRegister