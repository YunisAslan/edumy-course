import React from 'react'

import Button from '../main/Button';
import CustomCheckBox from '../main/CustomCheckBox';
import { MdErrorOutline } from "react-icons/md";

import { useFormik } from 'formik';
import * as Yup from 'yup'

const SignInForm = () => {

    //for formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            email: Yup.string().required('Email boş buraxıla bilməz').email("Emaili düzgün daxil edin"),
            password: Yup.string()
                .required("Şifrə boş buraxıla bilməz")
                .min(8, "Şifrə minimum 8 simvol olmalıdır")
                .max(15, "Şifrə maksimum 15 simvol olmalıdır")
                .matches(
                    /^(?=.*[A-Z]).+$/,
                    'Şifrədə ən azı bir böyük hərf olmalıdır'
                ),
        }),

        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <>
            <form className='flex flex-col sm:w-[500px] mm:w-[270px]'
                onSubmit={formik.handleSubmit}>

                <div className='flex flex-col '>
                    <label htmlFor="email" className='pb-1 text-premiumColor/100'>
                        Email <span className='text-red-500 text-xl'> *</span>
                    </label>
                    <input className={`h-[3rem] outline-none transition-all border-[1px] rounded-lg pl-3 border-gray-400 ${formik.errors.email && formik.touched.email ? 'form-control is-invalid-email border-red-500' : 'form-control is-valid-email border-blue-600'}`}
                        type="email"
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ?
                        <span className='text-red-500 flex items-center h-6 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 sm:text-xl mm:text-lg' />{formik.errors.email}</span>
                        :
                        <span className='h-6'></span>
                    }
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className='pb-1 text-premiumColor/100'>
                        Şifrə <span className='text-red-500 text-xl'> *</span>
                    </label>
                    <input className={`h-[3rem] outline-none border-[1px] rounded-lg pl-3 border-gray-400 
                    ${formik.errors.password && formik.touched.password ? 'form-control is-invalid-password border-red-500' : 'form-control is-valid-password border-blue-600'}`}
                        type="password"
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ?
                        <span className='text-red-500 flex items-center h-6 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 sm:text-xl mm:text-lg' />{formik.errors.password}</span>
                        :
                        <span className='h-6'></span>}
                </div>

                <div className='flex justify-between items-center pt-3'>

                    <CustomCheckBox checkMark="Məni xatırla" checkValue="save" />

                    <button
                        className='mm:text-[.9rem] sm:!text-[1rem] text-red-700 relative before:absolute before:h-[1px] before:w-full left-0 before:bottom-0 before:bg-red-700'>
                        Şifrəni unutdum
                    </button>
                </div>

                <Button btnSubmit=" " btnText="Giriş et" classname="my-custom-btn sign-btn" />
            </form>
        </>
    )
}

export default SignInForm