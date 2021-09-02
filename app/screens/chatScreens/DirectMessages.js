import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const DirectMessages = ({ navigation }) => {
  return (
    <View>
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
};

export default DirectMessages;
