import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SwipeDownBar from "../components/SwipeDownBar";

export default function CreateGame() {
  return (
    <View style={styles.container}>
      <SwipeDownBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
