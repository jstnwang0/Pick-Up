import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontText, FontTextBold } from "../../components/FontText";
import colors from "../../config/colors";
import ChatBox from "./ChatBox";

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
      <View
        style={{
          width: "100%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ChatBox
          name="Jerry"
          messagePreview="Great, Let's get this bread..."
          numOfUnread="13"
          time="3:03"
        />
        <ChatBox
          name="Justin"
          messagePreview="I'm gay, very gay"
          numOfUnread="1"
          time="2:12"
        />
      </View>
    </View>
  );
};

export default DirectMessages;
