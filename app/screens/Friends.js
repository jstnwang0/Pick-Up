import React, { Component, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";
import PagerView from "react-native-pager-view";
import SuggestionsTab from "./friendPageTabs/SuggestionsTab";
import RequestsTab from "./friendPageTabs/RequestsTab";
import FriendsTab from "./friendPageTabs/FriendsTab";
import BackButton from "../components/BackButton";

const width = Dimensions.get("screen").width;
export default function Friends({ navigation }) {
  const [animateValue] = useState(new Animated.Value(0));
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const animateSlide = (newState) => {
    Animated.timing(animateValue, {
      toValue: newState,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const ref = useRef("");

  const pressSuggestions = () => {
    setButtonDisabled(true);
    ref.current.setPage(0);
    animateSlide(-1);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 250);
  };

  const pressFriends = () => {
    setButtonDisabled(true);
    ref.current.setPage(1);
    animateSlide(0);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 250);
  };

  const pressRequests = () => {
    setButtonDisabled(true);
    ref.current.setPage(2);
    animateSlide(1);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 250);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", paddingBottom: 20 }}>
        {/* <View style={styles.topBar}>
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
            Friends
          </FontTextBold>
        </View> */}
        <BackButton navigation={navigation} />
        <View
          style={{
            marginTop: 15,
            width: width * 0.9,
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
              width: (width * 0.9) / 3 - 5,
              height: 45,
              borderRadius: 12,
              transform: [
                {
                  translateX: animateValue.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [
                      (-width * 0.9) / 3 + 5,
                      (width * 0.9) / 3 - 5,
                    ],
                  }),
                },
              ],
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            marginTop: 105,
            width: width * 0.9,
            height: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableWithoutFeedback
            disabled={buttonDisabled}
            onPress={pressSuggestions}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontText style={{ left: 5, fontSize: 15 }}>Suggestions</FontText>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            disabled={buttonDisabled}
            onPress={pressFriends}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontText style={{ fontSize: 15 }}>Friends</FontText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            disabled={buttonDisabled}
            onPress={pressRequests}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontText style={{ right: 5, fontSize: 15 }}>Requests</FontText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <PagerView ref={ref} scrollEnabled={false} style={{ flex: 1 }}>
        <View style={{ width: "100%", height: "100%" }}>
          <SuggestionsTab></SuggestionsTab>
        </View>
        <View style={{ width: "100%", height: "100%" }}>
          <FriendsTab></FriendsTab>
        </View>
        <View style={{ width: "100%", height: "100%" }}>
          <RequestsTab></RequestsTab>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    marginTop: 50,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
