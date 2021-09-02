import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendsOnly: false,
  sports: [],
  timeOne: false,
  timeTwo: false,
  timeThree: false,
  timeFour: false,
};

export const filterValuesSlice = createSlice({
  name: "filterValues",
  initialState,
  reducers: {
    setFriendsOnly: (state, action) => {
      state.friendsOnly = action.payload;
    },
    setSports: (state, action) => {
      state.sports = action.payload;
    },
    setTimeOne: (state, action) => {
      state.timeOne = action.payload;
    },
    setTimeTwo: (state, action) => {
      state.timeTwo = action.payload;
    },
    setTimeThree: (state, action) => {
      state.timeThree = action.payload;
    },
    setTimeFour: (state, action) => {
      state.timeFour = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFriendsOnly,
  setSports,
  setTimeOne,
  setTimeTwo,
  setTimeThree,
  setTimeFour,
} = filterValuesSlice.actions;

export default filterValuesSlice.reducer;
