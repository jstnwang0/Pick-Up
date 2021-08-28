import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

export default function Friends({ navigation }) {
  return (
    <View style={styles.bigBox}>
      <View style={styles.topBar}>
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
        <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
          Friends
        </FontTextBold>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigBox: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    width: "100%",
    marginTop: 50,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
