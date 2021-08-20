import React, { useState, useEffect } from "react";

import "react-native-gesture-handler";
import Providers from "./app/screens/Providers";
import AppLoading from "expo-app-loading";
import { useFonts, Manrope_400Regular } from "@expo-google-fonts/manrope";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MyGames from "./app/screens/MyGames";

export default function App() {
  let [fontsLoaded] = useFonts({
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

  // const Tab = createMaterialTopTabNavigator();
  // return (
  //   <NavigationContainer>
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <Tab.Navigator>
  //         <Tab.Screen name="First" component={MyGames}></Tab.Screen>
  //         <Tab.Screen name="Second" component={MyGames}></Tab.Screen>
  //       </Tab.Navigator>
  //     </SafeAreaView>
  //   </NavigationContainer>
  // );
}
