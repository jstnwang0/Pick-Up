import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import sportTypeReducer from "./CreateGameSport";
import dateReducer from "./CreateGameDate";
import locationReducer from "./CreateGameLocation";
import filterValuesReducer from "./FilterValues";
import locationPermsReducer from "./LocationPerms";

export const store = configureStore({
  reducer: {
    sportType: sportTypeReducer,
    date: dateReducer,
    location: locationReducer,
    filterValues: filterValuesReducer,
    locationPerms: locationPermsReducer,
  },
});
