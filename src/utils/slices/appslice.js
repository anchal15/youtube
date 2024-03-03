import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideNavOpen: true,
  },
  reducers: {
    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    closeSideNav: (state) => {
      state.isSideNavOpen = false;
    },
  },
});

export const { toggleSideNav, closeSideNav } = appSlice.actions;

export default appSlice.reducer;
