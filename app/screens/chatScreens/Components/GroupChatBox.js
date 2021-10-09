import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../../config/colors";
import { FontText, FontTextBold } from "../../../components/FontText";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function GroupChatBox({
  name,
  messagePreview,
  numOfUnread,
  time,
}) {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        height: 70,
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Image
          source={{ url: "https://picsum.photos/200" }}
          style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
        />
        <View
          style={{
            borderWidth: 5,
            width: 36,
            height: 36,
            borderRadius: 18,
            borderColor: "white",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
            marginLeft: 30,
            marginTop: -30,
          }}
        >
          <Image
            source={{ url: "https://picsum.photos/200" }}
            style={{ width: 33, height: 33, borderRadius: 33 / 2 }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 3.25,
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGray,
        }}
      >
        <View>
          <FontTextBold style={{ fontSize: 18 }}>{name}</FontTextBold>
        </View>
        <View>
          <FontText style={{ fontSize: 14 }}>{messagePreview}</FontText>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGray,
        }}
      >
        <View
          style={{
            height: 25,
            width: 25,
            borderRadius: 25 / 2,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontText style={{ color: "white" }}>{numOfUnread}</FontText>
        </View>
        <FontText style={{ color: colors.mediumGray }}>{time}</FontText>
      </View>
    </View>
  );
}
