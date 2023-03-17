import React from 'react'

const FaqWidget = () => {
    return (
        <>
            <div className='faq-widget px-[2rem] py-[1.5rem] mm:mr-0 lg:mr-10 rounded-lg bg-gray-200'>
                <h2 className='text-[1.4rem]'>Faq</h2>

                <div className="faq-links pt-4">
                    <ul className='space-y-4'>
                        <li><a href="#" className='text-gray-600 block hover:text-orange-600 hover:translate-x-3 transition-all duration-700'>Ödəmələr</a></li>
                        <li><a href="#" className='text-gray-600 block hover:text-orange-600 hover:translate-x-3 transition-all duration-700'>Məsləhətlər</a></li>
                        <li><a href="#" className='text-gray-600 block hover:text-orange-600 hover:translate-x-3 transition-all duration-700'>Şirkət siyasəti</a></li>
                        <li><a href="#" className='text-gray-600 block hover:text-orange-600 hover:translate-x-3 transition-all duration-700'>Şərtlər və Qaydalar</a></li>
                        <li><a href="#" className='text-gray-600 block hover:text-orange-600 hover:translate-x-3 transition-all duration-700'>Ödəniş seçimləri</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default FaqWidget