import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import PagerView from "react-native-pager-view";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import FontText from "../assets/Fonts/FontText";
import colors from "../config/colors";
import { HomeTabContext } from "../contexts/HomeTabContext";
import FindGames from "./FindGames";
import MyGames from "./MyGames";

const width = Dimensions.get("screen").width;
function HomeTabScreen() {
  const [animateValue] = useState(new Animated.Value(-1));

  animate = (newState) => {
    Animated.timing(animateValue, {
      toValue: newState,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const ref = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: 80,
          width: "100%",
          marginTop: 30,
          marginBottom: -25,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          zIndex: 1,
          ...styles.shadow,
        }}
      >
        <View
          style={{
            width: width * 0.95,
            height: 60,
            borderRadius: 15,
            backgroundColor: colors.lightGray,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: (width * 0.95) / 2 - 5,
              height: 45,
              borderRadius: 12,
              transform: [
                {
                  translateX: animateValue.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [
                      (-width * 0.95) / 4 + 5,
                      (width * 0.95) / 4 - 5,
                    ],
                  }),
                },
              ],
            }}
          ></Animated.View>
          <TouchableWithoutFeedback
            onPress={() => {
              ref.current.setPage(0);
              animate(-1);
            }}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                left: 5,
              }}
            >
              <FontText>Find Games</FontText>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              ref.current.setPage(1);
              animate(1);
            }}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                right: 5,
              }}
            >
              <FontText>My Games</FontText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <PagerView ref={ref} style={{ flex: 1 }}>
        <View style={{ width: "100%", height: "100%" }}>
          <FindGames></FindGames>
        </View>
        <View style={{ width: "100%", height: "100%" }}>
          <MyGames></MyGames>
        </View>
      </PagerView>
    </View>
  );
}

export default HomeTabScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
    },
    shadowRadius: 3,
  },
});
