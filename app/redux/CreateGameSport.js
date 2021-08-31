import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sport: null,
};

export const sportSlice = createSlice({
  name: "sportType",
  initialState,
  reducers: {
    setSport: (state, action) => {
      state.sport = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSport } = sportSlice.actions;

export default sportSlice.reducer;
