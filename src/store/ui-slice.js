import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showAlert: false,
    alertMsg: '',
  },
  reducers: {
    toggleAlert(state, action) {
      // console.log(action.payload);
      state.showAlert = !state.showAlert;
      if (action.payload) state.alertMsg = action.payload;
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
