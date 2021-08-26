import React, { useContext, useEffect, useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";

import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import SwipeDownBar from "../components/SwipeDownBar";

import { useCardAnimation } from "@react-navigation/stack";
import colors from "../config/colors";
import * as Haptics from "expo-haptics";
import { SportsTypeContext } from "../contexts/SportsTypeContext";

export const PickSport = ({ navigation }) => {
  const { current } = useCardAnimation();
  const { sportsType, setSportsType } = useContext(SportsTypeContext);
  const [initial] = useState(sportsType);

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.6,
          }}
        ></View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={{
          position: "absolute",
          width: "90%",
          bottom: 0,
          alignSelf: "center",
          borderRadius: 20,
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [400, 0],
              }),
            },
          ],
        }}
      >
        <View style={{ backgroundColor: "white", borderRadius: 20 }}>
          <View
            style={{
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontTextBold style={{ fontSize: 20, color: colors.mediumGray }}>
              Sports Type
            </FontTextBold>
          </View>

          <View
            style={{
              borderTopColor: colors.mediumGray,
              borderTopWidth: 0.5,
              borderBottomColor: colors.mediumGray,
              borderBottomWidth: 0.5,
            }}
          >
            <Picker
              selectedValue={sportsType}
              onValueChange={(itemValue, itemIndex) => {
                setSportsType(itemValue);
              }}
              itemStyle={{ fontFamily: "Manrope_400Regular" }}
            >
              <Picker.Item label="Football" value="Football" />
              <Picker.Item label="Soccer" value="Soccer" />
              <Picker.Item label="Basketball" value="Basketball" />
              <Picker.Item label="Spikeball" value="Spikeball" />
              <Picker.Item label="Frisbee" value="Frisbee" />
              <Picker.Item label="Volleyball" value="Volleyball" />
            </Picker>
          </View>

          <View
            style={{
              height: 60,
              width: "100%",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.3}
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontTextBold style={{ fontSize: 20, color: colors.blue }}>
                Confirm
              </FontTextBold>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 15,
            marginBottom: 25,

            height: 60,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.3}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
            onPress={() => {
              setSportsType(initial);
              navigation.goBack();
            }}
          >
            <FontTextBold style={{ fontSize: 20, color: colors.red }}>
              Cancel
            </FontTextBold>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export const CreateGame = ({ navigation }) => {
  const { sportsType, setSportsType } = useContext(SportsTypeContext);

  const [number, setNumber] = React.useState(null);
  const [number2, setNumber2] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <SwipeDownBar />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          width: "100%",
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PickSport");
          }}
        >
          <View style={styles.picker}>
            <Text>{sportsType}</Text>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 10 }}>
          <FontText style={styles.textTitle}>Game Title</FontText>
        </View>
        <View style={{ height: 50 }}>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Enter Game Title"
            placeholderTextColor={colors.mediumGray}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <FontText style={styles.textTitle}>Date & Time</FontText>
        </View>

        <View style={{ marginTop: 30 }}>
          <FontText style={styles.textTitle}>Game Details</FontText>
        </View>
        <View style={{ height: 150 }}>
          <TextInput
            style={styles.inputmulti}
            onChangeText={setNumber2}
            value={number2}
            multiline
            placeholder="Enter Game Details"
            placeholderTextColor={colors.mediumGray}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: colors.lightGray,
    height: 50,
    borderRadius: 8,
    marginTop: 5,
    justifyContent: "center",
    paddingLeft: 10,
  },
  input: {
    fontFamily: "Manrope_400Regular",
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingLeft: 10,
    borderColor: colors.lightGray,
    width: "100%",
    marginTop: 5,
    fontSize: 15,
    height: 50,
  },
  inputmulti: {
    fontFamily: "Manrope_400Regular",
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingLeft: 10,
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
