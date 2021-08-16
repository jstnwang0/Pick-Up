import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="Home" onPress={() => navigation.navigate("Home2")} />
    </SafeAreaView>
  );
}

export default Home;
