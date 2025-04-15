import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        weight: 0,
        price: 0,
    },
    reducers: {
        add(state, action) {
            state.weight += action.payload.weight;
            state.price += action.payload.price;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
