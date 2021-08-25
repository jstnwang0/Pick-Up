import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import SwipeDownBar from "../components/SwipeDownBar";
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function CreateGame({ navigation }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Football", value: "football" },
    { label: "Soccer", value: "soccer" },
    { label: "Basketball", value: "basketball" },
    { label: "Spikeball", value: "spikeball" },
    { label: "Frisbee", value: "frisbee" },
  ]);

  const [number, onChangeNumber] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <SwipeDownBar />
      <View
        style={{
          flex: 1,
          width: "90%",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 40,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: colors.lightGray,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Image
                source={require("../assets/back.png")}
                style={{ height: 30, width: 30 }}
              />
            </View>
          </TouchableWithoutFeedback>
          <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
            Create a Game
          </FontTextBold>
        </View>
        <View style={{ marginTop: 25 }}>
          <FontText style={styles.textTitle}>Sports Type</FontText>
        </View>
        <View style={{ marginVertical: 5, zIndex: 1 }}></View>
        <View style={{ marginTop: 10 }}>
          <FontText style={styles.textTitle}>Game Title</FontText>
        </View>
        <View style={{ height: 50 }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter Game Title"
            placeholderTextColor="#8392A5"
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <FontText style={styles.textTitle}>Date & Time</FontText>
        </View>
        <View></View>

        <View style={{ marginTop: 30 }}>
          <FontText style={styles.textTitle}>Game Details</FontText>
        </View>
        <View style={{ height: 150 }}>
          <TextInput
            style={styles.inputmulti}
            onChangeText={onChangeNumber2}
            value={number2}
            multiline
            placeholder="Enter Game Details"
            placeholderTextColor="#8392A5"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    borderLeftWidth: 10,
    borderColor: colors.lightGray,
    width: "100%",
    marginTop: 5,
    fontSize: 15,
    height: 50,
  },
  inputmulti: {
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    borderLeftWidth: 10,
    borderColor: colors.lightGray,
    width: "100%",
    padding: 2,
    paddingTop: 10,
    marginTop: 5,
    fontSize: 15,
    height: 100,
  },
  textTitle: {
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: colors.lightGray,
    borderWidth: 0,
  },
});
