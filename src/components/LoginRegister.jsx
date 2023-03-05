import React, { useRef } from 'react';

import Button from './Button';

import { RxCross1 } from "react-icons/rx";

const LoginRegister = ({setSignBox, signBox}) => {

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

            {signBox && <button className='login-cross-icon fixed z-[999] text-3xl top-[6rem] mm:right-[1.5rem] 
            sm:right-[4rem] lg:right-[10rem]' onClick={() => setSignBox(!signBox)}>
                <RxCross1 className='pointer-events-none' />
            </button>}

            <div className='login-box'>

                <div ref={accountBoxRef} className='account-box-login flex flex-col fixed'>

                    <div className="account-box bg-gray-100 px-10 pt-8 rounded-md">

                        <div className="box-head text-center text-black">
                            <h2 className='font-[700] sm:text-2xl mm:text-[1rem] mb-2'>Hesabınıza daxil olun</h2>
                            <span className='mm:text-[.9rem] sm:text-[1rem] text-gray-500'>Hesabınız yoxdur ?</span>

                            <button
                                onClick={handleChange}
                                className='register-btn text-blue-700 pl-2 mm:text-[.9rem] sm:text-[1rem] hover:brightness-125'>
                                Qeydiyyatdan keçin
                            </button>
                        </div>

                        <div className="box-form mt-6 text-black">
                            <form action="" className='flex flex-col'>
                                <input type="email" placeholder='Email' className='lg:w-[500px] sm:w-[350px] mm:w-[180px] h-[3rem] mb-6 outline-none focus:border-blue-600 transition-all border-[1px] rounded-lg pl-3 border-white' />
                                <input type="password" placeholder='Şifrə' className='lg:w-[500px] sm:w-[350px] mm:w-[180px] h-[3rem] outline-none focus:border-blue-600 border-[1px] rounded-lg px-3 border-white' />

                                <div className='flex justify-between items-center pt-3'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" id='checkboxfirst' className='mr-1' />
                                        <label htmlFor='checkboxfirst' className='mm:text-[.9rem] sm:text-[1rem] text-gray-500'>Məni xatırla</label>
                                    </div>

                                    <button
                                        className='mm:text-[.9rem] sm:!text-[1rem] text-red-700'>
                                        Şifrəni unutdum
                                    </button>
                                </div>

                                <Button btnText="Giriş et" classname="my-custom-btn login-btn" />
                            </form>
                        </div>
                    </div>

                </div>

                <div ref={registerBoxRef} className="account-box-register fixed flex">

                    <div className="account-box bg-gray-100 lg:px-10 mm:px-14 pt-12 rounded-md">

                        <div className="box-head text-center text-black">
                            <h2 className='font-[700] sm:text-2xl mm:text-[1rem] pb-2'>Yeni hesab yarat</h2>
                            <span className='mm:text-[.9rem] sm:text-[1rem] text-gray-500'>Hesabınız var ?</span>

                            <button
                                onClick={handleChange}
                                className='login-btn mm:text-[.9rem] sm:text-[1rem] m-0 text-blue-700 bg-transparent ml-2'>
                                Daxil olun
                            </button>
                        </div>

                        <div className="box-form mt-6 text-black">
                            <form action="" className='flex flex-col'>
                                <input type="text" placeholder='Ad' className='lg:w-[500px] sm:w-[350px] mm:w-[200px] h-[3rem] mb-6 outline-none focus:border-blue-600 border-[1px] rounded-lg pl-3 border-white' />
                                <input type="email" placeholder='Email' className='lg:w-[500px] sm:w-[350px] mm:w-[200px] h-[3rem] mb-6 outline-none focus:border-blue-600 border-[1px] rounded-lg pl-3 border-white' />
                                <input type="password" placeholder='Şifrə' className='lg:w-[500px] sm:w-[350px] mm:w-[200px] h-[3rem] outline-none focus:border-blue-600 border-[1px] rounded-lg px-3 border-white' />
                                <input type="password" placeholder='Şifrəni doğrula' className='lg:w-[500px] sm:w-[350px] mm:w-[200px] h-[3rem] outline-none focus:border-blue-600 border-[1px] rounded-lg px-3 border-white mt-6' />

                                <div className='flex justify-between pt-3'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" id='checkboxsecond' className='mr-1 bg-red-600' />
                                        <label htmlFor='checkboxsecond' className='mm:text-[.rem] sm:text-[1rem] text-gray-500'>Təlimatçı olmaq istəyirsiniz ?</label>
                                    </div>
                                </div>

                                <Button btnText="Qeydiyyatdan keç" classname="my-custom-btn login-btn" />
                            </form>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default LoginRegister