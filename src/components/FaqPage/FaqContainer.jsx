import React, { Fragment, useState } from 'react';

import FaqWidget from './FaqWidget';
import FaqData from '../../JSONs/FaqData.json'
import AccordionItem from './AccordionItem';


const FaqContainer = () => {

    return (
        <>
            <div className="faq-container grid grid-cols-12 pt-12 pb-16 px-6 text-premiumColor/100">

                <div className="faq-left-side mm:col-span-12 lg:col-span-4">
                    <FaqWidget />
                </div>

                <div className="faq-right-side mm:col-span-12 lg:col-span-8 mm:px-0 lg:px-6 mm:pt-10 lg:pt-0">

                    {FaqData.map((items) => (
                        <Fragment key={items.id}>
                            <div className='pb-4'>
                                <h2 className='text-[1.5rem] pb-4'>{items.title}</h2>

                                <div>
                                    {items.item.map((item) => (
                                        <AccordionItem key={item.faq_id}
                                            faq_question={item.faq_question}
                                            faq_answer={item.faq_answer}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Fragment>
                    ))}


                </div>

            </div>
        </>
    )
}

export default FaqContainer