import React from "react";
import { Button, Text, SafeAreaView } from "react-native";

function Profile2({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="Profile2" onPress={() => navigation.navigate("Profile")} />
    </SafeAreaView>
  );
}

export default Profile2;
