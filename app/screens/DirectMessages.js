import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";

export default function DirectMessages({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChatDetails");
        }}
      >
        <View
          style={{ backgroundColor: "red", width: 100, height: 100 }}
        ></View>
      </TouchableOpacity>
      <Text>Direct Messages Page</Text>
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
