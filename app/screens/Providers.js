import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import * as Location from "expo-location";
import { LocationPermsContext } from "../contexts/LocationPermsContext";
import { Button, View } from "react-native";

export default function Providers() {
  const [locationPerms, setLocationPerms] = useState(false);

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
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </LocationPermsContext.Provider>
  );
}
