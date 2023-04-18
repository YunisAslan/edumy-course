import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/productSlice";

export const store = configureStore({
    reducer: {
        products: ProductReducer
    }
})
