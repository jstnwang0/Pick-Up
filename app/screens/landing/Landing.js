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

const width = Dimensions.get("screen").width;
export default function Landing({ navigation }) {
  const ref = useRef("");
  return (
    <View style={styles.container}>
      <FontTextBold style={{ marginTop: 50, fontSize: 30, marginLeft: "10%" }}>
        Logo
      </FontTextBold>
      <PagerView
        ref={ref}
        style={{ flex: 1, marginTop: 25, marginBottom: 20 }}
        showPageIndicator={true}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ width: "90%", alignItems: "center" }}>
            <Image
              source={require("../../assets/Landing1.png")}
              style={{
                width: 316,
                height: 310,
                alignSelf: "center",
                marginTop: 50,
              }}
            />
            <Text style={styles.topicText}>Find Nearby Sports Around you</Text>
            <FontText style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
              cras in at
            </FontText>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MainStack");
            }}
          >
            <View
              style={{
                height: 50,
                width: 200,
                backgroundColor: colors.darkGreen,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ width: "90%", alignItems: "center" }}>
            <Image
              source={require("../../assets/Landing2.png")}
              style={{
                width: 316,
                height: 310,
                alignSelf: "center",
                marginTop: 50,
              }}
            />
            <Text style={styles.topicText}>
              Chat About Sports with Your Friends
            </Text>
            <FontText style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
              cras in at
            </FontText>
          </View>
        </View>
      </PagerView>
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
    marginTop: 60,
    textAlign: "center",
    fontFamily: "Manrope_600SemiBold",
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
});
