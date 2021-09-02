import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

import * as Haptics from "expo-haptics";
import { FilterContext } from "../contexts/FilterContext";
import { useSelector, useDispatch } from "react-redux";
import {
  setFriendsOnly,
  setSports,
  setTimeFour,
  setTimeOne,
  setTimeThree,
  setTimeTwo,
} from "../redux/FilterValues";

function FilterButton(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          width: props.width,
          height: "100%",
          backgroundColor: props.active ? colors.darkGreen : colors.lightGray,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontText
          style={{ fontSize: 16, color: props.active ? "white" : "black" }}
        >
          {props.title}
        </FontText>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function Filters({ navigation }) {
  const dispatch = useDispatch();

  const friendsOnly = useSelector((state) => state.filterValues.friendsOnly);
  const sports = useSelector((state) => state.filterValues.sports);
  const timeOne = useSelector((state) => state.filterValues.timeOne);
  const timeTwo = useSelector((state) => state.filterValues.timeTwo);
  const timeThree = useSelector((state) => state.filterValues.timeThree);
  const timeFour = useSelector((state) => state.filterValues.timeFour);

  const [localFriendsOnly, setLocalFriendsOnly] = useState(friendsOnly);
  const [localSports, setLocalSports] = useState(sports);
  const [localTimeOne, setLocalTimeOne] = useState(timeOne);
  const [localTimeTwo, setLocalTimeTwo] = useState(timeTwo);
  const [localTimeThree, setLocalTimeThree] = useState(timeThree);
  const [localTimeFour, setLocalTimeFour] = useState(timeFour);

  const sportsOnPress = (sport) => {
    if (!localSports.includes(sport)) {
      setLocalSports([...localSports, sport]);
    } else {
      const array = [...localSports];
      array.splice(array.indexOf(sport), 1);
      setLocalSports(array);
    }
  };

  const apply = () => {
    dispatch(setFriendsOnly(localFriendsOnly));
    dispatch(setSports(localSports));
    dispatch(setTimeOne(localTimeOne));
    dispatch(setTimeTwo(localTimeTwo));
    dispatch(setTimeThree(localTimeThree));
    dispatch(setTimeFour(localTimeFour));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          apply();
          navigation.goBack();
        }}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: "black",
            opacity: 0.6,
            width: "100%",
            height: "100%",
          }}
        ></View>
      </TouchableWithoutFeedback>

      <View
        style={{
          width: "90%",
          borderRadius: 30,
          backgroundColor: "white",

          padding: 20,
        }}
      >
        <View
          style={{
            height: 40,
            width: "100%",
            justifyContent: "center",
            // backgroundColor: "red",
            // flexDirection: "row",
          }}
        >
          <FontTextBold style={{ fontSize: 22 }}>
            Filter Your Search
          </FontTextBold>
          <View
            style={{
              position: "absolute",
              right: 0,
              height: 40,
              width: 40,
              borderRadius: 10,
              backgroundColor: colors.lightGray,
            }}
          >
            <TouchableOpacity
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              activeOpacity={0.3}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../assets/closeIcon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FontTextBold style={{ marginTop: 15, fontSize: 18 }}>
          Audience
        </FontTextBold>
        <View style={styles.buttonRow}>
          <FilterButton
            title={"Everyone"}
            onPress={() => {
              setLocalFriendsOnly(false);
            }}
            active={!localFriendsOnly}
            width={"48%"}
          />
          <FilterButton
            title={"Friends"}
            onPress={() => {
              setLocalFriendsOnly(true);
            }}
            active={localFriendsOnly}
            width={"48%"}
          />
        </View>
        <FontTextBold style={{ marginTop: 15, fontSize: 18 }}>
          Sports Type
        </FontTextBold>
        <View style={styles.buttonRow}>
          <FilterButton
            title={"Basketball"}
            onPress={() => {
              sportsOnPress("basketball");
            }}
            active={localSports.includes("basketball")}
            width={"31%"}
          />
          <FilterButton
            title={"Soccer"}
            onPress={() => {
              sportsOnPress("soccer");
            }}
            active={localSports.includes("soccer")}
            width={"31%"}
          />
          <FilterButton
            title={"Volleyball"}
            onPress={() => {
              sportsOnPress("volleyball");
            }}
            active={localSports.includes("volleyball")}
            width={"31%"}
          />
        </View>
        <View style={styles.buttonRow}>
          <FilterButton
            title={"Frisbee"}
            onPress={() => {
              sportsOnPress("frisbee");
            }}
            active={localSports.includes("frisbee")}
            width={"31%"}
          />
          <FilterButton
            title={"Spikeball"}
            onPress={() => {
              sportsOnPress("spikeball");
            }}
            active={localSports.includes("spikeball")}
            width={"31%"}
          />
          <FilterButton
            title={"Football"}
            onPress={() => {
              sportsOnPress("football");
            }}
            active={localSports.includes("football")}
            width={"31%"}
          />
        </View>
        <FontTextBold style={{ marginTop: 15, fontSize: 18 }}>
          Time (Days)
        </FontTextBold>
        <View style={styles.buttonRow}>
          <FilterButton
            title={"<1"}
            onPress={() => {
              setLocalTimeOne(!localTimeOne);
            }}
            active={localTimeOne}
            width={"23%"}
          />
          <FilterButton
            title={"1 - 2"}
            onPress={() => {
              setLocalTimeTwo(!localTimeTwo);
            }}
            active={localTimeTwo}
            width={"23%"}
          />
          <FilterButton
            title={"2 - 3"}
            onPress={() => {
              setLocalTimeThree(!localTimeThree);
            }}
            active={localTimeThree}
            width={"23%"}
          />
          <FilterButton
            title={"3+"}
            onPress={() => {
              setLocalTimeFour(!localTimeFour);
            }}
            active={localTimeFour}
            width={"23%"}
          />
        </View>
        <View
          style={{
            marginTop: 25,
            width: "100%",
            height: 60,
            backgroundColor: colors.darkGreen,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPressIn={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}
            onPress={() => {
              apply();
              navigation.goBack();
            }}
          >
            <FontTextBold style={{ fontSize: 20, color: "white" }}>
              APPLY
            </FontTextBold>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    marginTop: 5,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
