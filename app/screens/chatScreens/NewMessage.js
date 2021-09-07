import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../../components/BackButton";
import { FontTextBold, FontText } from "../../components/FontText";
import SearchBar from "../../components/SearchBar";
import colors from "../../config/colors";

export default function NewMessage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <BackButton navigation={navigation} />
        </View>
        <View style={{ marginLeft: 15 }}>
          <View>
            <FontText style={{ fontSize: 18 }}>Select Contact</FontText>
          </View>
          <View>
            <FontText style={{ color: colors.mediumGray }}>
              4 of 200 selected
            </FontText>
          </View>
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 15, alignItems: "center" }}>
        <SearchBar />
      </View>
      <View style={{ width: "90%", marginTop: 20 }}>
        <FontText style={{ fontSize: 17 }}>Suggested</FontText>
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
