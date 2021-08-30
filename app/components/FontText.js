import React from "react";
import { View, Text } from "react-native";

export const FontTextBold = (props) => {
  return (
    <Text
      style={{ fontFamily: "Manrope_600SemiBold", ...props.style }}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </Text>
  );
};

export const FontText = (props) => {
  return (
    <Text
      style={{ fontFamily: "Manrope_400Regular", ...props.style }}
      numberOfLines={props.numberOfLines}
      onPress={props.onPress}
    >
      {props.children}
    </Text>
  );
};
