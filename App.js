import React, { useState, useEffect } from "react";

import "react-native-gesture-handler";
import Providers from "./app/screens/Providers";
import AppLoading from "expo-app-loading";
import { useFonts, Manrope_400Regular } from "@expo-google-fonts/manrope";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
  });

  if (fontsLoaded) {
    return <Providers></Providers>;
  } else {
    return <AppLoading></AppLoading>;
  }
}
