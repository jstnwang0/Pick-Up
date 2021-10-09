import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image,
  SafeAreaView,
} from "react-native";
import { FontText, FontTextBold } from "../../components/FontText";
import colors from "../../config/colors";
import PagerView from "react-native-pager-view";
import { ExpandingDot } from "react-native-animated-pagination-dots";

import * as Haptics from "expo-haptics";

const width = Dimensions.get("screen").width;
export default function Landing({ navigation }) {
  const ref = useRef("");
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange: [0, 2],
    outputRange: [0, 2 * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
    []
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.12,
          justifyContent: "flex-end",
        }}
      >
        <FontTextBold style={{ fontSize: 30, marginLeft: "10%" }}>
          Logo
        </FontTextBold>
      </View>
      <View style={{ flex: 0.88 }}>
        <PagerView ref={ref} style={{ flex: 1 }} onPageScroll={onPageScroll}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ flex: 0.45 }}>
              <Image
                source={require("../../assets/Landing1.png")}
                style={styles.firstLandingPic}
              />
            </View>
            <View
              style={{ flex: 0.45, width: "90%", justifyContent: "flex-end" }}
            >
              <Text style={styles.topicText}>
                Find Nearby Sports Around you
              </Text>
              <FontText style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
                cras in at
              </FontText>
            </View>
            <View style={{ flex: 0.2 }} />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ flex: 0.45 }}>
              <Image
                source={require("../../assets/Landing2.png")}
                style={styles.secondLandingPic}
              />
            </View>
            <View
              style={{ flex: 0.45, width: "90%", justifyContent: "flex-end" }}
            >
              <Text style={styles.topicText}>
                Chat About Sports with Your Friends
              </Text>
              <FontText style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
                cras in at
              </FontText>
            </View>
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPressIn={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
                onPress={() => {
                  navigation.navigate("MainStack");
                }}
                style={{
                  width: "40%",
                  height: 60,
                  borderRadius: 20,
                  backgroundColor: colors.darkGreen,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontText style={{ color: "white", fontSize: 18 }}>
                  Log In
                </FontText>
              </TouchableOpacity>
              <View
                style={{
                  width: "40%",
                  height: 60,
                  borderColor: colors.darkGreen,
                  borderWidth: 2,
                  borderRadius: 20,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontText style={{ color: colors.darkGreen, fontSize: 18 }}>
                  Sign Up
                </FontText>
              </View>
            </View>
          </View>
        </PagerView>
      </View>
      <View pointerEvents="none">
        <ExpandingDot
          data={[1, 2]}
          activeDotColor={colors.darkGreen}
          inActiveDotColor={colors.mediumGray}
          expandingDotWidth={30}
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          dotStyle={{
            width: 10,
            height: 10,
            backgroundColor: "red",
            borderRadius: 5,
            marginHorizontal: 5,
            zIndex: 3,
            marginBottom: "77%",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topicText: {
    fontSize: 30,
    marginTop: 100,
    textAlign: "center",
    fontFamily: "Manrope_600SemiBold",
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
  firstLandingPic: {
    width: 316,
    height: 310,
    alignSelf: "center",
    marginTop: 50,
  },
  secondLandingPic: {
    width: 316,
    height: 310,
    alignSelf: "center",
    marginTop: 50,
  },
});
