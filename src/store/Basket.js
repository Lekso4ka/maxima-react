import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action) {
            const has = state.data.filter(el => el.name === action.payload.name);
            if (has.length) {
                state.data = state.data.map(el => {
                    if (el.name === action.payload.name) {
                        el.cnt++
                    }
                    return el;
                })
            } else {
                // state.data.push({...action.payload, cnt: 1});
                state.data = [...state.data, {...action.payload, cnt: 1}];
            }
        },
        delFromBasket(state, action) {
            state.data = state.data.filter(el => el.name !== action.payload);
        }
    }
})

export const {addToBasket, delFromBasket} = BasketSlice.actions;

export default BasketSlice.reducer;