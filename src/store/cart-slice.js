import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
