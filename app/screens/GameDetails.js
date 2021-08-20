import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GameDetails() {
  return (
    <View style={styles.container}>
      <Text>Game Details Page</Text>
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
