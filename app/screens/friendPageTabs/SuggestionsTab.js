import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SuggestionsTab() {
  return (
    <View style={styles.container}>
      <Text>SuggestionsTab Page</Text>
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
