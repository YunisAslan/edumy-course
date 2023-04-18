import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotalItems, decreaseItem, increaseItem, removeItem, selectAllProducts } from "../redux/productSlice";
import { BsTrash, BsPlus, BsDash } from "react-icons/bs";
import Button from "../components/main/Button";


const AddBasket = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch()
    const productItems = useSelector(selectAllProducts)

    const { products, totalPrice, totalQuantity } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(calculateTotalItems())
    }, [products])

    return (
        <section className="py-20 px-10">

            <div className="flex items-center">
                <h2 className="font-[500] text-[1.7rem] pb-5 mm:text-center sm:text-left text-myBlack">Səbət</h2>
            </div>

            <div className="grid grid-cols-12 mm:gap-0 lg:gap-10">

                <div className="border-myBlack/30 border mm:col-span-12 lg:col-span-8 rounded-md p-4 relative">
                    <h6 className="text-xl font-[500] pb-4 text-myBlack">Məhsullar: {products.length}</h6>
                    <span className="border-b border-gray-400 w-full absolute left-0"></span>

                    {products.length === 0 && (
                        <span className="text-gray-400 text-xl flex items-center justify-center h-full">
                            Səbətdə məhsul yoxdur
                        </span>
                    )}

                    <div className="flex flex-col gap-8 pt-6 px-1">
                        {productItems.map(item => (
                            <div key={item.id} className="shadow-customShadow bg-[#87CEEB] rounded-md py-2">

                                <div className="mm:flex-col md:flex-row flex">

                                    <div className="flex justify-center">
                                        <img
                                            src={item.shop_img}
                                            alt=""
                                            className="mm:w-52 md:w-auto object-cover" />
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between pl-2 py-6 mm:px-10 md:px-6">

                                        <div className="flex items-center justify-between pt-2">
                                            <h2 className="mm:text-sm md:text-lg text-myBlack font-[500]">{item.shop_title}</h2>
                                            <button onClick={() => dispatch(removeItem(item))} className="bg-white text-myBlack mm:p-2 md:p-3 rounded-sm">
                                                <BsTrash className="mm:text-xl md:text-2xl" />
                                            </button>
                                        </div>

                                        <h5 className="flex items-center mm:text-xl md:text-2xl text-myBlack pb-2">
                                            {item.shop_price}
                                            <span className="mm:text-sm md:text-lg pt-1">&nbsp;&#x24;</span>
                                        </h5>

                                        <div className="flex justify-center bg-white w-[7rem] rounded-sm mm:p-1 md:p-2 text-myBlack">
                                            <button onClick={() => dispatch(increaseItem(item))} className="mm:text-xl md:text-2xl">
                                                <BsPlus />
                                            </button>
                                            <input className="w-[3rem] text-lg text-center px-1 outline-none"
                                                type="text"
                                                readOnly
                                                value={item.quantity}
                                            />
                                            <button onClick={() => dispatch(decreaseItem(item))}
                                                disabled={item.quantity <= 1}
                                                className="mm:text-xl md:text-2xl">
                                                <BsDash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-myBlack/30 border mm:col-span-12 lg:col-span-4 rounded-md p-4 relative mm:mt-5 lg:mt-0">
                    <h6 className="text-xl font-[500] pb-4 text-myBlack">Səbətdəki Məhsullar</h6>
                    <span className="border-b border-gray-400 w-full absolute left-0"></span>

                    <div className="pt-6 space-y-4">
                        <h3 className="text-lg text-myBlack">Toplam məhsul sayı: {totalQuantity}</h3>
                        <h3 className="text-lg text-myBlack pb-2">Toplam Qiymət: {totalPrice}&nbsp;&#x24;</h3>

                        <Button
                            btnText="Sifarişi rəsmiləşdir"
                            classname="bg-blue-600 p-3 rounded-md text-white hover:brightness-110 transition-all duration-500"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default AddBasket;