import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { FontText, FontTextBold } from "../components/FontText";

export default function SearchBar() {
  return (
    <View
      style={{
        width: "90%",
        height: 50,
        backgroundColor: colors.lightGray,
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Image
        source={require("../assets/Search.png")}
        style={{ width: 20, height: 20, marginLeft: 15 }}
      />
      <TextInput
        returnKeyType="done"
        autoCorrect={false}
        style={{
          position: "absolute",
          width: "100%",
          paddingLeft: 50,
          height: 60,
          fontFamily: "Manrope_400Regular",
          fontSize: 16,
        }}
      ></TextInput>
    </View>
  );
}
