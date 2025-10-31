import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
    count: 0, // ✅ to handle multiple API requests simultaneously
  },
  reducers: {
    showLoader: (state) => {
      state.count++;
      state.isLoading = true;
    },
    hideLoader: (state) => {
      state.count--;
      if (state.count <= 0) {
        state.isLoading = false;
        state.count = 0;
      }
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
