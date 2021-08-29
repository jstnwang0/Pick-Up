import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { FontText, FontTextBold } from "../components/FontText";

export default function BackButton({ navigation }) {
  return (
    <View
      style={{
        height: 40,

        width: 40,
        backgroundColor: colors.lightGray,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        activeOpacity={0.3}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={require("../assets/back.png")}
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
