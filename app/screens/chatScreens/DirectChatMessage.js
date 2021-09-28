import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import BackButton from "../../components/BackButton";
import { FontTextBold, FontText } from "../../components/FontText";
import SearchBar from "../../components/SearchBar";
import colors from "../../config/colors";

export default function Chat({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={{ flex: 1 }}>
          <BackButton navigation={navigation} />
        </View>
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={require("../../assets/ProfilePic.png")}
              style={{ width: 45, height: 45 }}
            />
          </View>
          <View>
            <FontTextBold style={{ fontSize: 20, marginLeft: 10 }}>
              Jerry Hamada
            </FontTextBold>
          </View>
        </View>
        <View style={{ flex: 1.1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ChatDetails");
            }}
          >
            <Image
              source={require("../../assets/ThreeDots.png")}
              style={{ width: 27, height: 27 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          marginTop: 20,
          backgroundColor: colors.lightGray,
        }}
      >
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            paddingVertical: 5,
            alignSelf: "center",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <FontText style={{ color: colors.mediumGray }}>Today</FontText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    marginTop: 60,
    marginLeft: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
});
