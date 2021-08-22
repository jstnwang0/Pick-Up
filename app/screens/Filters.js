import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontText, FontTextBold } from "../assets/Fonts/FontText";
import colors from "../config/colors";

import * as Haptics from "expo-haptics";

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
  const [friendsOnly, setFriendsOnly] = useState(false);
  const [sports, setSports] = useState([]);
  const [timeOne, setTimeOne] = useState(false);
  const [timeTwo, setTimeTwo] = useState(false);
  const [timeThree, setTimeThree] = useState(false);
  const [timeFour, setTimeFour] = useState(false);

  const sportsOnPress = (sport) => {
    if (!sports.includes(sport)) {
      setSports([...sports, sport]);
    } else {
      const array = [...sports];
      array.splice(array.indexOf(sport), 1);
      setSports(array);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
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
              setFriendsOnly(false);
            }}
            active={!friendsOnly}
            width={"48%"}
          />
          <FilterButton
            title={"Friends"}
            onPress={() => {
              setFriendsOnly(true);
            }}
            active={friendsOnly}
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
            active={sports.includes("basketball")}
            width={"31%"}
          />
          <FilterButton
            title={"Soccer"}
            onPress={() => {
              sportsOnPress("soccer");
            }}
            active={sports.includes("soccer")}
            width={"31%"}
          />
          <FilterButton
            title={"Volleyball"}
            onPress={() => {
              sportsOnPress("volleyball");
            }}
            active={sports.includes("volleyball")}
            width={"31%"}
          />
        </View>
        <View style={styles.buttonRow}>
          <FilterButton
            title={"Frisbee"}
            onPress={() => {
              sportsOnPress("frisbee");
            }}
            active={sports.includes("frisbee")}
            width={"31%"}
          />
          <FilterButton
            title={"Spikeball"}
            onPress={() => {
              sportsOnPress("spikeball");
            }}
            active={sports.includes("spikeball")}
            width={"31%"}
          />
          <FilterButton
            title={"Football"}
            onPress={() => {
              sportsOnPress("football");
            }}
            active={sports.includes("football")}
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
              setTimeOne(!timeOne);
            }}
            active={timeOne}
            width={"23%"}
          />
          <FilterButton
            title={"1 - 2"}
            onPress={() => {
              setTimeTwo(!timeTwo);
            }}
            active={timeTwo}
            width={"23%"}
          />
          <FilterButton
            title={"2 - 3"}
            onPress={() => {
              setTimeThree(!timeThree);
            }}
            active={timeThree}
            width={"23%"}
          />
          <FilterButton
            title={"3+"}
            onPress={() => {
              setTimeFour(!timeFour);
            }}
            active={timeFour}
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
            activeOpacity={0.3}
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
              navigation.goBack();
            }}
          >
            <FontText style={{ fontSize: 20, color: "white" }}>APPLY</FontText>
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
