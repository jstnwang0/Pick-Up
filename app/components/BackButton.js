import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { FontText, FontTextBold } from "../components/FontText";

export default function BackButton({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.goBack();
      }}
    >
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
        <Image
          source={require("../assets/back.png")}
          style={{ height: 30, width: 30 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
