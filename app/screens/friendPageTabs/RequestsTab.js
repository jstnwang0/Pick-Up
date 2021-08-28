import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RequestsTab() {
  return (
    <View style={styles.container}>
      <Text>RequestsTab Page</Text>
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
