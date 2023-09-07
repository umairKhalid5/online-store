import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    cartVisibility: false,
    totalPrice: 0,
    isChanged: false,
  },
  reducers: {
    // Toggle Cart Visibility
    toggleCartVisibility(state) {
      state.cartVisibility = !state.cartVisibility;
    },

    // Reset Cart
    // resetCart(state) {
    //   state.items = [];
    //   state.totalQuantity = 0;
    //   state.totalPrice = 0;
    //   state.isChanged = false;
    // },

    // Replace Cart
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },

    // Add Item
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(el => el.id === newItem.id);

      if (!existingItem) state.items.push(newItem);
      else existingItem.quantity += newItem.quantity;

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.quantity * newItem.price;
      state.isChanged = true;
    },

    // Remove single Item
    removeItemFromCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(el => el.id === newItem.id);
      state.totalQuantity--;

      if (existingItem.quantity === 1)
        state.items = state.items.filter(el => el.id !== newItem.id);
      else existingItem.quantity -= newItem.quantity;

      state.totalPrice -= newItem.price;
      state.isChanged = true;
    },

    // Remove Product
    removeProduct(state, action) {
      const newItem = action.payload;
      state.totalQuantity -= newItem.quantity;
      state.items = state.items.filter(el => el.id !== newItem.id);

      state.totalPrice -= newItem.quantity * newItem.price;
      state.isChanged = true;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
