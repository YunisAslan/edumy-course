import React from 'react'

const TagPanel = ({tag1,tag2,tag3}) => {
    return (
        <>
            <div className="tags-panel bg-gray-300 p-4 rounded-lg mt-6">
                <h2 className='font-[500] text-xl pb-4'>Etiketlər</h2>

                <div className='pl-2'>

                    <span className='bg-premiumColor text-center mr-3 text-white rounded-md 
                            text-[.9rem] mb-2 py-1 px-2 inline-block w-[110px]'>
                        <span># {tag1}</span>
                    </span>

                    <span className='bg-premiumColor text-center mr-3 text-white rounded-md 
                            text-[.9rem] mb-2 py-1 px-2 inline-block w-[110px]'>
                        <span># {tag2}</span>
                    </span>

                    <span className='bg-premiumColor text-center mr-3 text-white rounded-md 
                            text-[.9rem] mb-2 py-1 px-2 inline-block w-[110px]'>
                        <span># {tag3}</span>
                    </span>

                </div>
            </div>
        </>
    )
}

export default TagPanel