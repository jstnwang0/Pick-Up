import React, { useCallback, useRef, useState } from "react";
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
import FindGames from "./FindGames";
import MyGames from "./MyGames";

const width = Dimensions.get("screen").width;
function HomeTabScreen() {
  const [animateValue] = useState(new Animated.Value(-1));
  const [findGamesDisabled, setFindGamesDisabled] = useState(false);
  const [myGamesDisabled, setMyGamesDisabled] = useState(false);

  const animateSlide = (newState) => {
    Animated.timing(animateValue, {
      toValue: newState,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const ref = useRef("");

  const pressFindGames = () => {
    setMyGamesDisabled(true);
    ref.current.setPage(0);
    animateSlide(-1);
    setTimeout(() => {
      setMyGamesDisabled(false);
    }, 250);
  };

  const pressMyGames = () => {
    setFindGamesDisabled(true);
    ref.current.setPage(1);
    animateSlide(1);
    setTimeout(() => {
      setFindGamesDisabled(false);
    }, 250);
  };

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
        </View>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableWithoutFeedback
            disabled={findGamesDisabled}
            onPress={pressFindGames}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontText style={{ left: 5 }}>Find Games</FontText>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            disabled={myGamesDisabled}
            onPress={pressMyGames}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontText style={{ right: 5 }}>My Games</FontText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <PagerView ref={ref} scrollEnabled={false} style={{ flex: 1 }}>
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
      height: 2,
    },
    shadowRadius: 3,
  },
});
