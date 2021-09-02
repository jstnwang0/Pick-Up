import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import FriendsDisplay from "./FriendDisplay";

export default function SuggestionsTab() {
  return (
    <ScrollView style={{ marginBottom: 15 }}>
      <View style={styles.container}>
        <FriendsDisplay
          leftButtonText={"Add Friend"}
          rightButtonText={"Ignore"}
        />
        <FriendsDisplay
          leftButtonText={"Add Friend"}
          rightButtonText={"Ignore"}
        />
        <FriendsDisplay
          leftButtonText={"Add Friend"}
          rightButtonText={"Ignore"}
        />
        <FriendsDisplay
          leftButtonText={"Add Friend"}
          rightButtonText={"Ignore"}
        />
        <FriendsDisplay
          leftButtonText={"Add Friend"}
          rightButtonText={"Ignore"}
        />
        <FriendsDisplay
          leftButtonText={"Add Friend"}
          rightButtonText={"Ignore"}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
});
