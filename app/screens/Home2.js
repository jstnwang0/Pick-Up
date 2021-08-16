import React from "react";
import { Button, Text, SafeAreaView } from "react-native";

function Home2({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="Home2" onPress={() => navigation.navigate("Tabs")} />
    </SafeAreaView>
  );
}

export default Home2;
