import React from "react";
import { StyleSheet, Text, View, Switch, Image } from "react-native";
import BackButton from "../components/BackButton";
import { FontText, FontTextBold } from "../components/FontText";
import { PlayerViewBox } from "../components/PlayerViewBox";
import colors from "../config/colors";

export default function GroupDetails({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const [isEnabled2, setIsEnabled2] = React.useState(false);
  const toggleSwitch2 = () => setIsEnabled2(!isEnabled2);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BackButton navigation={navigation} />
        <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
          Chat Details
        </FontTextBold>
      </View>
      <View style={{ width: "90%" }}>
        <FontTextBold style={{ fontSize: 20, marginTop: 30 }}>
          Chat Settings
        </FontTextBold>
        <FontTextBold style={{ fontSize: 18, marginTop: 20 }}>
          Notifications
        </FontTextBold>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <View style={{ flex: 1 }}>
            <FontText style={{ fontSize: 15 }}>Mute notifications</FontText>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <FontText style={{ fontSize: 15 }}>
              Mute call notifications
            </FontText>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Switch onValueChange={toggleSwitch2} value={isEnabled2} />
          </View>
        </View>
        <FontTextBold style={{ fontSize: 18, marginTop: 20 }}>
          Members
        </FontTextBold>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 80,
          }}
        >
          <PlayerViewBox name="Jerry Hamada" type="Message" />
        </View>
        <View
          style={{
            marginTop: 15,
            height: 1,
            backgroundColor: colors.lightGray,
            width: "100%",
          }}
        />
        <FontText style={{ marginTop: 20, fontSize: 15 }}>Report</FontText>
        <FontText style={{ marginTop: 10, fontSize: 15, color: "red" }}>
          Block
        </FontText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
