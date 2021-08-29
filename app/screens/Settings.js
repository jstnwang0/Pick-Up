import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Switch } from "react-native";
import BackButton from "../components/BackButton";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

export default function Settings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BackButton navigation={navigation} />
        <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
          Settings
        </FontTextBold>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <View style={styles.box}>
          <View style={styles.pictureView}>
            <Image
              source={require("../assets/Notifications.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={{ flex: 3, justifyContent: "center" }}>
            <FontText style={{ fontSize: 19 }}>Notifications</FontText>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.pictureView}>
            <Image
              source={require("../assets/Privacy.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={{ flex: 3, justifyContent: "center" }}>
            <FontText style={{ fontSize: 19 }}>Privacy</FontText>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/ForwardIcon.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.pictureView}>
            <Image
              source={require("../assets/Account.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={{ flex: 3, justifyContent: "center" }}>
            <FontText style={{ fontSize: 19 }}>Account</FontText>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/ForwardIcon.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            marginBottom: 30,
            bottom: 0,
            alignSelf: "center",
            ...styles.box,
          }}
        >
          <View style={styles.pictureView}>
            <Image
              source={require("../assets/LogOutIcon.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={{ flex: 3, justifyContent: "center" }}>
            <FontText style={{ fontSize: 19 }}>Log Out</FontText>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/ForwardIcon.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
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
  box: {
    backgroundColor: colors.lightGray,
    width: "100%",
    borderRadius: 20,
    marginTop: "2%",
    flexDirection: "row",
    height: 70,
  },
  pictureView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
