import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../config/colors";
import { FontText, FontTextBold } from "../../components/FontText";

export default function FriendsDisplay({ leftButtonText, rightButtonText }) {
  return (
    <View style={styles.box}>
      <View style={{ flex: 1.4, alignItems: "center" }}>
        <Image
          source={require("../../assets/ProfilePicture.png")}
          style={{ width: 80, height: 80 }}
        ></Image>
      </View>
      <View style={{ flex: 3, justifyContent: "center" }}>
        <FontTextBold style={{ fontSize: 17, marginTop: 6 }}>
          Jerry Hamada
        </FontTextBold>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/ProfilePic.png")}
            style={{
              marginRight: -5,
              width: 20,
              height: 20,
              zIndex: -1,
            }}
          />
          <Image
            source={require("../../assets/ProfilePic2.png")}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <FontText style={{ marginLeft: 5 }}>15 mutual friends</FontText>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginTop: -8,
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "49%",
              height: 35,
              backgroundColor: colors.lightGreen,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontText style={{ color: colors.darkGreen, fontSize: 15 }}>
              {leftButtonText}
            </FontText>
          </View>
          <View
            style={{
              width: "49%",
              height: 35,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: colors.lightGreen,
            }}
          >
            <FontText style={{ color: colors.mediumGray, fontSize: 15 }}>
              {rightButtonText}
            </FontText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 100,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
