import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import * as Location from "expo-location";
import { LocationPermsContext } from "../contexts/LocationPermsContext";
import { Button, View } from "react-native";
import { SportsTypeContext } from "../contexts/SportsTypeContext";
import { FilterContext } from "../contexts/FilterContext";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

export default function Providers() {
  const [locationPerms, setLocationPerms] = useState(false);

  const [sportsCreate, setSportsCreate] = useState(null);

  const [friendsOnly, setFriendsOnly] = useState(false);
  const [sportsFilter, setSportsFilter] = useState([]);
  const [timeOne, setTimeOne] = useState(false);
  const [timeTwo, setTimeTwo] = useState(false);
  const [timeThree, setTimeThree] = useState(false);
  const [timeFour, setTimeFour] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      setLocationPerms(true);
    })();
  }, []);

  return (
    <Provider store={store}>
      <LocationPermsContext.Provider value={locationPerms}>
        <FilterContext.Provider
          value={{
            friendsOnly,
            setFriendsOnly,
            sportsFilter,
            setSportsFilter,
            timeOne,
            setTimeOne,
            timeTwo,
            setTimeTwo,
            timeThree,
            setTimeThree,
            timeFour,
            setTimeFour,
          }}
        >
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </FilterContext.Provider>
      </LocationPermsContext.Provider>
    </Provider>
  );
}
