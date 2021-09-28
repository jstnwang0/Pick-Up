import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ChatBox from "./ChatBox";

export default function GroupChats({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DirectChatMessage");
        }}
        activeOpacity={0.3}
      >
        <ChatBox
          name="Sunday Soccer"
          messagePreview="Where can we find parking?"
          numOfUnread="7"
          time="12:03"
        />
      </TouchableOpacity>

      <ChatBox
        name="Justin"
        messagePreview="I'm gay, very gay"
        numOfUnread="1"
        time="2:12"
      />
    </View>
  );
}
