import React from 'react'
import PagesTop from '../components/main/PagesTop'
import ShopContainer from '../components/ShopPage/ShopContainer'

const Shop = () => {
    return (
        <>
            <PagesTop main_page="Ana Səhifə" current_page="Mağaza"/>

            <ShopContainer />
        </>
    )
}

export default Shop