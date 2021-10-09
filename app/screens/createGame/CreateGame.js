import React, { useContext, useEffect, useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import BackButton from "../../components/BackButton";

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
import { FontText, FontTextBold } from "../../components/FontText";
import SwipeDownBar from "../../components/SwipeDownBar";

import { useCardAnimation } from "@react-navigation/stack";
import colors from "../../config/colors";
import * as Haptics from "expo-haptics";
import { SportsTypeContext } from "../../contexts/SportsTypeContext";
import { useSelector, useDispatch } from "react-redux";
import { setSport } from "../../redux/CreateGameSport";
import { setDate } from "../../redux/CreateGameDate";
import MapView, { Marker } from "react-native-maps";

export default CreateGame = ({ navigation }) => {
  const dispatch = useDispatch();
  const sportType = useSelector((state) => state.sportType.sport);

  const date = useSelector((state) => state.date.date);
  const location = useSelector((state) => state.location.location);

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
      <SwipeDownBar />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          width: "100%",
          paddingTop: 10,
        }}
      >
        <FontTextBold style={{ fontSize: 25 }}>Create a Game</FontTextBold>

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
          <FontText style={styles.textTitle}>Location</FontText>

          <TouchableOpacity
            activeOpacity={0.3}
            disabled={location}
            onPress={() => {
              navigation.navigate("SetLocation");
            }}
          >
            <View
              style={{
                ...styles.picker,
                paddingLeft: 0,
                height: 150,
                alignItems: "center",
              }}
            >
              {location ? (
                <View style={{ flex: 1, width: "100%" }}>
                  <MapView
                    style={styles.map}
                    mapPadding={{ top: -30, bottom: -30 }}
                    initialRegion={{
                      latitude: location.latitude,
                      longitude: location.longitude,
                      latitudeDelta: 0.005,
                      longitudeDelta: 0.005,
                    }}
                  >
                    <Marker
                      key="0"
                      coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                      }}
                    >
                      <Image
                        style={{
                          height: 50,
                          resizeMode: "contain",
                          bottom: 18,
                        }}
                        source={require("../../assets/locationMarker.png")}
                      />
                    </Marker>
                  </MapView>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate("SetLocation");
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                    ></View>
                  </TouchableWithoutFeedback>
                </View>
              ) : (
                <FontText style={{ fontSize: 15, color: colors.mediumGray }}>
                  Set Location
                </FontText>
              )}
            </View>
          </TouchableOpacity>

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
  map: {
    borderRadius: 8,
    ...StyleSheet.absoluteFillObject,
  },
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
