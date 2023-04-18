import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    //item: ShopInfo,
    totalQuantity: 0,
    totalPrice: 0
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            const find = state.products.findIndex(element => element.id === action.payload.id)
            if (find >= 0) {
                state.products[find].quantity += 1
            } else {
                const newItem = { ...action.payload, quantity: 1 }
                state.products.push(newItem)
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(filterItem => filterItem.id !== action.payload.id)
        },
        calculateTotalItems: (state) => {
            let { totalPrice, totalQuantity } = state.products.reduce(
                (totalValueAcc, currValue) => {
                    let { shop_price, quantity } = currValue;

                    const totalValue = shop_price * quantity
                    totalValueAcc.totalQuantity += quantity;
                    totalValueAcc.totalPrice += totalValue

                    return totalValueAcc
                },
                {
                    totalQuantity: 0,
                    totalPrice: 0
                }
            )
            state.totalQuantity = totalQuantity
            state.totalPrice = totalPrice.toFixed(2)
        },
        increaseItem: (state, action) => {
            state.products = state.products.map(newItem => {
                if (newItem.id === action.payload.id) {
                    return { ...action.payload, quantity: newItem.quantity + 1 }
                }

                return newItem
            })
        },
        decreaseItem: (state, action) => {
            state.products = state.products.map(newItem => {
                if (newItem.id === action.payload.id) {
                    return { ...action.payload, quantity: newItem.quantity - 1 }
                }

                return newItem
            })
        }
    }
})

export const { addBasket, removeItem, calculateTotalItems, increaseItem, decreaseItem } = productSlice.actions
export const selectAllProducts = state => state.products.products

export default productSlice.reducer