import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DirectMessages() {
  return (
    <View style={styles.container}>
      <Text>Direct Messages Page</Text>
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
