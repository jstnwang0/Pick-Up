import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontText, FontTextBold } from "../assets/Fonts/FontText";
import colors from "../config/colors";

import * as Haptics from "expo-haptics";

export default function Filters({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: "black",
            opacity: 0.6,
            width: "100%",
            height: "100%",
          }}
        ></View>
      </TouchableWithoutFeedback>

      <View
        style={{
          width: "90%",
          height: "60%",
          borderRadius: 30,
          backgroundColor: "white",
          alignItems: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            height: 40,
            width: "100%",
            justifyContent: "center",
            // backgroundColor: "red",
            // flexDirection: "row",
          }}
        >
          <View>
            <FontTextBold style={{ fontSize: 22 }}>
              Filter Your Search
            </FontTextBold>
          </View>
          <View
            style={{
              position: "absolute",
              right: 0,
              height: 40,
              width: 40,
              borderRadius: 10,
              backgroundColor: colors.lightGray,
            }}
          >
            <TouchableOpacity
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              activeOpacity={0.3}
              onPressIn={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../assets/closeIcon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
