import { configureStore } from "@reduxjs/toolkit";
import sportTypeReducer from "./CreateGameSport";

export const store = configureStore({
  reducer: { sportType: sportTypeReducer },
});
