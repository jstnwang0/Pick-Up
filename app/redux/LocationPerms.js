import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationPerms: false,
};

export const locationPermsSlice = createSlice({
  name: "locationPerms",
  initialState,
  reducers: {
    setLocationPerms: (state, action) => {
      state.locationPerms = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocationPerms } = locationPermsSlice.actions;

export default locationPermsSlice.reducer;
