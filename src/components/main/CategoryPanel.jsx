import React from 'react'

const CategoryPanel = () => {
    return (
        <>
            <div className='bg-softBlue mt-6 rounded-lg p-4 text-myBlack'>

                <h2 className='font-[500] text-xl'>Kateqoriya</h2>

                <div className='flex flex-col pt-4 space-y-4'>

                    <div className='flex justify-between'>
                        <span>Qəbullar</span>
                        <span>15</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Xəbərlər</span>
                        <span>3</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tədbirlər</span>
                        <span>6</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Laboratoriya</span>
                        <span>4</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CategoryPanel