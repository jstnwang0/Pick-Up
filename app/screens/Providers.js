import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import * as Location from "expo-location";
import { LocationPermsContext } from "../contexts/LocationPermsContext";
import { Button, View } from "react-native";
import { SportsTypeContext } from "../contexts/SportsTypeContext";

export default function Providers() {
  const [locationPerms, setLocationPerms] = useState(false);
  const [sportsType, setSportsType] = useState("Football");

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
      <SportsTypeContext.Provider value={{ sportsType, setSportsType }}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SportsTypeContext.Provider>
    </LocationPermsContext.Provider>
  );
}
