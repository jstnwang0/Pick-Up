import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default function Filters({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
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
          justifyContent: "center",
        }}
      >
        <Text>Filters</Text>
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
