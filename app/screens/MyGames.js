import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MyGames({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>My Games Page</Text>
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
