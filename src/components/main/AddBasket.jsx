import { useState } from 'react';

import ShopData from '../../JSONs/ShopInfos.json'
import { FaOpencart } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

const Basket = () => {
    const [basketItems, setBasketItems] = useState([]);
    const [open, setOpen] = useState(false);

    // const removeItem = (itemIndex) => {
    //     const updatedBasketItems = basketItems.filter((_, index) => index !== itemIndex);
    //     setBasketItems(updatedBasketItems);
    // };

    // function handleAddToBasket(product) {
    //     setBasketItems([...basketItems, product]);
    // }

    //   const totalPrice = basketItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="relative">
            <button
                className="flex items-center justify-center p-2 text-myBlack"
                onClick={() => setOpen(!open)}>
                <FaOpencart className='text-3xl' />
                {basketItems.length > 0 && (
                    <span className="bg-myBlack text-white rounded-full text-[10px] w-5 h-5 p-1 absolute bottom-5 left-6">
                        {basketItems.length}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }} exit={{ opacity: 0, y: -20 }} className="absolute right-0 top-16 w-80 bg-white rounded-md z-10 shadow-dropdownShadow">
                        <div className="p-4 border-b">
                            <h3 className="text-lg text-myBlack">Səbət</h3>
                        </div>
                        <ul>
                            {basketItems.map(product => (
                                <li key={product.id}>
                                    {product.shop_title} - ${product.shop_price}
                                </li>
                            ))}
                        </ul>

                        {basketItems.length > 0 && (
                            <div className="flex items-center justify-between px-4 py-2">
                                <span>Cəmi:</span>
                                <span>$</span>
                            </div>
                        )}
                        {basketItems.length === 0 && (
                            <div className="p-4">
                                <p className="text-sm text-gray-500">Səbətiniz boşdur.</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Basket;