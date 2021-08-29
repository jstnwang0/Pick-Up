import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import { FontText, FontTextBold } from "../components/FontText";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BackButton navigation={navigation} />
        <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
          Settings
        </FontTextBold>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
  },
  topBar: {
    width: "100%",
    marginTop: 60,
    marginLeft: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
