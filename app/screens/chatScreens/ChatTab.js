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
} from "react-native";
import { FontText, FontTextBold } from "../../components/FontText";
import colors from "../../config/colors";
import PagerView from "react-native-pager-view";
import GroupChats from "./GroupChats";
import DirectMessages from "./DirectMessages";

const width = Dimensions.get("screen").width;
export default function ChatTab({ navigation }) {
  const [animateValue] = useState(new Animated.Value(-1));
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const ref = useRef("");

  const animateSlide = (newState) => {
    Animated.timing(animateValue, {
      toValue: newState,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const pressDirectMessages = () => {
    setButtonDisabled(true);
    ref.current.setPage(0);
    animateSlide(-1);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 250);
  };

  const pressGroupChats = () => {
    setButtonDisabled(true);
    ref.current.setPage(1);
    animateSlide(1);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 250);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          marginTop: 60,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 3 }}>
            <FontTextBold style={{ fontSize: 24 }}>Messages</FontTextBold>
            <FontText style={{ fontSize: 18 }}>
              You have 4 unseen messages
            </FontText>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: colors.lightGray,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/AddIcon.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>

        <View
          style={{ alignItems: "center", marginTop: 30, paddingBottom: 20 }}
        >
          <View
            style={{
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
                width: (width * 0.9) / 2 - 5,
                height: 45,
                borderRadius: 12,
                transform: [
                  {
                    translateX: animateValue.interpolate({
                      inputRange: [-1, 1],
                      outputRange: [
                        (-width * 0.9) / 4 + 5,
                        (width * 0.9) / 4 - 5,
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
              width: width * 0.9,
              height: 60,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback
              disabled={buttonDisabled}
              onPress={pressDirectMessages}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontText style={{ left: 5, fontSize: 15 }}>
                  Direct Messages
                </FontText>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              disabled={buttonDisabled}
              onPress={pressGroupChats}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontText style={{ right: 5, fontSize: 15 }}>
                  Group Chats
                </FontText>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <PagerView ref={ref} scrollEnabled={false} style={{ flex: 1 }}>
        <View style={{ width: "100%", height: "100%" }}>
          <DirectMessages navigation={navigation}></DirectMessages>
        </View>
        <View style={{ width: "100%", height: "100%" }}>
          <GroupChats></GroupChats>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});
