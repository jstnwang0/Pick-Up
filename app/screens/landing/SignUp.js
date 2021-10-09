import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import { FontText, FontTextBold } from "../../components/FontText";
import colors from "../../config/colors";
import PagerView from "react-native-pager-view";

const width = Dimensions.get("screen").width;
export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <FontTextBold style={{ marginTop: 50, fontSize: 30, marginLeft: "10%" }}>
        Logo
      </FontTextBold>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topicText: {
    fontSize: 30,
    marginTop: 60,
    textAlign: "center",
    fontFamily: "Manrope_600SemiBold",
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
});
