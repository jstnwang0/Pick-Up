import React, { useEffect, useContext } from "react";
import colors from "../config/colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontText, FontTextBold } from "../components/FontText";

export default function MyGames({ navigation }) {
  return (
    <View style={styles.big}>
      <View style={{ marginTop: 20, ...styles.container }}>
        <View
          style={{
            flex: 2.5,
            justifyContent: "center",
          }}
        >
          <View style={styles.leftLogoSection}>
            <View style={styles.circleOutline}>
              <Image
                source={require("../assets/basketballIcon.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 5,
            justifyContent: "center",
          }}
        >
          <FontTextBold style={{ fontSize: 20 }}>Basketball Game</FontTextBold>
          <FontText>Sunday, Aug 08, 2021, 10:00am</FontText>
        </View>
        <View style={{ flex: 3, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "green",
              width: 80,
              height: 40,
              marginLeft: 7,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../assets/Check.png")}
              style={{ width: 20, height: 20 }}
            />
            <FontText style={{ color: "white" }}>Joined</FontText>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, ...styles.container }}>
        <View
          style={{
            flex: 2.5,
            justifyContent: "center",
          }}
        >
          <View style={styles.leftLogoSection}>
            <View style={styles.circleOutline}>
              <Image
                source={require("../assets/basketballIcon.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 5, justifyContent: "center" }}>
          <FontTextBold style={{ fontSize: 20 }}>Basketball Game</FontTextBold>
          <FontText>Sunday, Aug 08, 2021, 10:00am</FontText>
        </View>
        <View style={{ flex: 3, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#E9EFEB",
              width: 80,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 7,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../assets/ByYou.png")}
              style={{ width: 20, height: 20 }}
            />
            <FontText style={{ color: "#259D63" }}>By You</FontText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  big: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    height: 100,
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
  },
  leftLogoSection: {
    width: 85,
    height: 85,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  circleOutline: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 2,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
