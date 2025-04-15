import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
    },
    reducers: {
        load(state, action) {
            state.value = action.payload;
        },
    },
});

export const fetchProducts = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:5000/products');
            if (!response.ok) {
                throw new Error('Could not fetch products.');
            }
            const data = await response.json();
            return data;
        };

        try {
            const productsData = await fetchData();
            dispatch(productActions.load(productsData));
        } catch (error) {
            console.error(error);
        }
    };
};

export const productActions = productSlice.actions;
export default productSlice.reducer;
