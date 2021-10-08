import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Landing</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MainStack");
        }}
      >
        <View
          style={{
            height: 50,
            width: 200,
            backgroundColor: colors.darkGreen,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
