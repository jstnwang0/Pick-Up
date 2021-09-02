import { configureStore } from "@reduxjs/toolkit";
import sportTypeReducer from "./CreateGameSport";
import filterValuesReducer from "./FilterValues";
import locationPermsReducer from "./LocationPerms";

export const store = configureStore({
  reducer: {
    sportType: sportTypeReducer,
    filterValues: filterValuesReducer,
    locationPerms: locationPermsReducer,
  },
});
