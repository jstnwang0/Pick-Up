import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ChatBox from "./ChatBox";

export default function DirectMessages({ navigation }) {
  return (
    <View>
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
            name="Jerry"
            messagePreview="Great, Let's get this bread..."
            numOfUnread="13"
            time="3:03"
          />
        </TouchableOpacity>

        <ChatBox
          name="Justin"
          messagePreview="I'm gay, very gay"
          numOfUnread="1"
          time="2:12"
        />
      </View>
    </View>
  );
}
