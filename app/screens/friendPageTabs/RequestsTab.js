import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FriendsDisplay from "./FriendDisplay";

export default function RequestsTab() {
  return (
    <ScrollView style={{ marginBottom: 15 }}>
      <View style={styles.container}>
        <FriendsDisplay leftButtonText={"Accept"} rightButtonText={"Decline"} />
        <FriendsDisplay leftButtonText={"Accept"} rightButtonText={"Decline"} />
        <FriendsDisplay leftButtonText={"Accept"} rightButtonText={"Decline"} />
        <FriendsDisplay leftButtonText={"Accept"} rightButtonText={"Decline"} />
        <FriendsDisplay leftButtonText={"Accept"} rightButtonText={"Decline"} />
        <FriendsDisplay leftButtonText={"Accept"} rightButtonText={"Decline"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
