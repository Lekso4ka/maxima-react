import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {name: "Огурцы", price: 120},
        {name: "Томаты", price: 190},
        {name: "Капуста", price: 80},
        {name: "Редис", price: 200}
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