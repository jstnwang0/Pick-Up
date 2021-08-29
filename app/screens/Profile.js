import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          // padding: 5,
          marginTop: 60,
          flexDirection: "row",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 3, paddingLeft: 20 }}>
          <FontTextBold style={{ fontSize: 24 }}>Jerry Hamada</FontTextBold>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/EditProfile.png")}
            style={styles.topRightLogos}
          />
          <Image
            source={require("../assets/AddPost.png")}
            style={styles.topRightLogos}
          />
          <Image
            source={require("../assets/Settings.png")}
            style={styles.topRightLogos}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
      >
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "red",
            width: "100%",
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              source={require("../assets/Profile.png")}
              style={{ width: 85, height: 85, marginLeft: 20 }}
            />
          </View>
          <View
            style={{
              flex: 6,
              // backgroundColor: "green",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Friends");
              }}
            >
              <View>
                <View>
                  <FontText style={styles.textStyleOne}>Friends</FontText>
                </View>
                <View>
                  <FontTextBold style={styles.textStyleTwo}>200+</FontTextBold>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <View
              style={{
                backgroundColor: colors.mediumGray,
                width: 1,
                height: 30,
                borderRadius: 1,
              }}
            />
            <View>
              <View>
                <FontText style={styles.textStyleOne}>Posts</FontText>
              </View>
              <View>
                <FontTextBold style={styles.textStyleTwo}>50+</FontTextBold>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <FontText style={{ fontSize: 15 }}>
            Incoming sophomore at UC Berkeley, transferring to El Camino CC to
            play juco, then going to the NFL. Future Hall of Famer
          </FontText>
        </View>
        <View
          style={{
            width: "90%",
            height: 1,
            alignSelf: "center",
            backgroundColor: colors.mediumGray,
            marginVertical: 15,
          }}
        />
        <View style={styles.pictureRow}>
          <Image
            source={require("../assets/FootballPlayerPost.png")}
            style={styles.picture}
          />
          <Image
            source={require("../assets/FootballPlayerPost.png")}
            style={styles.picture}
          />
        </View>
        <View style={styles.pictureRow}>
          <Image
            source={require("../assets/FootballPlayerPost.png")}
            style={styles.picture}
          />
          <Image
            source={require("../assets/FootballPlayerPost.png")}
            style={styles.picture}
          />
        </View>
        <View style={styles.pictureRow}>
          <Image
            source={require("../assets/FootballPlayerPost.png")}
            style={styles.picture}
          />
          <Image
            source={require("../assets/FootballPlayerPost.png")}
            style={styles.picture}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 6,
  },
  topRightLogos: { height: 25, width: 25 },
  textStyleOne: {
    fontSize: 17,
    color: colors.mediumGray,
  },
  textStyleTwo: {
    fontSize: 21,
  },
  picture: {
    flex: 1,
    marginRight: 10,
    aspectRatio: 1,
  },
  pictureRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
    paddingLeft: 10,
  },
});
