import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from "react-native";
import { FontTextBold } from "../../../components/FontText";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useCardAnimation } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../config/colors";
import { setSport } from "../../../redux/CreateGameSport";
import { setDate } from "../../../redux/CreateGameDate";

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
