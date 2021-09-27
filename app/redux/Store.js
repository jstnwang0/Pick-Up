import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import sportTypeReducer from "./CreateGameSport";
import dateReducer from "./CreateGameDate";
import filterValuesReducer from "./FilterValues";
import locationPermsReducer from "./LocationPerms";

export const store = configureStore({
  reducer: {
    sportType: sportTypeReducer,
    date: dateReducer,
    filterValues: filterValuesReducer,
    locationPerms: locationPermsReducer,
  },
});
