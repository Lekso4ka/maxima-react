import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {name: "Car", price: 120},
        {name: "Book", price: 241},
    ]
}

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct(state, action) {
            const result = action.payload;
            const has = state.data.filter(el => el.name.toLowerCase() === result.name.toLowerCase())
            if (!has.length) {
                state.data.push(result)
            }
        },
        delProduct(state, action) {
            console.log(action.payload)
            state.data = state.data.filter(el => el.name.toLowerCase() !== action.payload.toLowerCase())
        }
    }
})

export const { addProduct, delProduct } = ProductsSlice.actions

export default ProductsSlice.reducer;