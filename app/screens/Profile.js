import React from "react";
import { Button, Text, SafeAreaView } from "react-native";

function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="Profile" onPress={() => navigation.navigate("Profile2")} />
    </SafeAreaView>
  );
}

export default Profile;
