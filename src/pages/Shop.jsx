import React from 'react'
import PagesTop from '../components/main/PagesTop'
import ShopContainer from '../components/ShopPage/ShopContainer'

const Shop = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Mağaza"/>

            <ShopContainer />
        </>
    )
}

export default Shop