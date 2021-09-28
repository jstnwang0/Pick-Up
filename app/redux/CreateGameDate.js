import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: null,
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
