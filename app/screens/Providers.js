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
import LocationServices from "./locationServices";

export default function Providers() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LocationServices />
      </NavigationContainer>
    </Provider>
  );
}
