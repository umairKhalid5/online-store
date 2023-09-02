import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
