import React from 'react'
import ContactForm from './ContactForm'
import ContactIcons from './ContactIcons'



const ContactContainer = () => {
    return (
        <>
            <div className="contact-container pb-32 pt-10">
                <ContactIcons />

                <div className="contact-main grid grid-cols-12 pt-32 px-6">

                    <div className="contact-main-left mm:col-span-12 xl:col-span-8">
                        <ContactForm />
                    </div>


                    <div className="contact-main-right mm:col-span-12 xl:col-span-4 xl:pr-10 mm:pr-0">

                        <div className='location-map'
                            style={{
                                width: '100%',
                                height: '400px', 
                                backgroundColor: '#f5f5f5',
                                boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.010261796763!2d49.80645935390625!3d40.375495999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307deaf99fda95%3A0xcd76812c58e4a75a!2zRWxtbMmZciBBa2FkZW1peWFzxLEgbS9zdCBCyZl4dGl5YXIgVmFoYWJ6YWTJmSBrLg!5e0!3m2!1saz!2saz!4v1679150409169!5m2!1saz!2saz"
                                style={{
                                    border: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 'none', // Harita kenarlıklarını kaldırdım
                                }} 
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactContainer