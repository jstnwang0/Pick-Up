import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GroupChatBox from "../chatScreens/Components/GroupChatBox";

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
          navigation.navigate("GroupChatMessage");
        }}
        activeOpacity={0.5}
      >
        <GroupChatBox
          name="Sunday Soccer"
          messagePreview="Where can we find parking?"
          numOfUnread="7"
          time="12:03"
        />
      </TouchableOpacity>

      <GroupChatBox
        name="Justin"
        messagePreview="I'm gay, very gay"
        numOfUnread="1"
        time="2:12"
      />
    </View>
  );
}
