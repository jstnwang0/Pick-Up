import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BackButton from "../components/BackButton";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

export default function AllPlayers({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BackButton navigation={navigation} />
        <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
          Players
        </FontTextBold>
      </View>
      <View style={{ width: "90%", marginTop: 35 }}>
        <ViewBox name={"Ur mom"} type={"Add Friend"} />
        <ViewBox name={"Justin's mom"} type={"Requested"} />
        <ViewBox name={"Ur mom"} type={"Message"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
  },
  topBar: {
    width: "100%",
    marginTop: 60,
    marginLeft: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});

export const ViewBox = ({ name, type }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Image
          source={{ url: "https://picsum.photos/200" }}
          style={{ width: 55, height: 55, borderRadius: 55 / 2 }}
        />
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <FontTextBold style={{ fontSize: 20 }}>{name}</FontTextBold>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor:
              type == "Requested"
                ? colors.lightGray
                : type == "Add Friend"
                ? colors.lightGreen
                : colors.darkGreen,
            width: 110,
            height: 35,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontText
            style={{
              fontSize: 16,
              color:
                type == "Requested"
                  ? "black"
                  : type == "Add Friend"
                  ? colors.darkGreen
                  : "white",
            }}
          >
            {type}
          </FontText>
        </View>
      </View>
    </View>
  );
};
