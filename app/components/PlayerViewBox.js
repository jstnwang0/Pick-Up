import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BackButton from "./BackButton";
import { FontText, FontTextBold } from "./FontText";
import colors from "../config/colors";

export const PlayerViewBox = ({ name, type }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Image
          source={{ url: "https://picsum.photos/200" }}
          style={{ width: 55, height: 55, borderRadius: 55 / 2 }}
        />
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <FontTextBold style={{ fontSize: 20 }}>{name}</FontTextBold>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor:
              type == "Requested"
                ? colors.lightGray
                : type == "Add Friend"
                ? colors.lightGreen
                : colors.darkGreen,
            width: 110,
            height: 35,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontText
            style={{
              fontSize: 16,
              color:
                type == "Requested"
                  ? "black"
                  : type == "Add Friend"
                  ? colors.darkGreen
                  : "white",
            }}
          >
            {type}
          </FontText>
        </View>
      </View>
    </View>
  );
};
