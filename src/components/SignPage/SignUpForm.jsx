import React from 'react'

import Button from '../main/Button';
import CustomCheckBox from '../main/CustomCheckBox';
import { MdErrorOutline } from "react-icons/md";

import { useFormik } from 'formik';
import * as Yup from 'yup'


const SignUpForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Ad boş buraxıla bilməz')
                .min(5, "Ad minimum 5 simvol olmalıdır")
                .max(15, "Ad maksimum 15 simvol olmalıdır")
                .matches(
                    /^(?=.*[A-Z]).+$/,
                    'Ad böyük hərflə başlamalıdır'
                ),
            email: Yup.string().required('Email boş buraxıla bilməz').email("Emaili düzgün daxil edin"),
            password: Yup.string().required('Şifrə boş buraxıla bilməz')
                .max(15, "Şifrə maksimum 15 simvol olmalıdır")
                .min(8, "Şifrə minimum 8 simvol olmalıdır")
                .matches(
                    /^(?=.*[A-Z]).+$/,
                    'Şifrədə ən azı bir böyük hərf olmalıdır'
                ),

            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "Şifrələr uyğun deyil")
                .required('Şifrə boş buraxıla bilməz')
        }),

        onSubmit: (values) => {
            console.log(values);
        }


    })

    return (
        <>
            <form className='flex flex-col sm:w-[500px] mm:w-[270px]'
                onSubmit={formik.handleSubmit} >

                <div className="flex flex-col">
                    <label htmlFor="name" className='pb-1 text-premiumColor/100'>
                        Ad <span className='text-red-500 text-xl'>*</span>
                    </label>
                    <input className={`h-[3rem] outline-none border-[1px] rounded-lg pl-3 border-gray-400
                                ${formik.errors.name && formik.touched.name ?
                            'form-control is-invalid-name border-red-500' : 'form-control is-valid-name border-blue-600'}`}
                        type="text"
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />

                    {formik.errors.name && formik.touched.name ?
                        <span className='text-red-500 flex items-center h-6 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 sm:text-xl mm:text-lg' />{formik.errors.name}</span>
                        :
                        <span className='h-6'></span>
                    }
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className='pb-1 text-premiumColor/100'>
                        Email <span className='text-red-500 text-xl'>*</span>
                    </label>
                    <input className={`h-[3rem] outline-none border-gray-400  border-[1px] rounded-lg pl-3 
                                ${formik.errors.email && formik.touched.email ? 'form-control is-invalid-email border-red-500' : 'form-control is-valid-email border-blue-600'}`}
                        type="email"
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />

                    {formik.errors.email && formik.touched.email ?
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
                    <input className={`h-[3rem] outline-none border-gray-400 border-[1px] rounded-lg px-3 
                                ${formik.errors.password && formik.touched.password ? 'form-control is-invalid-password border-red-500' : 'form-control is-valid-password border-blue-600'}`}
                        type="password"
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />

                    {formik.errors.password && formik.touched.password ?
                        <span className='text-red-500 flex items-center h-6 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 sm:text-xl mm:text-lg' />{formik.errors.password}</span>
                        :
                        <span className='h-6'></span>
                    }
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password2" className='pb-1 text-premiumColor/100'>
                        Şifrəni doğrula <span className='text-red-500 text-xl'> *</span>
                    </label>
                    <input
                        className={`h-[3rem] outline-none border-gray-400 border-[1px] rounded-lg px-3 
                                     ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'form-control is-invalid-password2 border-red-500' : 'form-control is-valid-password2 border-blue-600'}`}
                        type="password"
                        id='password2'
                        name='confirmPassword'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword} />

                    {formik.errors.confirmPassword && formik.touched.confirmPassword ?
                        <span className='text-red-500 flex items-center h-6 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 text-xl sm:text-xl mm:text-lg' />
                            {formik.errors.confirmPassword}</span>
                        :
                        <span className='h-6'></span>
                    }
                </div>



                <div className='flex justify-between pt-4 mm:text-[.9rem] sm:text-[1rem]'>
                    <CustomCheckBox checkMark="Təlimçi olmaq istəyirsiniz ?" checkValue="instructor" />
                </div>

                <Button btnSubmit=" " btnText="Qeydiyyatdan keç" classname="my-custom-btn sign-btn" />

            </form>
        </>
    )
}

export default SignUpForm