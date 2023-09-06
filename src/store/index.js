import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import productSlice from './product-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    ui: uiSlice,
  },
});

export default store;
