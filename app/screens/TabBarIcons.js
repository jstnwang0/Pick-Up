import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

export const GamesIcon = ({ focused }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/GamesIcon.png")}
        style={focused ? styles.active : styles.inactive}
      />
    </View>
  );
};

export const ChatIcon = ({ focused }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/ChatIcon.png")}
        style={focused ? styles.active : styles.inactive}
      />
    </View>
  );
};

export const ProfileIcon = ({ focused }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/ProfileIcon.png")}
        style={focused ? styles.active : styles.inactive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  active: {
    width: 30,
    height: 30,
    tintColor: colors.darkGreen,
  },
  inactive: {
    width: 30,
    height: 30,
    tintColor: colors.mediumGray,
  },
});
