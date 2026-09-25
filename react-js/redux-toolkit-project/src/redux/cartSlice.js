import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
    },
    reducers: {
        addTocart: (state, reqData) => {
            // console.log(reqData.payload);
            let { cartObj } = reqData.payload;
            console.log(cartObj);
            state.cart = [...state.cart, cartObj]
            localStorage.setItem("CART", JSON.stringify(state.cart))

        },
        deleteCart: (state, reqData) => {
            const id = reqData.payload
            console.log(id);
            state.cart = state.cart.filter((item) => item.id !== id)
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        changeQty: (state, reqData) => {
            
        }
    }   
})
export const { addTocart, deleteCart, changeQty } = cartSlice.actions;

export default cartSlice.reducer;