import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FindGamesScreen from "./app/screens/FindGamesScreen";

import "react-native-gesture-handler";
import Navigator from "./app/screens/Navigator";

export default function App() {
  return <Navigator></Navigator>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
