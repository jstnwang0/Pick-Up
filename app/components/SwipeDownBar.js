import React from "react";
import { View } from "react-native";
import colors from "../config/colors";

export default function SwipeDownBar() {
  return (
    <View
      style={{
        marginTop: 10,
        position: "absolute",
        top: 0,
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          height: 6,
          width: 100,
          backgroundColor: colors.swipeBar,
          borderRadius: 3,
        }}
      />
    </View>
  );
}
