import React, { useState } from 'react'

import { MdErrorOutline, MdDone } from "react-icons/md";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../main/Button';
import { AnimatePresence, motion } from 'framer-motion';

import emailjs from '@emailjs/browser';

const ContactForm = () => {

  // email js .env vars.
  const SERVICE_ID = "service_4zsdym4";
  const TEMPLATE_ID = "template_6xkgfu1"
  const PUBLIC_KEY = "OpWPT5HkETJWQE-d5"

  const [doneMsg, setDoneMsg] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Adınızı yazmalısınız')
        .max(15, "Ad maksimum 15 simvol olmalıdır"),

      email: Yup.string().required('Email boş buraxıla bilməz').email("Emaili düzgün daxil edin"),

      subject: Yup.string().required('Mövzu adı boş buraxıla bilməz'),
      message: Yup.string().required('Mesaj boş buraxıla bilməz').min(10, "10 simvoldan az mesaj göndərilə bilməz")
    }),

    onSubmit: (values, { resetForm }) => {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }, PUBLIC_KEY)
        .then((result) => {
          console.log(result);
          resetForm();
          setDoneMsg(true)
          setTimeout(() => {
            setDoneMsg(false)
          }, 2000);
        }, (error) => {
          console.log(error);
          setDoneMsg(false)
        });
    }
  })


  return (
    <>
      <div className='contact-form-container'>

        <h2 className='pb-1 text-2xl'>Bizə Mesaj Göndərin</h2>
        <p className='pb-2 text-gray-500 mm:text-xs sm:text-base'>Mesajınız bizim üçün vacib əhəmiyyət daşıyır</p>

        <form className='contact-form mm:full mm:flex-col mm:flex mm:justify-center md:w-[700px]' 
        onSubmit={formik.handleSubmit}>

          <div className="flex flex-col">
            <label htmlFor="name" className='pb-1 text-premiumColor/100'>
              Ad <span className='text-red-500 text-xl'>*</span>
            </label>
            <input className={`h-[3rem] outline-none border-[1px] rounded-lg pl-3 border-gray-400  shadow-[0_8px_30px_rgb(0,0,0,0.12)]
               ${formik.errors.name && formik.touched.name
                ? 'form-control is-invalid-name border-red-500'
                : 'form-control is-valid-name border-blue-600'}`}
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

          <div className='flex flex-col '>

            <label htmlFor="email" className='pb-1 text-premiumColor/100'>
              Email <span className='text-red-500 text-xl'> *</span>
            </label>

            <input className={`h-[3rem] outline-none transition-all border-[1px] rounded-lg pl-3 border-gray-400   shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            ${formik.errors.email && formik.touched.email
                ? 'form-control is-invalid-email border-red-500'
                : 'form-control is-valid-email border-blue-600'}`}
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
            <label htmlFor="subject" className='pb-1 text-premiumColor/100'>
              Mövzu <span className='text-red-500 text-xl'>*</span>
            </label>
            <input className={`h-[3rem] outline-none border-[1px] rounded-lg pl-3 border-gray-400  shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                ${formik.errors.subject && formik.touched.subject
                ? 'form-control is-invalid-subject border-red-500'
                : 'form-control is-valid-subject border-blue-600'}`}
              type="text"
              id='subject'
              name='subject'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />

            {formik.errors.subject && formik.touched.subject ?
              <span className='text-red-500 flex items-center h-6 sm:text-base mm:text-sm'>
                <MdErrorOutline className='mr-1 sm:text-xl mm:text-lg' />{formik.errors.subject}</span>
              :
              <span className='h-6'></span>
            }
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className='pb-1 text-premiumColor/100'>
              Mesaj <span className='text-red-500 text-xl'>*</span>
            </label>

            <textarea cols="30" rows="10"
              className={`outline-none border-[1px] rounded-lg pt-3 px-3 border-gray-400  shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                ${formik.errors.message && formik.touched.message
                  ? 'form-control is-invalid-subject border-red-500'
                  : 'form-control is-valid-subject border-blue-600'}`}
              id='message'
              name='message'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            >
            </textarea>

            {formik.errors.message && formik.touched.message ?
              <span className='text-red-500 flex items-center h-6 sm:text-base mm:text-sm'>
                <MdErrorOutline className='mr-1 sm:text-xl mm:text-lg' />{formik.errors.message}</span>
              :
              <span className='h-6'></span>
            }
          </div>

          <div className='flex flex-row-reverse'>
            <Button btnSubmit="" btnText="Göndər" classname="my-custom-btn send-btn mt-1" />
          </div>


          {/* showing success sending message */}
          <AnimatePresence>
            {
              doneMsg &&
              <motion.div className='done-msg fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center bg-green-600 text-white text-xl rounded-sm z-50 p-2'
                initial={{ x: "-50%", y: -30, opacity: 0 }}
                animate={{ x: "-50%", y: 0, opacity: 1 }}
                exit={{ x: "-50%", y: -30, opacity: 0 }}
                transition={{ duration: .5, ease: "easeInOut" }}
                unmountOnExit
              >
                <span className='flex items-center px-2'>
                  <MdDone /> <span className='text-sm pl-2'> Mesaj uğurla göndərildi.</span>
                </span>
              </motion.div>
            }
          </AnimatePresence>

        </form>
      </div>
    </>
  )
}

export default ContactForm