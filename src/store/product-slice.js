import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'chosenProduct',
  initialState: {
    selectedItem: {},
  },
  reducers: {
    selectItem(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

export const productSliceActions = productSlice.actions;

export default productSlice.reducer;
