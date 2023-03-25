import React from 'react'
import SignSVG from '../components/main/SignSVG'


const NotFound = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <>
            <SignSVG className="notfound-wave"/>
            <div className='h-[100vh] pb-16 text-white text-center flex-col flex justify-center items-center leading-[4rem]'>

                <h4 className='text-[5rem] font-[600] text-center'>404</h4>
                <h6 className='text-[1.8rem]'>Səhifə tapılmadı</h6>
                
            </div>

        </>
    )
}

export default NotFound