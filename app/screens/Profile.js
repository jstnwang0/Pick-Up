import React from "react";
import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          padding: 10,
          marginTop: 10,
          // backgroundColor: "red",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 3, paddingLeft: 15 }}>
          <FontTextBold style={{ fontSize: 24 }}>Jerry Hamada</FontTextBold>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/EditProfile.png")}
            style={styles.topRightLogos}
          />
          <Image
            source={require("../assets/AddPost.png")}
            style={styles.topRightLogos}
          />
          <Image
            source={require("../assets/Settings.png")}
            style={styles.topRightLogos}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "red",
          width: "100%",
          paddingVertical: 10,
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={require("../assets/Profile.png")}
            style={{ width: 85, height: 85, marginLeft: 20 }}
          />
        </View>
        <View
          style={{
            flex: 3,
            // backgroundColor: "green",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginLeft: -80,
          }}
        >
          <View>
            <View>
              <FontText style={styles.textStyleOne}>Friends</FontText>
            </View>
            <View>
              <FontTextBold style={styles.textStyleTwo}>200+</FontTextBold>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colors.mediumGray,
              width: 1,
              height: 30,
              borderRadius: 1,
            }}
          />
          <View>
            <View>
              <FontText style={styles.textStyleOne}>Posts</FontText>
            </View>
            <View>
              <FontTextBold style={styles.textStyleTwo}>50+</FontTextBold>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <FontText style={{ fontSize: 16 }}>
          Incoming sophomore at UC Berkeley, transferring to El Camino CC to
          play juco, then going to the NFL. Future Hall of Famer
        </FontText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
  topRightLogos: { height: 25, width: 25 },
  textStyleOne: {
    fontSize: 17,
    color: colors.mediumGray,
  },
  textStyleTwo: {
    fontSize: 21,
  },
});
