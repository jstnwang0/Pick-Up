import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import * as Location from "expo-location";
import { LocationPermsContext } from "../contexts/LocationPermsContext";
import { Button, View } from "react-native";
import { SportsTypeContext } from "../contexts/SportsTypeContext";
import { FilterContext } from "../contexts/FilterContext";

export default function Providers() {
  const [locationPerms, setLocationPerms] = useState(false);

  const [sportsCreate, setSportsCreate] = useState("Football");

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
    <LocationPermsContext.Provider value={locationPerms}>
      <SportsTypeContext.Provider value={{ sportsCreate, setSportsCreate }}>
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
      </SportsTypeContext.Provider>
    </LocationPermsContext.Provider>
  );
}
