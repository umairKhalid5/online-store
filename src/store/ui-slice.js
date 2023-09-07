import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showAlert: false,
    alertMsg: '',
    alertType: '',
  },
  reducers: {
    toggleAlert(state, action) {
      const msg = action.payload.msg;
      const type = action.payload.alertType;
      if (!msg.trim()) state.showAlert = false;
      else {
        state.showAlert = true;
        state.alertMsg = msg;
        state.alertType = type;
      }
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
