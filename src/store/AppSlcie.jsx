import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "open",
  initialState: {
    open: true,
  },
  reducers: {
    togggleSidebar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { togggleSidebar } = appSlice.actions;
export default appSlice.reducer;
