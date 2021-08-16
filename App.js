import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FindGamesScreen from "./app/screens/FindGamesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FindGamesScreen></FindGamesScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
