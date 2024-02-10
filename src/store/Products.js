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

    }
})


export default ProductsSlice.reducer;