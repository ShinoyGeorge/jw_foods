import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products.js';
import authReducer from './auth.js';
import cartReducer from './cart.js';
import adminReducer from './admin.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        admin: adminReducer,
    },
});

export default store;
