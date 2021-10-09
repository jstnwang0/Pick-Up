import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontText, FontTextBold } from "../../components/FontText";
import colors from "../../config/colors";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ width: "90%" }}>
        <FontTextBold style={{ fontSize: 30, marginTop: 50 }}>
          Logo
        </FontTextBold>
        <Image
          source={require("../../assets/Landing1.png")}
          style={{
            width: 316,
            height: 310,
            alignSelf: "center",
            marginTop: 50,
          }}
        />
        <FontTextBold
          style={{ fontSize: 30, marginTop: 50, alignSelf: "center" }}
        >
          Find Nearby Sports Around you
        </FontTextBold>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MainStack");
          }}
        >
          <View
            style={{
              height: 50,
              width: 200,
              backgroundColor: colors.darkGreen,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
