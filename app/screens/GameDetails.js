import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";
import SwipeDownBar from "../components/SwipeDownBar";
import BackButton from "../components/BackButton";
import ReadMore from "react-native-read-more-text";

export default function GameDetails({ navigation }) {
  const renderTruncatedFooter = (handlePress) => {
    return (
      <FontText
        style={{ color: colors.blue, marginTop: 5 }}
        onPress={handlePress}
      >
        Read more
      </FontText>
    );
  };

  const renderRevealedFooter = (handlePress) => {
    return (
      <FontText
        style={{ color: colors.blue, marginTop: 5 }}
        onPress={handlePress}
      >
        Show less
      </FontText>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ flex: 1, width: "90%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            ...styles.topBar,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <BackButton navigation={navigation} />
          </View>

          <View
            style={{
              flex: 0.25,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <Image
              source={require("../assets/EditGameIcon.png")}
              style={{ height: 25, width: 25 }}
            />
            <Image
              source={require("../assets/ShareIcon.png")}
              style={{ height: 25, width: 25 }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 10,
            height: 90,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              width: "75%",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <FontTextBold style={{ fontSize: 25 }} numberOfLines={2}>
              Sunday Morning Pickup Football
            </FontTextBold>

            <FontText style={{ fontSize: 16 }}>
              Sunday, Aug 08, 2021, 10:00am
            </FontText>
          </View>
          <View
            style={{
              position: "absolute",
              width: "20%",
              height: "100%",
              right: 0,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/CircleIcon.png")}
                style={{ position: "absolute", height: 40, width: 40 }}
              />
              <Image
                source={require("../assets/FootballIcon.png")}
                style={{ position: "absolute", height: 25, width: 25 }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <FontTextBold style={{ marginTop: 5, fontSize: 19 }}>
                About Location
              </FontTextBold>
              <View
                style={{
                  marginTop: 10,
                  height: 200,
                  backgroundColor: colors.lightGray,
                  borderRadius: 10,
                }}
              >
                <View style={{ flex: 1, width: "100%" }}>
                  <MapView
                    style={styles.map}
                    mapPadding={{ top: -30, bottom: -40 }}
                    initialRegion={{
                      latitude: 37.86792,
                      longitude: -122.27137,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}
                  >
                    <Marker
                      key="0"
                      coordinate={{ latitude: 37.86792, longitude: -122.27137 }}
                      centerOffset={{ x: 0, y: -25 }}
                      image={require("../assets/SoccerMarker.png")}
                    >
                      <Callout tooltip={true}></Callout>
                    </Marker>
                  </MapView>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 20,
                  }}
                >
                  <FontText
                    style={{
                      fontSize: 15,
                      textDecorationLine: "underline",
                    }}
                    numberOfLines={2}
                  >
                    1980 Allston Way, Berkeley, CA 94704
                  </FontText>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => {
                    Linking.openURL(
                      "maps:0,0?q=" +
                        "1980 Allston Way, Berkeley, CA 94704" +
                        "@37.86792,-122.27137"
                    );
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
              <FontTextBold style={{ marginTop: 20, fontSize: 19 }}>
                Details
              </FontTextBold>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontTextBold style={{ fontSize: 16 }}>
                  Sports Type:
                </FontTextBold>
                <FontText style={{ marginLeft: 5, fontSize: 16 }}>
                  Soccer
                </FontText>
              </View>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
              >
                <FontText style={{ fontSize: 16, marginTop: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
                  cras in at ultricies ut faucibus. Integer lectus et, sit
                  imperdiet quam nunc.ur mom gay Hac pellentesque odio rutrum
                  scelerisque mattis Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Justo cras in at ultricies ut faucibus.
                  Integer lectus et, sit imperdiet quam nunc.ur mom gay Hac
                  pellentesque odio rutrum scelerisque mattis
                </FontText>
              </ReadMore>
              <FontTextBold style={{ marginTop: 20, fontSize: 19 }}>
                Sports Organizer
              </FontTextBold>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  height: 50,
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1 }}>
                  <FontTextBold style={{ fontSize: 18 }}>
                    Jerry Hamada
                  </FontTextBold>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <View
                    style={{
                      width: 110,
                      height: 35,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: colors.lightGreen,
                      borderRadius: 10,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Image
                      source={require("../assets/Chat.png")}
                      style={{ width: 25, height: 25 }}
                    />
                    <FontText>Message</FontText>
                  </View>
                </View>
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("AllPlayers");
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 70,
                    backgroundColor: colors.lightGray,
                    borderRadius: 10,
                    flexDirection: "row",
                    marginTop: 5,
                  }}
                >
                  <View
                    style={{
                      flex: 4,
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 15,
                    }}
                  >
                    <Image
                      source={require("../assets/ProfilePic2.png")}
                      style={{
                        width: 40,
                        height: 40,
                        zIndex: -1,
                      }}
                    />
                    <View style={styles.circleView}>
                      <Image
                        source={require("../assets/ProfilePic2.png")}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>
                    <View style={styles.circleView}>
                      <Image
                        source={require("../assets/ProfilePic2.png")}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: "#1C2D41",
                        ...styles.circleView,
                      }}
                    >
                      <FontTextBold style={{ color: "white" }}>12</FontTextBold>
                    </View>
                  </View>
                  <View style={{ flex: 3, justifyContent: "center" }}>
                    <FontTextBold style={{ fontSize: 16 }}>
                      16 going
                    </FontTextBold>
                    <FontText
                      style={{ color: colors.mediumGray, fontSize: 15 }}
                    >
                      only 5 spots left
                    </FontText>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontText
                      style={{ textDecorationLine: "underline", fontSize: 15 }}
                    >
                      See all
                    </FontText>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </View>
          <View
            style={{ bottom: 0, height: 120, backgroundColor: "white" }}
          ></View>
        </View>
      </View>

      <View
        style={{
          height: 70,
          width: "90%",
          backgroundColor: colors.darkGreen,
          borderRadius: 10,
          position: "absolute",
          borderRadius: 10,
          bottom: 0,
          marginBottom: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontTextBold style={{ color: "white", fontSize: 20 }}>
          JOIN
        </FontTextBold>
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
  map: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  circleView: {
    borderWidth: 2,
    width: 42,
    height: 42,
    borderRadius: 21,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -15,
  },
  topBar: {
    width: "100%",
    marginTop: 60,
    // marginLeft: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
