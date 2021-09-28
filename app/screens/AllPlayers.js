import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BackButton from "../components/BackButton";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";
import { PlayerViewBox } from "../components/PlayerViewBox";

export default function AllPlayers({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BackButton navigation={navigation} />
        <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
          Players
        </FontTextBold>
      </View>
      <View style={{ width: "90%", marginTop: 15 }}>
        <PlayerViewBox name={"Jerry Hamada"} type={"Add Friend"} />
        <PlayerViewBox name={"Victor Rodgers"} type={"Requested"} />
        <PlayerViewBox name={"Justin Wang"} type={"Message"} />
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
