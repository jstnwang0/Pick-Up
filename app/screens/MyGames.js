import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeTabContext } from "../contexts/HomeTabContext";

export default function MyGames({ navigation }) {
  const { animateRight } = useContext(HomeTabContext);
  useEffect(() => {
    const animator = navigation.addListener("tabPress", () => {
      animateRight();
    });

    return animator;
  }, [navigation]);

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
