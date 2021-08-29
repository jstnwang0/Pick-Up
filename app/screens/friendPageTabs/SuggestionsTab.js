import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { FontText, FontTextBold } from "../../components/FontText";
import colors from "../../config/colors";

export default function SuggestionsTab() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ flex: 1.4 }}>
          <Image
            source={require("../../assets/ProfilePicture.png")}
            style={{ width: 100, height: 100 }}
          ></Image>
        </View>
        <View style={{ flex: 3 }}>
          <FontTextBold style={{ fontSize: 19 }}>Jerry Hamada</FontTextBold>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Image
              source={require("../../assets/ProfilePic.png")}
              style={{
                marginRight: -5,
                width: 20,
                height: 20,
                zIndex: -1,
              }}
            ></Image>
            <Image
              source={require("../../assets/ProfilePic2.png")}
              style={{
                width: 20,
                height: 20,
              }}
            ></Image>
            <FontText style={{ marginLeft: 5 }}>15 mutual friends</FontText>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginTop: 5,
              width: "90%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 110,
                height: 40,
                backgroundColor: colors.lightGreen,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontText style={{ color: colors.darkGreen, fontSize: 15 }}>
                Add Friend
              </FontText>
            </View>
            <View
              style={{
                width: 110,
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: colors.lightGreen,
              }}
            >
              <FontText style={{ color: colors.mediumGray, fontSize: 15 }}>
                Ignore
              </FontText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
  },
  box: {
    width: "100%",
    height: 100,
    marginVertical: 20,
    flexDirection: "row",
  },
});
