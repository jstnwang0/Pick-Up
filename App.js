import React, { useState, useEffect } from "react";

import "react-native-gesture-handler";
import Providers from "./app/screens/Providers";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_600SemiBold,
} from "@expo-google-fonts/manrope";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_600SemiBold,
    Manrope_400Regular,
  });

  if (fontsLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <Providers></Providers>
        <StatusBar></StatusBar>
      </View>
    );
  } else {
    return <AppLoading></AppLoading>;
  }
}
