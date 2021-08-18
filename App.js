import React from "react";

import "react-native-gesture-handler";
import Providers from "./app/screens/Providers";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_800ExtraBold,
  });

  if (fontsLoaded) {
    return <Providers></Providers>;
  } else {
    return <AppLoading></AppLoading>;
  }
}
