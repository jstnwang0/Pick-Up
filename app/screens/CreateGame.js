import React, { useContext, useEffect, useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import BackButton from "../components/BackButton";

import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import SwipeDownBar from "../components/SwipeDownBar";

import { useCardAnimation } from "@react-navigation/stack";
import colors from "../config/colors";
import * as Haptics from "expo-haptics";
import { SportsTypeContext } from "../contexts/SportsTypeContext";
import { useSelector, useDispatch } from "react-redux";
import { setSport } from "../redux/CreateGameSport";
import DateTimePicker from "@react-native-community/datetimepicker";
import { setDate } from "../redux/CreateGameDate";

export const CreateGamePopup = ({ navigation, route }) => {
  const { current } = useCardAnimation();
  const [canceled, setCanceled] = useState(false);
  const [initialSport] = useState(
    useSelector((state) => state.sportType.sport)
  );
  const [initialDate] = useState(useSelector((state) => state.date.date));
  const dispatch = useDispatch();

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
          width: "95%",
          bottom: 0,
          alignSelf: "center",
          borderRadius: 20,
          marginBottom: 20,
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
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontTextBold style={{ fontSize: 20, color: colors.mediumGray }}>
              {route.params.type == "sport" ? "Sport Type" : "Date"}
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
            {route.params.type == "sport" ? <PickSport /> : <PickDate />}
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
              <FontTextBold style={{ fontSize: 18, color: colors.blue }}>
                Confirm
              </FontTextBold>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 15,
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
              if (route.params.type == "sport") {
                setTimeout(() => {
                  dispatch(setSport(initialSport));
                }, 100);
              } else {
                setTimeout(() => {
                  dispatch(setDate(initialDate));
                }, 100);
              }
              navigation.goBack();
            }}
          >
            <FontTextBold style={{ fontSize: 18, color: colors.red }}>
              Cancel
            </FontTextBold>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export const PickSport = ({ navigation }) => {
  const sportType = useSelector((state) => state.sportType.sport);
  const dispatch = useDispatch();

  return (
    <Picker
      selectedValue={sportType}
      onValueChange={(itemValue, itemIndex) => {
        dispatch(setSport(itemValue));
      }}
      // itemStyle={{ fontFamily: "Manrope_400Regular", fontSize: 18 }}
    >
      <Picker.Item label="Choose a sport..." value={null} />
      <Picker.Item label="Football" value="Football" />
      <Picker.Item label="Soccer" value="Soccer" />
      <Picker.Item label="Basketball" value="Basketball" />
      <Picker.Item label="Spikeball" value="Spikeball" />
      <Picker.Item label="Frisbee" value="Frisbee" />
      <Picker.Item label="Volleyball" value="Volleyball" />
    </Picker>
  );
};

export const PickDate = ({ navigation }) => {
  const date = useSelector((state) => state.date.date);
  const dispatch = useDispatch();

  return (
    <DateTimePicker
      value={new Date(JSON.parse(date))}
      onChange={(event, date) => {
        dispatch(setDate(JSON.stringify(date)));
      }}
      minuteInterval={5}
      minimumDate={new Date()}
      maximumDate={new Date(Date.now() + 12096e5)}
      mode="datetime"
      display="spinner"
    />
  );
};

export const CreateGame = ({ navigation }) => {
  const dispatch = useDispatch();
  const sportType = useSelector((state) => state.sportType.sport);

  const date = useSelector((state) => state.date.date);
  useEffect(() => {
    if (date == null) {
      dispatch(setDate(JSON.stringify(new Date())));
    }
  });

  const [title, setTitle] = React.useState(null);
  const [details, setDetails] = React.useState(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 40,
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <BackButton navigation={navigation} />
          <FontTextBold style={{ fontSize: 20, marginLeft: 15 }}>
            Create a Game
          </FontTextBold>
        </View>

        <ScrollView style={{ marginTop: 10 }}>
          <FontText style={styles.textTitle}>Sports Type</FontText>

          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => {
              navigation.navigate("CreateGamePopup", { type: "sport" });
            }}
          >
            <View style={styles.picker}>
              {sportType ? (
                <FontText style={{ fontSize: 15 }}>{sportType}</FontText>
              ) : (
                <FontText style={{ fontSize: 15, color: colors.mediumGray }}>
                  Choose a sport...
                </FontText>
              )}
            </View>
          </TouchableOpacity>

          <FontText style={styles.textTitle}>Game Title</FontText>
          <TextInput
            style={styles.inputTitle}
            onChangeText={setTitle}
            value={title}
            placeholder="Enter Game Title"
            placeholderTextColor={colors.mediumGray}
            returnKeyType="done"
            autoCorrect={false}
          />
          <FontText style={styles.textTitle}>Game Details</FontText>
          <TextInput
            style={styles.inputDetails}
            onChangeText={setDetails}
            value={details}
            multiline
            placeholder="Enter Game Details"
            placeholderTextColor={colors.mediumGray}
            returnKeyType="done"
            blurOnSubmit={true}
            autoCorrect={false}
          />
          <FontText style={styles.textTitle}>Date and Time</FontText>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => {
              navigation.navigate("CreateGamePopup", { type: "date" });
            }}
          >
            <View style={styles.picker}>
              <FontText style={{ fontSize: 15 }}>
                {new Date(JSON.parse(date)).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </FontText>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  inputDetails: {
    fontFamily: "Manrope_400Regular",
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingLeft: 10,
    width: "100%",
    paddingTop: 10,
    marginTop: 5,
    fontSize: 15,
    height: 100,
  },
  inputTitle: {
    fontFamily: "Manrope_400Regular",
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingLeft: 10,
    width: "100%",
    marginTop: 5,
    fontSize: 15,
    height: 50,
  },
  textTitle: {
    marginTop: 10,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: colors.lightGray,
    borderWidth: 0,
  },
  topBar: {
    width: "100%",
    marginTop: 60,
    marginLeft: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
  },
});
