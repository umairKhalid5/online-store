import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import productSlice from './product-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
