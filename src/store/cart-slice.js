import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    cartVisibility: false,
    totalPrice: 0,
  },
  reducers: {
    toggleCartVisibility(state) {
      state.cartVisibility = !state.cartVisibility;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(el => el.id === newItem.id);

      if (!existingItem) state.items.push(newItem);
      else existingItem.quantity += newItem.quantity;

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.quantity * newItem.price;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
