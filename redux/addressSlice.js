import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    userAddress: {}
  },
  reducers: {
    saveAddress: (state, action) => {
      state.userAddress = action.payload;
    },
    clearAddress: (state) => {
      state.userAddress = {};
    }
  }
});

export const { saveAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
