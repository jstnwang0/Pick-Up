import {
  Manrope_400Regular,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import React from "react";
import { View, Text } from "react-native";

export default function FontText(props) {
  return (
    <Text style={{ fontFamily: "Manrope_400Regular", ...props.style }}>
      {props.children}
    </Text>
  );
}
